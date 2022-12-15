import { number, object, ref, SchemaOf, string } from 'yup'
import setLocale from '../../libs/yup'

setLocale()

// NOTE: 半角英数大文字小文字を含む8文字以上の正規表現
const passwordPattern = new RegExp(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d\W]{8,}$/
)
export interface ResetPasswordInput {
    password: string
    passwordConfirm: string
    code: number
}

export const schema: SchemaOf<ResetPasswordInput> = object()
    .shape({
        password: string().matches(passwordPattern).required(),
        passwordConfirm: string()
            .required()
            .oneOf([ref('password')], 'パスワードが一致しません'),
        code: number().required(),
    })
    .required()
