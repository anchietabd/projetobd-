var mongoCliente = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongoCliente.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Banco de dados conectado")
    var dbo = db.db("projetobd")
    var clientes = dbo.collection("clientes")
    clientes.insert({
        _id: "137",
        nome: "Fellipe",
        email: "fellipeanchieta@gmail.com",
        endereco: {
            estado: "Pernambuco",
            cidade: "Garanhuns"
        },
        pet: {
            sexo: "macho",
            raca: "pastor alemao",
            idade: "4",
            cor: "preto"
        }
    }, function (err, res) {
        if (err) throw err;
        console.log("ok");

    })
     clientes.insertMany([
        {
            _id: "00",
            nome: "duda",
            email: "dudaanchieta@gmail.com",
            endereco: {
                estado: "Pernambuco",
                cidade: "palmeirina"
            },
            pet: {
                sexo: "femia",
                raca: "pastor alemao",
                idade: 4,
                cor: "preto"
            }
        },

        {
            _id: "005",
            nome: "tereza",
            email: "terezaanchieta@gmail.com",
            endereco: {
                estado: "Rio de Janeiro",
                cidade: "RIO"
            },
            pet: {
                sexo: "macho",
                raca: "perdiguero",
                idade: 5,
                cor: "amarelo"
            }
        },

        {
            _id: "009",
            nome: "Macelo",
            email: "maceloanchieta@gmail.com",
            endereco: {
                estado: "bahia",
                cidade: "salvador"
            },
            pet: {
                sexo: "femia",
                raca: "collie",
                idade: 28,
                cor: "rosa"
            }
        },
        {
            _id: "004",
            nome: "Gustavo",
            email: "Gustavoanchieta@gmail.com",
            endereco: {
                estado: "Pernambuco",
                cidade: "recife"
            },
            pet: {
                sexo: "femia",
                raca: "labrador",
                idade: 8,
                cor: "verde"
            }
        },

        {
            _id: "003",
            nome: "Maria",
            email: "mariaanchieta@gmail.com",
            endereco: {
                estado: "Pernambuco",
                cidade: "caruaru"
            },
            pet: {
                sexo: "macho",
                raca: "vira lata",
                idade: 4,
                cor: "purpura"
            }
        },{
            _id: "002",
            nome: "diego",
            email: "diegoanchieta@gmail.com",
            endereco: {
                estado: "Pernambuco",
                cidade: "Correntes"
            },
            pet: {
                sexo: "macho",
                raca: "pastor belga",
                idade: 2,
                cor: "branco"
            }
        },
        {
            _id: "001",
            nome: "gabriel",
            email: "gabrielanchieta@gmail.com",
            endereco: {
                estado: "Alagoas",
                cidade: "vicosa"
            },
            pet: {
                sexo: "femia",
                raca: "pastor alemao",
                idade: 3,
                cor: "preto"
            }
        }
    ], function (err, res) {
        if (err) throw err;
        console.log(res.insertedCount + "ok");

    })

    var query = { nome: "Fellipe"};
    clientes.update(query,{$set: {email:"fellipeaprovado@gmail.com"}}, function(err, res){
        if (err) throw err;
      console.log("ok");

    })

    var query = { nome: "Fellipe"};
    clientes.update(query,{$unset: {email:""}}, function(err, res){
        if (err) throw err;
      console.log("ok");

    })

    var query = { nome: "duda"};
    clientes.update(query,{$set: {"pet.cor":"branco"}}, function(err, res){
        if (err) throw err;
      console.log("ok");

    })
        var query = { nome: "duda"};

        clientes.update(query,{$set: {
    localizacao: {
        latitude:-8.890278,
        longetude:-36.492778 
    }

        }}, function(err, res){
            if (err) throw err;
          console.log("ok");

        })
    var query = { nome: "duda"};

        clientes.update(query,{$set: {

    seguidores: [001,002,005]

        }}, function(err, res){
            if (err) throw err;
          console.log("ok");

        })
    var query = { nome: "duda" };

    clientes.update(query, { $push: { seguidores: 09 } }, function (err, res) {
        if (err) throw err;
        console.log("ok");

    })

    var query = { nome: "duda" };

    clientes.update(query, { $pull: { seguidores: 09 } }, function (err, res) {
        if (err) throw err;
        console.log("ok");

    })

    var query = { nome: "tereza" };

    clientes.findOne(query, function (err, res) {
        if (err) throw err;
        console.log(res);

    })

    var query = { nome: "tereza" };

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })

    var query = { "pet.raca": "pastor alemao" };

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })

    var query = { seguidores:5};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = { "endereco.estado":"Pernambuco", "pet.raca":"pastor alemao"};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })

    var query = {$or: [{"endereco.estado":"Pernambuco"}, {"pet.raca":"pastor alemao"}]};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"pet.idade":{$in:[4,3]}};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"pet.idade":{$nin:[4,3]}};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"pet.idade":{$all:[4]}};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"pet.idade":{$gt: 4 }};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"pet.idade":{$gte: 4 }};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"pet.idade":{$lt: 4 }};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"pet.idade":{$lte: 4 }};

    clientes.find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"endereco.cidade": "RIO"};

    clientes.find(query).count(function (err, res) {
        if (err) throw err;
        console.log(res);

    })
    var query = {"nome": "duda"};

    clientes.update(query, {$pullAll:{seguidores:[2,5]}},function (err, res) {
        if (err) throw err;
        console.log("ok");

    })
    var query = {"nome": "duda"};

    clientes.update(query, {$push:{seguidores:{$each:[2,5]}}},function (err, res) {
        if (err) throw err;
        console.log("ok");

    })
    var query = {"nome": "duda"};

    clientes.deleteOne(query,function (err, res) {
        if (err) throw err;
        console.log("ok");

    })
    var query = {"pet.cor": "rosa"};

    clientes.deleteMany(query,function (err, res) {
        if (err) throw err;
        console.log("ok");

    })
    db.close();


});

