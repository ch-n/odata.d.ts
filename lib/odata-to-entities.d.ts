export default class ODataToEntitiesConverter {
    private readonly regEdmCollection;
    private readonly propertyTemplate;
    private readonly classTemplate;
    private readonly classWithInheritanceTemplate;
    private readonly typeTemplate;
    private readonly edmTemplate;
    private moduleName;
    private typeMapping;
    constructor(moduleName?: string);
    MapPrimitiveEdmTypes(): string;
    MapEdmClasses: (odataMetadata: string) => string;
    private MapEdmProperties;
    private GetEdmTypes;
}
