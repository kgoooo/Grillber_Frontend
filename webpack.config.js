const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
          },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.s?css$/,
          use:[ {
            loader: "style-loader",
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  }  
};