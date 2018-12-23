const path = require('path')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
          vue: {
            loaders: {
              scss: 'style!css!sass'
            }
          },
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {}
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader' ,
          }, {
          loader: 'css-loader',
          }],
      },
      { 
        test : /\.scss$/,
        use: {
              loader: 'sass-loader',
             options: {
                 includePaths: [
                       path.resolve('../node_modules'), // @import('jeet/scss/jeet/index')
                  ]
              }
            }
        }
    ]
  },
  resolve: {
    alias: {
      //'vue$': 'vue/dist/vue' for development
      'vue$': 'vue/dist/vue.min.js'
    }
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    compress: true,
    disableHostCheck: true
  },
  devtool: '#eval-source-map'
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
