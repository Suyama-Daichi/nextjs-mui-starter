import { number, object, ref, SchemaOf, setLocale, string } from 'yup'
// TODO: 各スキーマで共通化
setLocale({
    mixed: {
        default: 'field_invalid',
        required: '入力してください',
        notType: '正しい形式で入力してください',
    },
    string: {
        matches:
            'パスワードは8文字以上でアルファベットの大文字、小文字と数字を含んでください',
    },
})

// NOTE: 半角英数大文字小文字を含む8文字以上の正規表現
const passwordPattern = new RegExp(
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/
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
