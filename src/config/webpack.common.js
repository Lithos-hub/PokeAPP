var path = require("path");
var fs = require("fs");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });



const config = {
    entry: './src/js/index.js',
        output: {
            filename: '[hash].bundle.js',
            path: path.resolve(__dirname, "../", 'dist')
        },
        module: {          
            rules: [
                    {
                    test: /\.html$/i,
                    loader: 'html-loader',
                    },
                    {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: 
                        {
                            loader: "url-loader",
                            options: {
                                limit: 10000
                            },
                        },
                    },
                    {
                    test: /\.s[ac]ss$/i,
                        use: [
                            // Creates `style` nodes from JS strings
                            "style-loader",
                            // Translates CSS into CommonJS
                            "css-loader",
                            // Compiles Sass to CSS
                            "sass-loader",
                        ],
                    },
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
                ],
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Vanilla PokéAPP",
                template: "./src/index.html"
            })
        ],
        // externals: nodeModules,
        // target: 'node',
}

module.exports = config;
