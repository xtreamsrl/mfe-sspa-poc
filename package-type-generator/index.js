const rollup = require('rollup');
const dts = require('rollup-plugin-dts').default;
const fs = require('fs');

async function build(inputOptions, outputOptions) {

    const bundle = await rollup.rollup(inputOptions);

    await bundle.write(outputOptions);

    await bundle.close();
}

async function cli(args) {
    const inputFile = args[2];
    const outputFile = args[3];

    const outputOptions = {
        file: outputFile,
        format: 'es'
    };
    const inputOptions = {
        input: inputFile,
        plugins: [dts()],
    };

    await build(inputOptions, outputOptions);

    const file = fs.readFileSync(outputFile).toString();
    const noDeclare = file.split("declare ").join("");

    const packageName = JSON.parse(fs.readFileSync('./package.json').toString()).name;

    const withDeclaration = `declare module '${packageName}' {\n${noDeclare.split('\n').join('\n  ')}\n}\n`;
    fs.writeFileSync(outputFile, withDeclaration);
}

module.exports = {cli};
