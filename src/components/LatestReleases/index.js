import { books } from './latestReleasesData'
import { Title } from '../Title'
import styled from 'styled-components'

const LatestReleasesContainter = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainter>
            <Title>Latest Releases</Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt=""/>
                ))}
            </NewBooksContainer>
        </LatestReleasesContainter>
    )
}

export default LatestReleases