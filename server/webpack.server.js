const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform webpack we're building a bundle for nodejs, rather than for the browser
    target:'node',

    //tell webpack the root file of our server app
    entry: './src/index.js',

    // tell webpack where to put the output file that is generated
    output:{ 
        filename:'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals:[webpackNodeExternals()]
}

module.exports = merge(baseConfig,config);