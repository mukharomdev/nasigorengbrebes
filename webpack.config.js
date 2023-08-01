const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
  main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
  	rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        	}
      	  }
    	},
    { 
      test: /\.css$/, 
      use: ["style-loader", "css-loader"] 
    },
    { 
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
    },
  ]
},
 plugins: [
    new HtmlWebpackPlugin({
      title: "Nasi Goreng Brebes",
      template: './src/index.html',
    }),
  ],
 // dev server settings
  devServer: {
    'static': {
      directory: './dist'
    },
    open: true,
    watchFiles: ['dist/**/*'],
    hot:true,
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      const port = devServer.server.address().port;
      console.log('Listening on port:', port);
    },
    historyApiFallback:true,
    client: {
      reconnect: true,
    },
  },

};