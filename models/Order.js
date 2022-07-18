import mongoose from "mongoose";

const OderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxlength: 60,

    },
    address: {
        type: String,
        required: true,
        maxlength: 200,

    },
    total: {
        type: Number,
        required: true,
    },
    status:{
        type:Number,
        default:0,
    },
    status:{
        type:Number,
        required:true,
    },
   
},
 {timestamps:true}
);

export default mongoose.models.Product ||
 mongoose.model("Order", OderSchema);