import { fontSizes } from './ui/themes'
import { Header } from './components'
import styled from 'styled-components'

const BodyContainer = styled.div`
  text-align: center;
  width: 75%;
  margin: 10% 12.5%;
  font-size: ${fontSizes.xl}
  `

export default function About() {

  const links =[
    {
      linkURL: "/",
      linkText: "view promises"
    },
    {
      linkURL: "/",
      linkText: "submit promises"
    },
  ]
  return  (
    <div>
      <Header links={links}></Header>
      <BodyContainer>
        You Promised is a platform that archives and categorizes the public statements of corporations and other institutions
        created in response to the 2020 movement for Black Lives, protests against state-sanctioned police murders of 
        George Floyd, Breonna Taylor, Tony McDade, and countless others, and the continuing struggles to dismantle systemic racism. 
        Many institutions have released well-intended promises of equity and anti-racist objectives, but a statement is not enough. 
        You Promised aspires to help communities and workers report, track, and assess the promises of their institutions 
        and hold them accountable for the work we demand they do.
        <br/>
        <br/>
        You promised, 
        <br/>
        <br/>
        Us
      </BodyContainer>  
    </div>

  )
}
