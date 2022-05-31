import { Router } from 'express'
import { validate } from '../../helpers/common.js'
import { getAllUsers, getUser } from './services.js'
import validations from './validations.js'

const { getUserByIdSchema } = validations

const router = Router()

router.get('/', getAllUsers)
router.get('/:UserId', validate(getUserByIdSchema), getUser)
// router.get('/', validate(createUserSchema), createUser)

export { router as UserRoutes }
