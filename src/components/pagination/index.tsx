import { Link } from 'gatsby'
import React from 'react'
import { PostListPageContext } from '../../queries/post-list'

interface PageProps {
  index: number
  isActive: boolean
}

const Page = ({ index, isActive }: PageProps) => {
  const path = index === 0 ? '/' : `/${index + 1}`

  return (
    <li>
      {isActive ? <span>{index + 1}</span> : <Link to={path}>{index + 1}</Link>}
    </li>
  )
}

const Pagination = ({ numOfPages, currentPage }: PostListPageContext) => {
  if (numOfPages < 2) return null

  const prevPage = currentPage - 1 === 1 ? '' : currentPage - 1
  const nextPage = currentPage + 1

  return (
    <div>
      {currentPage > 1 && <Link to={`/${prevPage}`}>Prev</Link>}
      <ol>
        {Array.from({ length: numOfPages }).map((_, index) => (
          <Page
            key={numOfPages.toString() + index}
            index={index}
            isActive={index + 1 === currentPage}
          />
        ))}
      </ol>
      {currentPage < numOfPages && <Link to={`/${nextPage}`}>Next</Link>}
    </div>
  )
}

export default Pagination
