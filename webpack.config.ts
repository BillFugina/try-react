import * as path from 'path'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

var config = {
    entry: ["./src/app.tsx"],
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "bundle.js"
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./styles'),
            path.resolve('./node_modules')
        ],
        extensions: [".ts", ".tsx", ".js", ".scss"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'

            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: 'source-map-loader'
            },
            {
                test: /\.scss$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Howdy',
        template: "assets/html/index.html"
    })],
    devServer: {
        contentBase: 'build',
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'inline-source-map'
};

module.exports = config;