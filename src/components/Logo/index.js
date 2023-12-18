
import logo from '../../img/logo.svg'
import styled from'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
`
const LogoImg = styled.img`
  margin-right: 10px;
  height: 80px;
`

function Logo(){
    
    return(
        <LogoContainer>
          <LogoImg 
            src={logo} 
            alt="logo"
          />
          <p><strong>Book</strong>Manager</p>
        </LogoContainer>    
    )
}

export default Logo;