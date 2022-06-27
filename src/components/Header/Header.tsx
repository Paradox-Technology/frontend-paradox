import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from "../Header/styles.module.scss"

export function Header() {
  return (
    <div className={styles.container}>
      <div>
        <img src="/logo.svg"/>
      </div>

      <div className={styles.nav}>
        <span>
          Home             
        </span>

        <span>
          About
        </span>

        <span>
          Post
        </span>

        <span>
          Contact
        </span>
      </div>

      <div className={styles.mode}>
        <div className={styles.moonIcon}>
          <DarkModeIcon fontSize="large"/>
        </div>

        <span>
          Perfil
        </span>
      </div>
    </div>
  )
}