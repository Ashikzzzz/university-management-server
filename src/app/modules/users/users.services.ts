import config from '../../../config/index'
import { IUser } from './users.interface'
import User from './users.model'
import { generateID } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //generte incremental id
  const id = await generateID()
  user.id = id

  //generate default pass
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('User created failed')
  }

  return createdUser
}

export default {
  createUser,
}
