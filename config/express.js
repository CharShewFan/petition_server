const express = require('express'),bodyParser = require('body-parser')

module.exports = function (){
    const app = express();
    app.use(bodyParser.json())
    return app; // 返回一个新的 app 实例
}