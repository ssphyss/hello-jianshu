const path = require('path');

module.exports = {
    // 入口文件
    entry: "./src/hello.js",
    // 輸出文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.bundle.js"
    },
    mode: 'development'
}


// const path = require('path');

// module.exports = {
//     // 入口文件
//     entry: "./src/index.js",
//     // 輸出文件
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: "app.bundle.js"
//     },
//     mode: 'development'
// }