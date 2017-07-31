#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var fs = require("fs");
var request = require("request");
var odata_to_entities_1 = require("./odata-to-entities");
var argv = yargs
    .usage('Usage: jaysvcutil --metadataUri <OData server url>')
    .example('jaysvcutil -m http://services.odata.org/V4/Northwind/Northwind.svc', 'Generate context from Northwind OData service')
    .describe('m', 'The URI of the OData $metadata definition. Can be an online resource or a local file as well')
    .describe('c', 'The module name of the generated TypeScript definition. Default is ODataEntities')
    .describe('f', 'The name of the generated TypeScript definition file. Default is ODataEntities.d.ts')
    .describe('h', 'Dispaly this help screen.')
    .alias('m', 'metadataUri')
    .alias('f', 'dts')
    .alias('c', 'module')
    .alias('h', 'help')
    .wrap(yargs.terminalWidth() - 1)
    .argv;
if (argv.help) {
    yargs.showHelp();
}
else if (!argv.metadataUri) {
    yargs.showHelp();
    console.log('ERROR: The option --metadataUri is mandatory, you must define it.');
}
else {
    var filename_1 = argv.dts || 'ODataEntities.d.ts';
    var modulename_1 = argv.module || 'ODataEntities';
    var writeFile = function (text) {
        var odataConverter = new odata_to_entities_1.default(modulename_1);
        var src = odataConverter.MapEdmClasses(text);
        fs.writeFileSync(filename_1, src, { encoding: 'utf8' });
    };
    if (argv.metadataUri.indexOf('http:') == 0 || argv.metadataUri.indexOf('https:') == 0) {
        request({
            method: "GET",
            "rejectUnauthorized": false,
            "url": argv.metadataUri
        }, function (error, response, body) {
            if (error) {
                console.log('ERROR:', error);
            }
            else {
                writeFile(body);
            }
        });
    }
    else {
        fs.readFile("test/metadata.xml", 'utf8', function (err, text) {
            writeFile(text);
        });
    }
}
//# sourceMappingURL=cli.js.map