import React, { useState } from 'react'
import styled from 'styled-components'
import { RenderableExample } from '../lib/service-definitions'
import { getBaseUrl } from '../constants'
import Meta from './meta'
import Header from './header'
import { MarkupModal } from './markup-modal'
import Usage from './usage'
import Footer from './footer'
import { Category } from './category-headings'
import { BaseFont, GlobalStyle } from './common'

const AppContainer = styled(BaseFont)`
  text-align: center;
`

// `pageContext` is the `context` passed to `createPage()` in
// `gatsby-node.js`. In the case of the index page, `pageContext` is empty.
interface PageContext {
  category?: Category
}

export default function Main({
  pageContext,
}: {
  pageContext: PageContext
}): JSX.Element {
  const [selectedExample, setSelectedExample] = useState<RenderableExample>()
  const [selectedExampleIsSuggestion] = useState(false)
  const baseUrl = getBaseUrl()

  const dismissMarkupModal = React.useCallback(
    function (): void {
      setSelectedExample(undefined)
    },
    [setSelectedExample]
  )

  return (
    <AppContainer id="app">
      <GlobalStyle />
      <Meta />
      <Header />
      <MarkupModal
        baseUrl={baseUrl}
        example={selectedExample}
        isBadgeSuggestion={selectedExampleIsSuggestion}
        onRequestClose={dismissMarkupModal}
      />
      <Usage baseUrl={baseUrl} />
      <Footer baseUrl={baseUrl} />
    </AppContainer>
  )
}
