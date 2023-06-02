import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, object>

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

// 3. Create a Model.
const User = model<IUser, UserModel>('User', userSchema)

export default User
