import * as yup from 'yup'
import { StringSchema } from 'yup'

type SchemaName = 'signIn' | 'signUp'

type YupObject = {
  name?: StringSchema
  email?: StringSchema
  password?: StringSchema
  confirmPassword?: StringSchema
}

const validationSchema = (schemaName: SchemaName) => {
  const isRequiredMessage = 'Is required field'
  const maxMessage = 'Must be at most 30 characters'
  const minMessage = 'Must be at least 8 characters'

  const name = yup
    .string()
    .trim()
    .required(isRequiredMessage)
    .max(30, maxMessage)

  const email = yup
    .string()
    .trim()
    .required(isRequiredMessage)
    .email('Must be a valid email')

  const password = yup
    .string()
    .trim()
    .required(isRequiredMessage)
    .min(8, minMessage)
    .max(30, maxMessage)

  const confirmPassword = yup
    .string()
    .required(isRequiredMessage)
    .oneOf([yup.ref('password')], `Doesn't match the entered password above`)

  let yupObject: YupObject

  switch (schemaName) {
    case 'signUp':
      yupObject = { name, email, password, confirmPassword }
      break
    case 'signIn':
      yupObject = { email, password }
      break
    default:
      yupObject = {}
      break
  }

  return yup.object(yupObject)
}

export default validationSchema
