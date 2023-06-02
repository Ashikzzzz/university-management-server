import { Request, Response } from 'express'
import usersServices from './users.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersServices.createUser(user)
    res.status(201).json({
      success: true,
      message: 'user created Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'User created Failed',
    })
  }
}

export default {
  createUser,
}
