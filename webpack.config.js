const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode: 'production',
    entry: {
        index: './lib/index.tsx' // 程序的入口
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: { //程序的出口
        path: path.resolve(__dirname, './dist/lib'), //打包的路径
        library: 'GUI-React',  //库的名称
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.s([ac])ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use:['file-loader']
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'GUI',
    //         template: 'index.html'
    //     })
    // ],
    // externals: {
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React'
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM'
    //     }
    // }
}