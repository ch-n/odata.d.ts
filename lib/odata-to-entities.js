"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oDataMetadata = require("odata-v4-metadata");
var odatajs = require("jaydata-odatajs");
var js_beautify = require("js-beautify");
var ODataToEntitiesConverter = (function () {
    function ODataToEntitiesConverter(moduleName) {
        var _this = this;
        this.regEdmCollection = /Collection\((.*?)\)/;
        this.propertyTemplate = "{property}: {type};";
        this.classTemplate = "export class {className} { {properties} }";
        this.typeTemplate = "type {edmType} = {tsType};";
        this.edmTemplate = "export module Edm { {types} }";
        this.moduleName = "ODataEntities";
        this.typeMapping = {
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
            'Int64': 'number',
            'Byte': 'number',
            'SByte': 'number',
            'String': 'string'
        };
        this.MapEdmClasses = function (odataMetadata) {
            var edmMetadata = new oDataMetadata.Edm.Edmx(odatajs.oData.metadata.metadataParser(null, odataMetadata));
            var schema = edmMetadata.dataServices.schemas[0];
            var classes = "";
            schema.entityTypes.forEach(function (entityType) {
                var properties = _this.MapEdmProperties(entityType.properties, schema);
                properties = properties + _this.MapEdmProperties(entityType.navigationProperties, schema);
                classes = classes + _this.classTemplate.replace("{className}", entityType.name).replace("{properties}", properties);
            });
            var tsCodeEdmTypes = _this.MapPrimitiveEdmTypes();
            var src = js_beautify(("declare module " + _this.moduleName + " { " + _this.edmTemplate.replace("{types}", tsCodeEdmTypes) + " " + classes + " }"));
            return src;
        };
        this.MapEdmProperties = function (edmProperties, schema) {
            var availableTypes = _this.GetEdmTypes(schema);
            var properties = "";
            edmProperties.forEach(function (edmProperty) {
                var navPropertyType = edmProperty.type.replace(schema.namespace + ".", "");
                var collectionProperty = _this.regEdmCollection.exec(navPropertyType);
                var propertyType = collectionProperty != null ? collectionProperty[1] : navPropertyType;
                if (availableTypes.indexOf(propertyType) == -1) {
                    propertyType = "any";
                }
                if (collectionProperty != null) {
                    propertyType = propertyType + "[]";
                }
                properties = properties + _this.propertyTemplate.replace("{property}", edmProperty.name).replace("{type}", propertyType);
            });
            return properties;
        };
        this.GetEdmTypes = function (schema) {
            var availableTypes = [];
            for (var dts in _this.typeMapping) {
                availableTypes.push("Edm." + dts);
            }
            var entitiesTypes = schema.entityTypes.map(function (entityType) {
                return entityType.name;
            });
            availableTypes.push.apply(availableTypes, entitiesTypes);
            availableTypes = availableTypes.filter(function (v, i) { return availableTypes.indexOf(v) == i; });
            return availableTypes;
        };
        this.moduleName = moduleName;
    }
    ODataToEntitiesConverter.prototype.MapPrimitiveEdmTypes = function () {
        var tsCodeEdmTypes = "";
        for (var dts in this.typeMapping) {
            tsCodeEdmTypes = tsCodeEdmTypes + this.typeTemplate.replace("{edmType}", dts).replace("{tsType}", this.typeMapping[dts]);
        }
        return tsCodeEdmTypes;
    };
    return ODataToEntitiesConverter;
}());
exports.default = ODataToEntitiesConverter;
//# sourceMappingURL=odata-to-entities.js.map