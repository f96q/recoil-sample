import React from 'react'
import { useRecoilState } from 'recoil'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import ContainerComponent from '@material-ui/core/Container'
import { appState } from '../atoms/app'
import { Header } from './Header'
import { Items } from './Items'

export const Container: React.FC = () => {
  const [app, setAppState] = useRecoilState(appState)

  return (
    <ContainerComponent maxWidth="sm">
      <Header />
      <IconButton edge="end" onClick={() => setAppState({ ...app, openNewItemForm: !app.openNewItemForm })}>
        {app.openNewItemForm ? <CloseIcon /> : <AddIcon />}
      </IconButton>
      <Items />
    </ContainerComponent>
  )
}
