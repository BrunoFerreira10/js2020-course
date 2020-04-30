const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // Add CSS to DOM injecting a <style> tag
                    'css-loader' // Interpret @import, url(),...
                ]
            }
        ]
    }
}