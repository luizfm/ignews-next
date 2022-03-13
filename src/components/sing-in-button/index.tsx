import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true

  return (
    <button className={styles.signInButtonContainer} type="button">
      <FaGithub color={isUserLoggedIn ? "#04d361" : "#eba417"} />
      {isUserLoggedIn ? "Luiz Fernando" : "Sign in with Github" }
      {isUserLoggedIn && (
        <FiX color="#737380" className={styles.closeIcon}/>
      )}
    </button>
  )
}
