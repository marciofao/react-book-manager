

import Header from '../components/Header'
import Search from '../components/Search'
import LatestReleases from '../components/LatestReleases'
import styled from 'styled-components'

const AppContainer = styled.div`
  
    width: 100vw;
    minh-height: 100vh;
    height: auto;
    background: linear-gradient(90deg, #002F52 35%, #326589 100%);
   /* overflow: auto; */
`

function Home() {
  return (
    <AppContainer>
      <Search/>
      <LatestReleases/>
    </AppContainer>
  )
}

export default Home
