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
