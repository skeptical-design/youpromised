import { GraphQLClient } from 'graphql-request';
import Radar from 'react-d3-radar';

const graphcms = new GraphQLClient(
  'https://api-us-east-1.graphcms.com/v2/ckcsf7kvp8asj01yv5o02baep/master'
);

export async function getStaticProps({ params }) {
  const { company } = await graphcms.request(
    `
    query CompanyDetails($name: String!) {
        company(where: { name: $name }) {
            id
            name
            displayName
            companyLogo {
              url
            }
            statements {
              ... on Statement {
                id
                nlpResults
                measurable
                originalLink
                publishedAt
                statementDate
                statementSource
                text
                waybackLink
                company {
                  id
                }
              }
          }
        }
      }
  `,
    {
      name : params.name,
    }
  );

  return {
    props: {
      company,
    },
  };
}

export async function getStaticPaths() {
    const { companies } = await graphcms.request(`
    query CompanyNav {
        companies {
          name
        }
      }      
    `);
  
    return {
      paths: companies.map(({ name }) => ({
        params: { name },
      })),
      fallback: false,
    };
}

const emotionChart = (company) => {
    var emotions = company.statements.nlpResults.nlu.emotion.document.emotion
    return (
        <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={1}
            highlighted={null}
            onHover={(point) => {
                if (point) {
                console.log('hovered over a data point');
                } else {
                console.log('not over anything');
                }
            }}
            data={{
                variables: [
                {key: 'anger', label: 'Anger'},
                {key: 'disgust', label: 'Disgust'},
                {key: 'fear', label: 'Fear'},
                {key: 'joy', label: 'Joy'},
                {key: 'sadness', label: 'Sadness'},
                ],
                sets: [
                {
                    key: 'statementEmotion',
                    label: company.displayName + " - Statement Emotion",
                    values: {
                        anger: emotions.anger,
                        disgust: emotions.disgust,
                        fear: emotions.fear,
                        joy: emotions.joy,
                        sadness: emotions.sadness
                    },
                }
                ],
            }}
        />
    )
}

export default ({ company }) => (
  <React.Fragment>
    <h1>{company.displayName}</h1>
    <div>
        {emotionChart(company)}
    </div>
  </React.Fragment>
);
