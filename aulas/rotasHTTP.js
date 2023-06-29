const http=require("http")
const porta=8180
http.createServer((req, res)=>{
    let rota = req.url
    if (rota == '/cadastro'){
        res.end("<h1>Tela de cadastro!!!</h1>")
    } else if (rota == '/consulta'){
        res.end("<h1>Tela de consulta !!!</h1>")
        res.sendFile(__dirname + "")
    } else{
        res.end("<h1>Tela inicial !!!</h1>")
    }
}) .listen(porta)
console.log(`Servidor rodando em : http://localhost:${porta} ...`)