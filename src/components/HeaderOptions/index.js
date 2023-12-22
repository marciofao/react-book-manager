import styled from "styled-components";

const Options = styled.ul`
  display: flex;
`
const Option = styled.li`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5px;
  text-transform: uppercase;
`


const textOptions = ['Categories', 'My bookshelf', 'Favourites']


function HeaderOptions(){
    return(
        <Options>
            {textOptions.map(text=>(
              <Option><p>{text}</p></Option>
            ))}
            
           </Options>
    )
}

export default HeaderOptions;