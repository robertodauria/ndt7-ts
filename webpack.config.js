const path = require('path');

const nodeConfig = {
    target: 'node',
    entry: './src/ndt7.js',
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'ndt7.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        library: {
            name: "ndt7",
            type: "umd",
        }
    },
    externals: {
        'web-worker': 'commonjs2 web-worker',
        'node-fetch': 'commonjs2 node-fetch',
        'ws': 'commonjs2 ws'
    },
    externalsPresets: {
        node: true
    }
};

module.exports = nodeConfig;