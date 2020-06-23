import React from 'react'
import { RecoilRoot } from 'recoil'
import { Container } from './Container'

export const App: React.FC = () => (
  <RecoilRoot>
    <Container />
  </RecoilRoot>
)
