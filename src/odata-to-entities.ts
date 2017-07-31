import * as oDataMetadata from "odata-v4-metadata";
import * as odatajs from "jaydata-odatajs";
import * as js_beautify from "js-beautify";

export default class ODataToEntitiesConverter {

    private readonly regEdmCollection: RegExp = /Collection\((.*?)\)/;
    private readonly propertyTemplate = "{property}: {type};";
    private readonly classTemplate = "export class {className} { {properties} }";
    private readonly typeTemplate = "type {edmType} = {tsType};";
    private readonly edmTemplate = "export module Edm { {types} }";

    private moduleName: string = "ODataEntities";

    private typeMapping = {
        'Boolean': 'boolean',
        'Binary': 'Uint8Array',
        'DateTime': 'Date',
        'DateTimeOffset': 'Date',
        'Time': 'string',
        'Duration': 'string',
        'TimeOfDay': 'string',
        'Date': 'string',
        'Decimal': 'string',
        'Single': 'number',
        'Float': 'number',
        'Double': 'number',
        'Guid': 'string',
        'Int16': 'number',
        'Int32': 'number',
        'Int64': 'string',
        'Byte': 'number',
        'SByte': 'number',
        'String': 'string'
    };

    public ODataToEntitiesConverter(moduleName?: string) {
        this.moduleName = moduleName;
    }

    public MapPrimitiveEdmTypes(): string {
        let tsCodeEdmTypes = "";
        for (let dts in this.typeMapping) {
            tsCodeEdmTypes = tsCodeEdmTypes + this.typeTemplate.replace("{edmType}", dts).replace("{tsType}", this.typeMapping[dts]);
        }

        return tsCodeEdmTypes;
    }

    public MapEdmClasses = (odataMetadata: string): string => {
        let edmMetadata: oDataMetadata.Edm.Edmx = new oDataMetadata.Edm.Edmx(odatajs.oData.metadata.metadataParser(null, odataMetadata));
        let schema: oDataMetadata.Edm.Schema = edmMetadata.dataServices.schemas[0];

        let classes: string = "";

        schema.entityTypes.forEach((entityType) => {
            var properties = this.MapEdmProperties(entityType.properties, schema);
            properties = properties + this.MapEdmProperties(entityType.navigationProperties, schema);

            classes = classes + this.classTemplate.replace("{className}", entityType.name).replace("{properties}", properties);
        });

        let tsCodeEdmTypes: string = this.MapPrimitiveEdmTypes();
        let src = js_beautify((`declare module ${this.moduleName} { ${this.edmTemplate.replace("{types}", tsCodeEdmTypes)} ${classes} }`));

        return src;
    }

    private MapEdmProperties = (edmProperties: (oDataMetadata.Edm.Property | oDataMetadata.Edm.NavigationProperty)[], schema: oDataMetadata.Edm.Schema): string => {
        let availableTypes: string[] = this.GetEdmTypes(schema);

        let properties: string = "";

        edmProperties.forEach((edmProperty): void => {
            var navPropertyType = edmProperty.type.replace(schema.namespace + ".", "");
            var collectionProperty = this.regEdmCollection.exec(navPropertyType);

            var propertyType = collectionProperty != null ? collectionProperty[1] : navPropertyType;

            if (availableTypes.indexOf(propertyType) == -1) {
                propertyType = "any";
            }

            if (collectionProperty != null) {
                propertyType = propertyType + "[]";
            }

            properties = properties + this.propertyTemplate.replace("{property}", edmProperty.name).replace("{type}", propertyType);
        });

        return properties;
    }

    private GetEdmTypes = (schema: oDataMetadata.Edm.Schema): string[] => {
        let availableTypes: string[] = [];

        for (let dts in this.typeMapping) {
            availableTypes.push("Edm." + dts);
        }

        let entitiesTypes = schema.entityTypes.map(function (entityType) {
            return entityType.name;
        });

        availableTypes.push.apply(availableTypes, entitiesTypes);
        availableTypes = availableTypes.filter(function (v, i) { return availableTypes.indexOf(v) == i; });

        return availableTypes;
    }
}