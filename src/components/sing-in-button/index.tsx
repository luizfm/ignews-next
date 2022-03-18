import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/react'

import styles from './styles.module.scss'
import { useCallback } from 'react'

export function SignInButton() {
  const { data } = useSession()

  const onButtonClick = useCallback(() =>
    data ? signOut() : signIn('github')
  , [data])

  return (
    <button className={styles.signInButtonContainer} type="button" onClick={onButtonClick}>
      <FaGithub color={data ? "#04d361" : "#eba417"} />
      {data ? data.user.name : "Sign in with Github" }
      {data && (
        <FiX color="#737380" className={styles.closeIcon}/>
      )}
    </button>
  )
}
