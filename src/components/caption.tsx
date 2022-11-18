import React from 'react'

interface CaptionProps {
  value: string
}

export default function Caption({ value }: CaptionProps) {
  return (
    <div
      style={{
        color: '#A0AEC0',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: '3rem',
      }}
    >
      {value}
    </div>
  )
}
