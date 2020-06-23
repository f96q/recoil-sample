import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import TextField from '@material-ui/core/TextField'
import { useRecoilState } from 'recoil'
import { ItemForm } from '../../atoms/items'
import { itemsState } from '../../atoms/items'
import { appState } from '../../atoms/app'

export const New: React.FC = () => {
  const [items, setItemsState] = useRecoilState(itemsState)
  const [app, setAppState] = useRecoilState(appState)
  const [item, setItem] = useState<ItemForm>({ id: uuid(), title: '', body: '', edit: true })

  return (
    <ListItem>
      <TextField
        label="title"
        type="text"
        value={item.title}
        onChange={(event) => setItem({ ...item, title: event.target.value })}
      />
      <TextField
        label="body"
        style={{ margin: 8 }}
        type="text"
        value={item.body}
        onChange={(event) => setItem({ ...item, body: event.target.value })}
      />
      <ListItemSecondaryAction>
        {item.title && item.body && (
          <IconButton
            edge="end"
            onClick={() => {
              setItemsState([{ ...item, edit: false }, ...items])
              setAppState({ ...app, openNewItemForm: false })
            }}
          >
            <SaveIcon />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  )
}
