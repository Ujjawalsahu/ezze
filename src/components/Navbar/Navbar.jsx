import Links from "../Links/Links"
import styles from "./navbar.module.css"
function Navbar() {
  return (
    <div className={styles.container}>
    <div className={styles.logo}>Logo</div>
    <div>
      <Links/>
    </div>
    <div className={styles.help}>Help</div>
    </div>
  )
}

export default Navbar
