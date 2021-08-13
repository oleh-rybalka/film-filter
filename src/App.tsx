import styled from 'styled-components'
import Filter from './components/Filter'

const AppContainer = styled.div`
  display: flex;
  margin-left: 21px;
`

function App() {
  return (
    <AppContainer>
      <Filter />
    </AppContainer>
  )
}

export default App
