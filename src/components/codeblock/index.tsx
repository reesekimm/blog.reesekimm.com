import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { Pre, Line, LineNo, LineContent } from './style'
import { ComponentType } from 'react'

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
        <Pre className={className} style={style}>
          {tokens.map((line, i) => {
            if (i < tokens.length - 1)
              return (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  {language && <LineNo>{i + 1}</LineNo>}
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              )
          })}
        </Pre>
      )}
    </Highlight>
  )
}
export default Codeblock
