const rollup = require('rollup');
const dts = require('rollup-plugin-dts').default;
const fs = require('fs');

async function build(inputOptions, outputOptions) {

    const bundle = await rollup.rollup(inputOptions);

    await bundle.write(outputOptions);

    await bundle.close();
}

async function watch(inputOptions, outputOptions) {
    const watchOptions = {
        ...inputOptions,
        output: [outputOptions],
        watch: {
        }
    };
    const watcher = rollup.watch(watchOptions);

    watcher.on('event', event => {
    });

// This will make sure that bundles are properly closed after each run
    watcher.on('event', ({ result }) => {
        if (result) {
            result.close();
            wrapWithModule(outputOptions.file);

        }
    });

// stop watching
    // watcher.close();
}

function wrapWithModule(outputFile) {
    const file = fs.readFileSync(outputFile).toString();
    const noDeclare = file.split('declare ').join('');

    const packageName = JSON.parse(fs.readFileSync('./package.json').toString()).name;

    const withDeclaration = `declare module '${packageName}' {\n${  noDeclare.split('\n').join('\n  ')}\n}\n`;
    fs.writeFileSync(outputFile, withDeclaration);
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

    console.debug(args);
    if(args.includes('-w')){
        watch(inputOptions, outputOptions);
    } else {
        await build(inputOptions, outputOptions);
        wrapWithModule(outputFile);
    }

}

module.exports = {cli};
