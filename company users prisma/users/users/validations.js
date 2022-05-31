import Joi from 'joi'

export default {
  getUserByIdSchema: {
    params: Joi.object({
      UserId: Joi.number().integer().required(),
    }),
  },
}
