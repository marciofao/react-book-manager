

import Header from './components/Header/'
import Search from './components/Search'
import LatestReleases from './components/LatestReleases'
import styled from 'styled-components'

const AppContainer = styled.div`
  
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #002F52 35%, #326589 100%);
   /* overflow: auto; */
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <LatestReleases/>
    </AppContainer>
  )
}

export default App
