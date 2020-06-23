import { atom } from 'recoil'

export type Item = {
  id: string
  title: string
  body: string
}

export type ItemForm = Item & {
  edit: boolean
}

export const itemsState = atom<ItemForm[]>({
  key: 'itemsState',
  default: [],
})
