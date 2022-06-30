const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator: (value)=> { 
                let isValid = true;
                const specialSymbols= ["@","#","$", "%", "*", "&"]
                for(let i=0;i<specialSymbols.length;i++) {
                    if(value.includes(specialSymbols[i])) {
                        isValid = false;
                        break;
                    }
                }
                return isValid;
            } ,
            message: (props)=> {return `${props.value} contains pattern @#$%&* under username`}
        }

    },
    password: String
});
module.exports = mongoose.model("userInfo", userInfoSchema);