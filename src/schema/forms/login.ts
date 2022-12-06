import * as yup from 'yup'
import { object, SchemaOf, setLocale } from 'yup'

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

export interface LoginInput {
    email: string
    password: string
}

export const schema: SchemaOf<LoginInput> = object()
    .shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required()
