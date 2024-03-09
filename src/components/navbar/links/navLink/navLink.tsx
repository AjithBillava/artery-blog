"use client"

import React from 'react'
import { linkType } from '../Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './styles.module.css'


export const NavLink = ({ title, path }: linkType) => {
  // console.log(path)
  const pathname = usePathname()
  // console.log("🚀 ~ NavLink ~ pathname:", pathname)
  const isActive = pathname === path
  console.log("🚀 ~ NavLink ~ isActive:", isActive)

  return (
    <div>
      <Link className={`${style.container} ${isActive && style.active }`} href={path}>{title}</Link>
    </div>
  )
}
