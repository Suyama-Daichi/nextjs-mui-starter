import { setLocale as setGlobalLocale } from 'yup'

const setLocale = () => {
    setGlobalLocale({
        mixed: {
            default: 'field_invalid',
            required: '入力してください',
            notType: '正しい形式で入力してください',
        },
        number: {
            min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
            max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
        },
        string: {
            matches:
                'パスワードは8文字以上でアルファベットの大文字、小文字と数字を含んでください',
            email: 'メールアドレスの形式で入力してください',
        },
    })
}

export default setLocale
