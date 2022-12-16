import { object, SchemaOf, string } from 'yup'
import setLocale from '../../libs/yup'

setLocale()

export interface ForgotPasswordEmail {
    email: string
}

export const schema: SchemaOf<ForgotPasswordEmail> = object()
    .shape({
        email: string().email().required(),
    })
    .required()
