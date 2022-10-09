import React, { ComponentType } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { Box, Container } from '@chakra-ui/react'

// TODO: line highlighting

const Codeblock: ComponentType<any> = (props) => {
  const {
    children: {
      props: { children, className },
    },
  } = props

  const language = className ? className.replace(/language-/, '') : ''

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Container as="pre" className={className} style={style}>
          {tokens.map((line, i) => {
            if (i < tokens.length - 1)
              return (
                <Container key={i} {...getLineProps({ line, key: i })}>
                  {language && <Box>{i + 1}</Box>}
                  <Container>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </Container>
                </Container>
              )
          })}
        </Container>
      )}
    </Highlight>
  )
}
export default Codeblock
