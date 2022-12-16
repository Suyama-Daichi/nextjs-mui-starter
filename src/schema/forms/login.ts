import { object, SchemaOf, string } from 'yup'
import setLocale from '../../libs/yup'

setLocale()

export interface LoginInput {
    email: string
    password: string
}

export const schema: SchemaOf<LoginInput> = object()
    .shape({
        email: string().email().required(),
        password: string().required(),
    })
    .required()
