module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/, // 匹配 .js 和 .jsx 文件
                exclude: /node_modules/, // 排除 node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], // React + ES6
                    },
                },
            },
        ],
    },
};
