"use client"

import React from 'react'
import { usePageGridStore } from '../hooks/usePageGridStore'

export const RightSideBar = () => {
  const { rightSidebarVisible } = usePageGridStore()
  return rightSidebarVisible ? (
    <div className='bg-card rounded-md basis-1/4 shrink-0'></div>
  ) : null
}
