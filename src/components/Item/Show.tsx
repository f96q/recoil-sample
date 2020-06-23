import React from 'react'
import { useRecoilState } from 'recoil'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Item } from '../../atoms/items'
import { itemsState } from '../../atoms/items'

type Props = {
  item: Item
}

export const Show: React.FC<Props> = (props) => {
  const [items, setItemsState] = useRecoilState(itemsState)

  return (
    <ListItem>
      <ListItemText primary={props.item.title} secondary={props.item.body} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          onClick={() => setItemsState(items.map((item) => (item.id === props.item.id ? { ...item, edit: true } : item)))}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          onClick={() => {
            if (confirm(`Are you sure? ${props.item.title}`)) {
              setItemsState(items.filter((item) => item.id !== props.item.id))
            }
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
