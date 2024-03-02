import styles from "./Footer.module.scss"

const date = new Date() 

const year = date.getFullYear()

const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy;{year} Todos los derechos reservados

    <h1>Footer</h1>
    </div>
  )
}

export default Footer