import React, { ComponentType } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { Container } from '@chakra-ui/react'

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
        <Container
          as="pre"
          className={className}
          style={{
            ...style,
            maxWidth: '100%',
            borderRadius: '8px',
            padding: '.8rem',
            marginBottom: '2rem',
            fontSize: '.8rem',
            whiteSpace: language ? 'pre' : 'pre-wrap',
            overflowX: language ? 'scroll' : 'auto',
          }}
        >
          {tokens.map((line, i) => {
            if (i < tokens.length - 1)
              return (
                <Container
                  key={i}
                  {...getLineProps({ line, key: i })}
                  display="table-row"
                  p={0}
                >
                  {/* {language && (
                    <span
                      style={{
                        display: 'table-cell',
                        paddingRight: '0.8rem',
                        userSelect: 'none',
                        opacity: '0.5',
                      }}
                    >
                      {i + 1}
                    </span>
                  )} */}
                  <Container
                    display="table-cell"
                    wordBreak="break-all"
                    p={0}
                    maxW="100%"
                  >
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
