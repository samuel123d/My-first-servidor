const { format } = require("sequelize/lib/utils");
module.exports = {
    type: "object",
    properties: {
        titulo: {type:"string"},
        texto: {type: "string", maxLength: 100, minLength: 10}
    },
    required: ["titulo", "texto"],
    additionalProperties: false
}