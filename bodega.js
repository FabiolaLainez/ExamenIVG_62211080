const mongoose = require("mongoose");

const mongoose = requiere ('mongoose');
const Schema = mongoose.Schema;

const bodegaSchema = new Schema ({
    Sku: {type:Number},
    Descripcion: {type:String},
    Marca: {type:String},
    NoEstante:{type:Number}
}, {versionkeyfalse});

const Bodega = mongoose.model ('bodega', modelSchema);


module.exports = bodega;

