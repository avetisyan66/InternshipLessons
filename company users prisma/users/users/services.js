import { getAllUsersDB, getUserById } from './db.js'
import { responseDataCreator } from '../../helpers/common.js'

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersDB()
    res.json(responseDataCreator(users))
  } catch (error) {
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const User = await getUserById(req.params.UserId)
    res.send(User)
  } catch (error) {
    next(error)
  }
}

// export const createUser
