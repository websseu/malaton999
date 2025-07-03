import React from 'react'
import { Button } from '../ui/button'
import { TrafficCone } from 'lucide-react'

export default function HeaderRight() {
  return (
    <Button
      variant='ghost'
      size='icon'
      className='group h-11 w-11 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white'
    >
      <TrafficCone className='text-blue-700 group-hover:text-white' />
      <span className='sr-only'>메뉴 열기</span>
    </Button>
  )
}
