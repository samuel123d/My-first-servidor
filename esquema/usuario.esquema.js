const { format } = require("sequelize/lib/utils");

module.exports = {
    type: "object",
    properties: {
        nome: {type:"string"},
        idade: {type:"number"},
        sexo: {type:"string"}
        
       
    },
    required: ["nome", "idade", "sexo"],
    additionalProperties: false
}