import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import { Button, Card, Image} from 'semantic-ui-react'

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckcsf7kvp8asj01yv5o02baep/master'
  );

  const { posters } = await graphcms.request(
    `
    {
      posters {
        id
        name
        bodyText
        poster {
          url
          size
          mimeType
          height
          width
        }
      }
    }
    `
  );

  return {
    props: {
      posters,
    },
  };
}

const populateCards = ({posters}) => {
  return(
  posters.map(({ name, poster }) => (
    <Card key={poster.id}> 
      <Card.Content>  
        <Image
          floated='right'
          size='big'
          src={poster.url}
        />
      </Card.Content>
    </Card>
  ))
  )
}

const posterCards = ({posters}) => {
  return(
    <Card.Group>
      {populateCards({posters})}
    </Card.Group>
  )
}

const main = ({ posters }) =>

  <div>
    {posterCards({posters})}
  </div>

export default main
  