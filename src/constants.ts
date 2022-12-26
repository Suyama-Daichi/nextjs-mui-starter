export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
import { Role } from '@/models/Role.enum'
import { Person as PersonIcon, AddBox } from '@mui/icons-material'

export const literals = {
    brand: 'サービス名',
    defaultPageDescription: 'サービス名',
}

export const SideNavMenu = [
    {
        text: '自分の情報',
        icon: PersonIcon,
        path: '/my-profile',
    },
    {
        text: 'ページ1',
        icon: PersonIcon,
        path: 'privacy',
    },
    {
        text: 'ページ2',
        icon: PersonIcon,
        path: undefined,
    },
    {
        text: 'ページ3',
        icon: PersonIcon,
        path: undefined,
    },
    {
        text: 'ページ4',
        icon: PersonIcon,
        path: undefined,
    },
    {
        text: 'ページ5',
        icon: AddBox,
        page: '/add-user',
        role: [Role.ADMIN],
    },
]
