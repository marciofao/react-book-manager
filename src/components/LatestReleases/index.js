import { books } from './latestReleasesData'
import { Title } from '../Title'
import bookImg from '../../img/livro2.png'
import styled from 'styled-components'
import ReccommendCard from '../RecommendCard'

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
            <Title
                color="green"
                fontSize="35px"
                align="center"
            >
                Latest Releases
            </Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt="" />
                ))}
            </NewBooksContainer>
            <ReccommendCard
                title="Maybe you also like"
                subtitle="Angular"
                description="Learn Everythign about Javascript"
                img={bookImg}
            />
        </LatestReleasesContainter>
    )
}

export default LatestReleases