const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// hotmodulereplacement

module.exports = {
    mode: 'production',
    entry: './client/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.ts/,
                use: ['ts-loader']
            },
            {
                test: /\.(html|htm)/,
                use: ['raw-loader', 'html-withimg-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack hello'
        })
    ],
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: true
    }
}