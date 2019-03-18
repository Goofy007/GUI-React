const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx' // 程序的入口
    },
    output: { //程序的出口
        path: path.resolve(__dirname,'./dist/lib'), //打包的路径
        library: 'GUI-React',  //库的名称
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}