//create database mcbt7
// const mysql = require('mysql');

// const app = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:""
// });

// app.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!");
//         app.query("CREATE DATABASE mangcambient8",function(err,result){
//             if(err) throw err;
//             console.log("Database created")
       
//     });
// })










// // create table datasensor
// const mysql = require('mysql');

// const app = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"mangcambient8"

// });
// app.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!");
//         app.query("CREATE TABLE dlcambien(ID int(10) AUTO_INCREMENT PRIMARY KEY,ID_cambien int(10),nhiet_do int(10),do_am int(10),anh_sang int(10),thoigian timestamp NOT null DEFAULT CURRENT_TIMESTAMP)",function(err,result){
//             if(err) throw err;
//             console.log("Database created")
       
//     });
// })








// //insert 
const mysql = require('mysql');

const app = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mangcambient8"
});
// function random(ID_cambien,nhiet_do,do_am,anh_sang){
//         ID_cambien = Math.round(Math.random()*5),
//         nhiet_do=Math.round(Math.random()*40),
//         do_am =Math.round(Math.random()*100),
//         anh_sang= Math.round(Math.random()*100)    
    
// }
// random();
// app.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!");
//     for(var i = 0; i<100;i++){
//         const data = random();
//         var sql1 = `INSERT INTO dlcambien (ID_cambien,nhiet_do,do_am,anh_sang) VALUES(${data})` ;
       
//         app.query(sql1,function(err,result){
//             if(err) throw err;
//         })
//     }
// })



//select
app.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    app.query('SELECT*FROM dlcambien ORDER BY nhiet_do DESC  LIMIT 5',function(err,result){
            if(err) throw err;
            console.log(result)
       
    });
})
