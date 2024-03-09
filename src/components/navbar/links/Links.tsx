import Link from 'next/link'
import React from 'react'
import { NavLink } from './navLink/navLink';
import style from './styles.module.css'

export type linkType = {
  title: string,
  path: string
}


const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const isSession: boolean = true;
const isAdmin: boolean = true;


const Links = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.links}>
          {
            links.map(link =>
              <NavLink title={link.title} path={link.path} key={link.title} />
            )
          }
          {
            isSession ? (
              <>
                {isAdmin && <NavLink title='Admin' path='/admin' />}
                <button className={style.logoutBtn}>
                  Logout
                </button>
              </>
            ) : (
              <NavLink title="Login" path='/login' />
            )
          }

        </div>
      </div>
    </>)
}


export default Links;
