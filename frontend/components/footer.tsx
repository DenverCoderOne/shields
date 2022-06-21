import React from 'react'
import styled from 'styled-components'
import { H2 } from './common'

const SpacedA = styled.a`
  margin-left: 10px;
  margin-right: 10px;
`

export default function Footer({ baseUrl }: { baseUrl: string }): JSX.Element {
  return (
    <section>
      <H2 id="like-this">Want to contribute?</H2>

      <p>
        <SpacedA href="https://github.com/DenverCoderOne/shields/tree/formatted-dynamic-badges">
          GitHub
        </SpacedA>
      </p>
    </section>
  )
}
