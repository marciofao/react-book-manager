

import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const Icon = styled.li`
  margin-right: 20px;
`
const Icons = styled.ul`
  display: flex;
  align-items: center;
`

const icons = [perfil, sacola]

function HeaderIcons(){
    return(
        <Icons>
              {icons.map(icon=>(
                <Icon><img src={icon} alt='icon' /></Icon>
              ))}
          </Icons>
    )
}
export default HeaderIcons;