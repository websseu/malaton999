import Link from 'next/link'
import React from 'react'

export default function HeaderLeft() {
  return (
    <Link
      href={'/'}
      className='font-gmarket text-2xl font-bold text-blue-700 pt-1 block'
    >
      말아톤 999
    </Link>
  )
}
