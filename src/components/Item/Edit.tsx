import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'
import TextField from '@material-ui/core/TextField'
import { useRecoilState } from 'recoil'
import { Item as ItemType } from '../../atoms/items'
import { itemsState } from '../../atoms/items'

type Props = {
  item: ItemType
}

export const Edit: React.FC<Props> = (props) => {
  const [items, setItemsState] = useRecoilState(itemsState)
  const [item, setItem] = useState<ItemType>(props.item)

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
        <IconButton
          edge="end"
          onClick={() => setItemsState(items.map((i) => (i.id === props.item.id ? { ...item, edit: false } : i)))}
        >
          <SaveIcon />
        </IconButton>
        <IconButton
          edge="end"
          onClick={() => setItemsState(items.map((i) => (i.id === props.item.id ? { ...props.item, edit: false } : i)))}
        >
          <CancelIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
