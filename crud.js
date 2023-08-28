const fs=require("fs");
const path=require("path");
const dirpath=path.join(__dirname,"crud");   //make a folder name as "crud"
const filepath=(dirpath+"/apple.txt");
//CREATE

fs.writeFileSync(filepath,"This is simple file");

//READ

fs.readFile(filepath,'utf-8',(err,iteam)=>{
    console.log(iteam)
})

//UPDATE

fs.appendFile(filepath," and have some words.",(err)=>{
    if(!err) console.log("file is upadted")
})

//Delete

fs.unlinkSync(filepath);