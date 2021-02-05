const db = require('./config/db')
const express = require('./config/express')

const app = express();

//connect to Mysql on start

async function main(){
    try{
        await db.connect();
        app.listen(process.env.DB_HOST,function (){
            console.log("listen to port : " + process.env.DB_HOST)
        });
    }
    catch (error){
        console.log("something wrong with the connection")
        process.exit(1); // 1 means true 退出程序
    }
}

main().catch(error => console.log(error))