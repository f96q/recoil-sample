import React from 'react'
import { ItemForm } from '../../atoms/items'
import { Show } from './Show'
import { Edit } from './Edit'

type Props = {
  item: ItemForm
}

export const Item: React.FC<Props> = (props) => <>{props.item.edit ? <Edit item={props.item} /> : <Show item={props.item} />}</>
