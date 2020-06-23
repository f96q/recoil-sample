import { atom } from 'recoil'

export type App = {
  search: string
  openNewItemForm: boolean
}

export const appState = atom<App>({
  key: 'app',
  default: {
    search: '',
    openNewItemForm: false,
  },
})
