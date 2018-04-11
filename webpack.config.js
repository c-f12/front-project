const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//Creamos un objeto de configuración y le pasamos el nombre del fichero que queremos que extraiga:
const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
});

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                //use: [ 'style-loader', 'css-loader', 'sass-loader']

                use: extractSass.extract({
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"},
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './images/[name].[ext]',
                    } 
                }]
            },        
        ]
    },
    plugins: [
        extractSass
    ],
    mode: 'development',

    devServer: {
        host:'127.0.0.1',
        port: 8080,
        inline: true,
        contentBase: path.join(__dirname, "dist"),
    },
};