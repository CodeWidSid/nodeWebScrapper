const path = require('path');
const fs = require('fs');
const postDataFile = path.join(process.mainModule.filename,'../','data','posts.json');

module.exports = class Post{
    constructor(header,imageUrl,content){
        this.header = header;
        this.imageUrl = imageUrl;
        this.content = content;
    }

    savePost(){
        this.id = Math.random().toString().split('.')[1];
        let data = [];
        fs.readFile(postDataFile,(err,fileContent)=>{
            if(!err){
                data = JSON.parse(fileContent);
            }
            data.push(this);
            fs.writeFile(postDataFile,JSON.stringify(data),err=>{
                if(err) throw err
            })
        })
    }

    static fetchPosts(callback){
        fs.readFile(postDataFile,(err,fileContent)=>{
            if(err){
                return callback([])
            }
            return callback(JSON.parse(fileContent))
        })
    }

    static fetchPostById(id, callback){
        this.fetchPosts(posts=>{
            let post = posts.find(p=>p.id==id);
            callback(post);
        })
    }

    static deletePostById(id){
        let data = [];
        this.fetchPosts(posts=>{
            let deleteIndex = posts.findIndex(p=>p.id==id);
            fs.readFile(postDataFile,async (err,fileContent)=>{
                if(!err){
                    data = JSON.parse(fileContent);
                }
                await data.splice(deleteIndex,1);
                await fs.writeFile(postDataFile,JSON.stringify(data),(err)=>{
                    if(err) throw err
                })
            })
        })
    }

    static editPostById(id,newData){
        let data = [];
        this.fetchPosts(posts=>{
            let editIndex = posts.findIndex(p=>p.id==id);
            fs.readFile(postDataFile,async (err,fileContent)=>{
                if(!err){
                    data = JSON.parse(fileContent);
                }
                await data.splice(editIndex,1,newData);
                await fs.writeFile(postDataFile,JSON.stringify(data),(err)=>{
                    if(err) throw err
                })
            })
        })
    }
}