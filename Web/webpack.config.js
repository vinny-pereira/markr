const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env", "@babel/preset-react", "@babel/preset-typescript"] }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                name: '[path][name].[ext]',
            },
            },
            {
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            },
            {
                test: /\.module\.scss$/,
                use: [MiniCssExtractPlugin.loader, 
                    {
                        loader: "css-loader",
                        options: 
                        {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            }
                        }
                    }, "postcss-loader", "sass-loader"]
            },
            {
                test: /^((?!\.module).)*\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: 
                        {
                            modules: true
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: { extensions: [".*", ".js", ".jsx", ".ts", ".tsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",   
        filename: "bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            chunkFilename: '[id].css',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
            watch: true
        },
        port: 3000,
        hot: true
    },
}
