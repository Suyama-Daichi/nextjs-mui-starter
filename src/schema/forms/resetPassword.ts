import { number, object, ref, SchemaOf, setLocale, string } from 'yup'

setLocale({
    mixed: {
        default: 'field_invalid',
        required: '入力してください',
        notType: '正しい形式で入力してください',
    },
})

export interface ResetPasswordInput {
    password: string
    passwordConfirm: string
    code: number
}

export const schema: SchemaOf<ResetPasswordInput> = object()
    .shape({
        password: string().required(),
        passwordConfirm: string()
            .required()
            .oneOf([ref('password')], 'パスワードが一致しません'),
        code: number().required(),
    })
    .required()
