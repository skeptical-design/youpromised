import Link from 'next/link'
import { fontSizes } from '../ui/themes'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    margin: 2.5%;
    font-size: ${fontSizes.md};
    display: flex;
    flex-direction: column;
  `
const LinkTag = styled.a`
    &:hover {
        color: #592d15;
        cursor: pointer;
    }
`

export const Header = ({links}) => {
    return  (
        <HeaderContainer>
            {links.map((link) => 
                <Link href={link.linkURL} to={link.linkURL}>
                    <LinkTag>{link.linkText}</LinkTag>
                </Link>
            )}
        </HeaderContainer>  
    )
  }
  