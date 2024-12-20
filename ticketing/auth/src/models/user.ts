import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the properties
// that are required to create a new User
// Son las propiedades que se requiere al crear el documento para el modelo
interface UserAttr {
  email: string;
  password: string;
}

// An interface that describes the properties
// that User Model has
// Se extiende el model para poder implementar la funcion build
interface UserModel extends mongoose.Model<UserDoc> {
  build(attr: UserAttr): UserDoc;
}
// An interface that describes the properties
// that a User Document has
// Este es para poder acceder a las propiedades del documento,
// ya que mongo crea algunas propiedades antes de guardar el modelo
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  // createdAt: string;
  // updateAt: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attr: UserAttr) => {
  return new User(attr);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
