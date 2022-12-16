import { Role } from '@/models/Role.enum'

export interface User {
    auth_uid: string
    created_at: Date
    email: string
    email_confirmed: boolean
    first_name: string
    id: number
    last_name: string
    permission: Role
    updated_at: Date
}
