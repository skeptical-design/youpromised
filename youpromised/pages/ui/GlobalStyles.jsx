import React from 'react'
import { colors, fonts } from './themes'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        font-family: ${fonts};
        background-color: ${colors.app.background};
    }
`