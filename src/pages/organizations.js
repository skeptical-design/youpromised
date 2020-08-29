import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import { Button, Card, Image, List} from 'semantic-ui-react'

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckcsf7kvp8asj01yv5o02baep/master'
  );

  const { companies } = await graphcms.request(
    `
    {
      companies {
        id
        name
        displayName
        companyLogo {
          url
        }
      }
    } 
    `
  );

  return {
    props: {
      companies,
    },
  };
}

const populateList = ({companies}) => {
    return(
    companies.map((company) => (
      <Link href="organization/[name]" as={`organization/${company.name}`}>
        <List.Item key={company.id}> 
          <Image
            size='small'
            src={company.companyLogo.url}
          />
          <List.Content>  
            <List.Header>{company.displayName}</List.Header>
          </List.Content>
        </List.Item>
      </Link>
    ))
    )
  }

  const organizationCards = ({companies}) => {
    return(
      <List horizontal={true}>
        {populateList({companies})}
      </List>
    )
  }
  
  const main = ({ companies }) =>

  <div>
    {organizationCards({companies})}
  </div>

export default main