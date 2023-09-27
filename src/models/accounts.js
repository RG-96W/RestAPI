import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  login: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z0-9]{4,}$/.test(value),
      message: "O login deve conter pelo menos 4 caracteres alfanuméricos.",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z0-9]{4,}$/.test(value),
      message: "A senha deve conter pelo menos 4 caracteres alfanuméricos.",
    },
  },
  email: {
    type: String,
    validate: {
      validator: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      message: "Informe um endereço de e-mail válido.",
    },
  },
  data: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

const account = mongoose.model("account", accountSchema);

export default account;
