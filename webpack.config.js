const path = require('path');

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'babel-preset-stage-0', 'es2017']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json']
    }
};