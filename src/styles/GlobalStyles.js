import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    background: none;
    outline: none;
    border: none;
  }

  li {
    list-style: none;
  }
`

export const AppContainer = styled.div`
  background: ${props => props.theme.title === 'light' ? '#fff' : '#000'};
  transition: background .5s ease;
  height: 100%;
`

export const MainContainer = styled.div`
  height: calc(100% - 60px);
  overflow-y: auto;
`

export const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 16px;

  @media screen and (min-width: 1200px) {
    padding-top: 64px;
  }
`

export const SelectsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.primary};
  border-top: 1px solid ${props => props.theme.primary};
`

export const LoadingContainer = styled.div`
  h2 {
    text-align: center;
    color: ${props => props.theme.primary};
  }
`

export const ErrorContainer = styled(LoadingContainer)``;