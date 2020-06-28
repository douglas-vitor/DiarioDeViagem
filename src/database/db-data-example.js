// Importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Cria objeto que ira fazer operações no BD
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

// Utilizando BD
// Criando as tabelas necessarias
db.serialize( () => {
    db.run(`
    CREATE TABLE IF NOT EXISTS trips (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        place TEXT,
        title TEXT,
        description TEXT,
        capa TEXT,
        user TEXT,
        codeuser TEXT
    );
`)

db.run(`
    CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        image TEXT,
        comment TEXT,
        tripcode INTEGER,
        user TEXT,
        codeuser TEXT
    );

`)

db.run(`
    CREATE TABLE IF NOT EXISTS gallery (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        description TEXT,
        tripcode INTEGER,
        user TEXT,
        codeuser TEXT
    );

`)

// Função de chamada de cadastro no BD
function afterInsertData(err) {
    if(err) {
        return console.log(err)
    }
    console.log("Cadastro de Comentario com sucesso!")
    console.log(this)
}

// Inserir dados de exemplo
// Data trips
var query = `
    INSERT INTO trips (
        place,
        title,
        description,
        capa,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?, ?);
`

var values = [
    "Paris",
    "Minha viagem para Paris!",
    "Esta foi a minha primeira viagem para a europa, onde finalmente descobri novos lugares e me aventurei para fora do país.",
    "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO trips (
        place,
        title,
        description,
        capa,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?, ?);
`

var values = [
    "Alemanha",
    "Como foi a viagem para a Alemanha.",
    "Esta foi a minha segunda viagem internacional, com ela aprendi e aperfeiçoei meus conhecimentos, melhorei meu idioma, e tive diversas novas experiencias de vida.",
    "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

/* Data comments */
var query = `
    INSERT INTO comments (
        name,
        image,
        comment,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?, ?);
`

var values = [
    "Freddy Kruege",
    "https://cdn.pixabay.com/photo/2018/09/15/08/56/freddy-krueger-3678932_960_720.png",
    "aiai estou testando cansado ja.",
    "1",
    "freduser",
    "100"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO comments (
        name,
        image,
        comment,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?, ?);
`

var values = [
    "Carlos Adão",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/User_icon-cp.png",
    "Eu também estive aqui.",
    "1",
    "adaouser",
    "101"
]

db.run(query, values, afterInsertData)

/* Data gallery */
var query = `
    INSERT INTO gallery (
        image,
        description,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?);
`

var values = [
    "https://images.unsplash.com/photo-1507666664345-c49223375e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
    "",
    "1",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO gallery (
        image,
        description,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?);
`

var values = [
    "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "",
    "1",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO gallery (
        image,
        description,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?);
`

var values = [
    "https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    "",
    "1",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO gallery (
        image,
        description,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?);
`

var values = [
    "https://images.unsplash.com/photo-1485199433301-8b7102e86995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=780&q=80",
    "",
    "1",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO gallery (
        image,
        description,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?);
`

var values = [
    "https://images.unsplash.com/photo-1435164205788-305635a36ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "",
    "1",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO gallery (
        image,
        description,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?);
`

var values = [
    "https://images.unsplash.com/photo-1565006147422-2cbd0614b75d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=898&q=80",
    "",
    "1",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO gallery (
        image,
        description,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?);
`

var values = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
    "",
    "1",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

var query = `
    INSERT INTO gallery (
        image,
        description,
        tripcode,
        user,
        codeuser
    ) VALUES (?, ?, ?, ?, ?);
`

var values = [
    "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "",
    "1",
    "teste",
    "1"
]

db.run(query, values, afterInsertData)

// Consultar dados tabela trips
db.all(`SELECT * FROM trips`, function(err, rows) {
    if(err) {
        return console.log(err)
    }
    console.log("Aqui estão seus registros: ")
    console.log(rows)
})

// Consultar dados tabela comments
db.all(`SELECT * FROM comments`, function(err, rows) {
    if(err) {
        return console.log(err)
    }
    console.log("Aqui estão seus registros: ")
    console.log(rows)
})

// Consultar dados tabela gallery
db.all(`SELECT * FROM gallery`, function(err, rows) {
    if(err) {
        return console.log(err)
    }
    console.log("Aqui estão seus registros: ")
    console.log(rows)
})


})