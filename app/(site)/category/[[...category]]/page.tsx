"use client"
import { usePathname } from 'next/navigation'
import React, { use } from 'react'

const Category = () => {
    const patch = usePathname()
    console.log(patch)
  return (
    <div>Category</div>
  )
}

export default Category