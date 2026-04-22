const invitationSchema = new mongoose.Schema({
    usedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },

    code:{
        type: String,
        required: true
    },  

    isUsed: {
        type: Boolean,
        default: false
    },

    isExpired: {
        type: Boolean,
        default: false
    },

    expiresAt: {
        type: Date,


    },

    usedAt:{
        type: Date,
    }

}, {timestamps:true})


    const Invitation = mongoose.models.invitation || 
    mongoose.model("invitation", invitationSchema)

    export default Invitation;

