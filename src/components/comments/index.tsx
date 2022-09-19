import React, { useEffect } from 'react'
import { selectAppState } from '../../state/appSlice'
import { useAppSelector } from '../../state/hooks'
import { Container } from './style'

const UTTERANCES_SETTINGS = {
  src: 'https://utteranc.es/client.js',
  repo: 'reesekimm/blog.reesekimm.com',
  'issue-term': 'pathname',
  label: 'Comment',
  theme: 'github-light',
  crossorigin: 'anonymous',
  async: 'true',
}

const COMMENTS_ID = 'utterances-wrapper'

const Comments = () => {
  const { theme } = useAppSelector(selectAppState)

  useEffect(() => {
    UTTERANCES_SETTINGS.theme =
      theme === 'light' ? 'github-light' : 'photon-dark'

    const utterances = document.createElement('script')

    Object.entries(UTTERANCES_SETTINGS).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    const utterancesWrapper = document.getElementById(COMMENTS_ID)
    utterancesWrapper?.appendChild(utterances)

    return () => {
      while (utterancesWrapper?.firstChild) {
        utterancesWrapper.removeChild(utterancesWrapper.firstChild)
      }
    }
  }, [theme])

  return <Container id={COMMENTS_ID}></Container>
}

export default Comments
