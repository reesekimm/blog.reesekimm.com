import React from 'react'
import { Link } from 'gatsby'
import { ChevronLeft } from '@styled-icons/bootstrap/ChevronLeft'
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight'
import { PostListPageContext } from '../../queries/post-list'
import { Container, StyledPage } from './style'

interface PageProps {
  index: number
  isActive: boolean
}

const Page = ({ index, isActive }: PageProps) => {
  const path = index === 0 ? '/' : `/${index + 1}`

  return (
    <StyledPage>
      {isActive ? <span>{index + 1}</span> : <Link to={path}>{index + 1}</Link>}
    </StyledPage>
  )
}

const Pagination = ({ numOfPages, currentPage }: PostListPageContext) => {
  if (numOfPages < 2) return null

  const prevPage = currentPage - 1 === 1 ? '' : currentPage - 1
  const nextPage = currentPage + 1

  return (
    <Container>
      {currentPage > 1 && (
        <Link to={`/${prevPage}`}>
          <ChevronLeft size="3.2rem" />
        </Link>
      )}
      <ol>
        {Array.from({ length: numOfPages }).map((_, index) => (
          <Page
            key={numOfPages.toString() + index}
            index={index}
            isActive={index + 1 === currentPage}
          />
        ))}
      </ol>
      {currentPage < numOfPages && (
        <Link to={`/${nextPage}`}>
          <ChevronRight size="3.2rem" />
        </Link>
      )}
    </Container>
  )
}

export default Pagination
