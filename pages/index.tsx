import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Upcoming Shows</title>
        <meta name="description" content="Proof of Concept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Upcoming Shows
        </Title>

        <Description>
          Choose your next 
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  )
}
