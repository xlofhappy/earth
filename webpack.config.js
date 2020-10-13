const path = require('path');
module.exports = {
    entry: {
        globes: '/public/libs/earth/source/globes.js',
        micro: '/public/libs/earth/source/micro.js',
        products: '/public/libs/earth/source/products.js',
        earth: '/public/libs/earth/source/earth.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'public/libs/earth/1.0.0'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /(node_modules|bower_components|lib)/,
                include: /(_page|_component)/,
                loader: 'babel-loader'
            }
        ]
    },
    // mode: 'development',
    mode: 'production',
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all'
    //   }
    // }
};

