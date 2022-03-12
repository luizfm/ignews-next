import Avatar from '../../../public/icons/avatar.svg'
import Image from 'next/image'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/icons/logo.svg" alt="Application logo" height={31} width={110} />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}
