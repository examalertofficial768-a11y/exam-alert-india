const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    organization:{
        type:String,
        required:true
    },

    lastDate:{
        type:String,
        required:true
    },

    applyLink:{
        type:String,
        default:"#"
    },

    category:{
        type:String,
        default:"Latest Job"
    },

    description:{
        type:String,
        default:""
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Job",jobSchema);