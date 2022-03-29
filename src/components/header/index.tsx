import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'
import { SignInButton } from '../sing-in-button'
import { ActiveLink } from '../active-link'

export function Header() {
  const { asPath } = useRouter()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/icons/logo.svg" alt="Application logo" height={31} width={110} />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
