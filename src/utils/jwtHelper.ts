import { CognitoIdToken } from '@/models/CognitoIdToken'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

// NOTE: emailをidとして扱う場合
export const getIdFromIdToken = () => {
    const idToken = Cookies.get('idToken')
    if (!idToken) return
    const decodedIdToken = jwt_decode<CognitoIdToken>(idToken)
    return decodedIdToken['cognito:username']
}
