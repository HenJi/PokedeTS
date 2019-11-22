import React from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: wheat;
  }
`

const AppWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: white;
`

export const Layout: React.FunctionComponent = (props) => {
  const { children } = props

  return (
    <>
      <GlobalStyle />
      <AppWrapper>{ children }</AppWrapper>
    </>
  )
}
