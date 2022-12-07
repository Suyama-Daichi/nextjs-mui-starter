import { object, SchemaOf, setLocale, string } from 'yup'

setLocale({
    mixed: {
        default: 'field_invalid',
        required: '入力してください',
    },
    string: {
        email: 'メールアドレスの形式で入力してください',
    },
})

export interface ForgotPasswordEmail {
    email: string
}

export const schema: SchemaOf<ForgotPasswordEmail> = object()
    .shape({
        email: string().email().required(),
    })
    .required()
