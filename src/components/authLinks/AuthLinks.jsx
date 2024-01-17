"use client";

import { useState } from 'react'
import Link from 'next/link';
import styles from './authlinks.module.css'
import { signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {
        status === 'unauthenticated' ? (
          <Link href="/login" className={styles.links}>Login</Link>
        ) : (
          <>
            <Link href="/write" className={styles.links}>Write</Link>
            <span className={styles.links} onClick={signOut}>Logout</span>
          </>
        )
      }
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {
            status === 'lsx.ozp' ? (
              <Link href="/Login">Login</Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span className={styles.links} onClick={signOut}>Logout</span>
              </>
            )
          }
        </div>
      )}
    </>
  )
}

export default AuthLinks
