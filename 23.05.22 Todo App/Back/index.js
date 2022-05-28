import express from "express";
import fs from "fs/promises";


const app = express();
app.use(express.json());

app.listen(6011)

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => {
    fs.readFile("./toDos.json", "utf-8" )
    .then((data) => res.send(data))
    .catch((err) => res.send(err.message))
})

app.get("/toDos", (req, res) => {
    fs.readFile("./toDos.json", "utf-8")
    .then((data) => res.send(data))
    .catch((err) => res.send(err.message))
})

app.post("/toDos", (req, res) => {
    fs.readFile("./toDos.json", ("utf-8"))
    .then((data) => {
        let jsonData = JSON.parse(data);
        jsonData.push(req.body)
        try{
            fs.writeFile("./toDos.json", JSON.stringify(jsonData, null, 2))
            res.send("Post request successfully works")
        }catch{
            res.send("Post request failed")
        }
        res.send(jsonData)
    })
    .catch((err) => console.log(err.message))
})

app.delete("/toDos", (req, res) => {
    fs.readFile("./toDos.json", ("utf-8"))
    .then((data) => {
        let jsonData = JSON.parse(data);
        /* for (const objElement of jsonData) {
            if(objElement["id"] === req.body.id){
                console.log(objElement)
                res.send(objElement)
                return;
            }
        } */
        const objElement = jsonData[req.body.id - 1];
        console.log(objElement)
        if (objElement) {
            jsonData.splice(req.body.id - 1, 1) 
            fs.writeFile("./toDos.json", JSON.stringify(jsonData, null, 2))
            res.send("Delete request successfully works")
            return
        }
        res.send("There's no such toDo")
        return;
    })

})

app.put("/toDos", (req, res) => {
    fs.readFile("./toDos.json", ("utf-8"))
    .then((data) => {
        let jsonData = JSON.parse(data);

        const objElement = jsonData[req.body.id - 1];
        console.log(req.body)
        if (objElement) {
            if(req.body.title !== objElement.title){
                objElement.title = req.body.title;
            }
            if(req.body.time !== objElement.time){
                objElement.time = req.body.time;
            }
            if(req.body.status !== objElement.status){
                objElement.status = req.body.status;
            }
            fs.writeFile("./toDos.json", JSON.stringify(jsonData, null, 2))
            res.send(objElement)
            return;
        }
        res.send("There's no such toDo for updating")
        return;
    })
})