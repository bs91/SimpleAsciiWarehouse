(function() {
"use strict";

var webpack = require('webpack');

var config = {
 module: {
    rules: [
        {
            test: /\.(scss)$/,
            exclude: /(node_modules)/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.(css)$/,
            use:["style-loader", "css-loader"]
        },
        {
            test: /\.(ts)$/,
            exclude: /(node_modules)/,
            use: "ts-loader"
        },
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/, 
            use: "babel-loader"
        }
    ]
},
resolve: {
    extensions: [ ".ts", ".js", ".json" ]
}
};

module.exports = config;
})();

