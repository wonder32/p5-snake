const path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    TerserPlugin = require('terser-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    StyleLintPlugin = require('stylelint-webpack-plugin'),
    webpack = require('webpack'),
    ImageminPlugin = require('imagemin-webpack-plugin').default;

// Paths.
const JS_DIR = path.resolve(__dirname, 'assets/src/js');
const BUILD_DIR = path.resolve(__dirname, 'assets/dist');

// Change edit these
const BUILD_DIR_PUBLIC = '/dist';
const WEBSITE_URL = 'www.snake.test';
const SSL_KEY = '/Users/stefanschotvanger/.config/valet/Certificates/snake.test.key';
const SSL_CERT = '/Users/stefanschotvanger/.config/valet/Certificates/snake.test.crt';

// process.on('warning', (warning) => {
//     console.log(warning.stack);
// });

module.exports = (env, options) => {
    return {
        mode: 'development',
        devtool: 'source-map',
        context: __dirname,
        entry: {
            'main': JS_DIR + '/main.js',
        },
        output: {
            path: BUILD_DIR,
            filename: 'js/[name].js',
        },
        externals: {},
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.s?css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: BUILD_DIR_PUBLIC,
                            },
                        },
                        {
                            loader: 'css-loader',
                            //options: { url: false }
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images/',
                                name: '[name].[ext]',
                                //emitFile: false
                            },
                        },
                        'img-loader',
                    ],
                },
            ],
        },
        plugins: [
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                disable: options.mode !== 'production', // Disable during development
                pngquant: {
                    quality: '95-100',
                },
            }),
            new StyleLintPlugin({
                files: 'assets/src/scss/**/*.(s(c|a)ss|css)',
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
            }),
            new BrowserSyncPlugin({
                proxy: 'https://' + WEBSITE_URL,
                host: WEBSITE_URL,
                files: '**/**.(json|php)',
                https: {
                    key: SSL_KEY,
                    cert: SSL_CERT,
                },
            }),
        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    extractComments: true,
                }),
            ],
        },
    };
};
