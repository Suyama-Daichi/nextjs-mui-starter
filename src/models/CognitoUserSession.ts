export interface Payload {
    sub: string
    email_verified: boolean
    iss: string
    'cognito:username': string
    origin_jti: string
    aud: string
    event_id: string
    token_use: string
    auth_time: number
    exp: number
    iat: number
    jti: string
    email: string
}

export interface IdToken {
    jwtToken: string
    payload: Payload
}

export interface RefreshToken {
    token: string
}

export interface Payload2 {
    sub: string
    iss: string
    client_id: string
    origin_jti: string
    event_id: string
    token_use: string
    scope: string
    auth_time: number
    exp: number
    iat: number
    jti: string
    username: string
}

export interface AccessToken {
    jwtToken: string
    payload: Payload2
}

export interface CognitoUserSession {
    idToken: IdToken
    refreshToken: RefreshToken
    accessToken: AccessToken
    clockDrift: number
}
