import { getUserDataPreload } from '@/app/actions'
import { getURLDataPreload } from '@/app/actions'
import { cache } from 'react'

export const getAllItems = cache(async () => {
    const items = await getUserDataPreload();
    return items;
})

export const getURLItem = cache(async () => {
    const item = await getURLDataPreload();
    return item;
})
