const fs=require('fs');
// fs.mkdir('myFolder',(err)=>{
//     if(err)console.log("ERR:",err);
//     else console.log("Drectory ctreated");
// })

	fs.mkdir("Folder", err => {
  if (err) console.log(err);
  console.log("Folder created!");
});
