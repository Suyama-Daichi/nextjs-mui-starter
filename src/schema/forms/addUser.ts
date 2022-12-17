import { UserAttribute } from '@/models/UserAttribute.request'
import { object, SchemaOf, string } from 'yup'
import setLocale from '../../libs/yup'

setLocale()

export interface AddUserInput extends UserAttribute {
    email: string
    password: string
}

export const schema: SchemaOf<AddUserInput> = object()
    .shape({
        email: string().email().required(),
        password: string().required(),
        last_name: string().required(),
        first_name: string().required(),
    })
    .required()
