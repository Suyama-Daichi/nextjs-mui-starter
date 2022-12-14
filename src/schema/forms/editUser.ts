import { User } from '@/models/User.response'
import { object, SchemaOf, setLocale, string } from 'yup'

setLocale({
    mixed: {
        default: 'field_invalid',
        required: '入力してください',
    },
    number: {
        min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
        max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
    },
    string: {
        email: 'メールアドレスの形式で入力してください',
    },
})

export const schema: SchemaOf<User> = object()
    .shape({
        last_name: string().required(),
        first_name: string().required(),
    })
    .required()
