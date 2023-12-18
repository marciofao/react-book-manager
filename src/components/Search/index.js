import Input from '../Input'
import styled from 'styled-components';

const SearchContainer = styled.section`
  backg-round-image: 90deg, #002F52 35%, #326589 165%) ;
  color: #FFF;
  text-align: center;
  padding: 85px O;
  height: 270px;
  width: 100%;
`
const Title = styled.h1`
  color: #FFF;
  font—size: 36px;
  text—align: center;
  width: 100%;
`

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`


function Pesquisa() {
  return (
    <SearchContainer>
      <Title>Do you know how to start?</Title>
      <Subtitle>Find your book in our bookshelf.</Subtitle>
      <Input placeholder="write your next reading" />
    </SearchContainer>
  );
}

export default Pesquisa;