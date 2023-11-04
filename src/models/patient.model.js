import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 4,
        default: null
    },
    DOB: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    countryOfOrigin: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }


});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;