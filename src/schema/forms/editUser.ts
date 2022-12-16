import { User } from '@/models/User.response'
import { object, SchemaOf, string } from 'yup'
import setLocale from '../../libs/yup'

setLocale()

export const schema: SchemaOf<User> = object()
    .shape({
        last_name: string().required(),
        first_name: string().required(),
    })
    .required()
