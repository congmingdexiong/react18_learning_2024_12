const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: './src/index.js',

    // 输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // 自定义输出文件名
        clean: true // 每次构建清理 dist 文件夹
    },

    // 模式（development 或 production）
    mode: 'development',

    // 模块规则
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // 匹配 .js 或 .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/, // 处理 CSS 文件
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    // 解析扩展名
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 指定模板
            filename: 'index.html'           // 输出的 HTML 文件
        })
    ]
};
