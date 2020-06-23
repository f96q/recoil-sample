import React, { useEffect } from 'react'
import List from '@material-ui/core/List'
import { useSetRecoilState, useRecoilValue, selector } from 'recoil'
import { itemsState, Item as ItemType } from '../atoms/items'
import { appState } from '../atoms/app'
import { Item } from './Item'
import { New } from './Item/New'

const filteredItemsState = selector({
  key: 'filteredItems',
  get: ({ get }) =>
    get(itemsState).filter(
      (item) => item.title.indexOf(get(appState).search) > -1 || item.body.indexOf(get(appState).search) > -1
    ),
})

export const Items: React.FC = () => {
  const setItemsState = useSetRecoilState(itemsState)
  const app = useRecoilValue(appState)
  const filteredItems = useRecoilValue(filteredItemsState)

  useEffect(() => {
    async function fetchItems(): Promise<void> {
      const response = await fetch(process.env.API_ENDPOINT ? `${process.env.API_ENDPOINT}/items.json` : './items.json')
      const json = await response.json()
      setItemsState(() => json.items.map((item: ItemType) => ({ ...item, edit: false })))
    }
    fetchItems()
  }, [])

  return (
    <List>
      {app.openNewItemForm && <New />}
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </List>
  )
}
