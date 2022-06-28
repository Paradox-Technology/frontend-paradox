import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from "../Header/styles.module.scss"

export function Header(props:any) {

  console.log(props.theme)

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
        <div 
        onClick={() => props.handleTheme()}
        className={styles.moonIcon}>
          {props.theme === "light" ? <DarkModeIcon fontSize="large"/> : <LightModeIcon fontSize="large"/>}
        </div>

        <span>
          Perfil
        </span>
      </div>
    </div>
  )
}