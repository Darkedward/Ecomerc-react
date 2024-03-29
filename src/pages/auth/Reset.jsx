import styles from "./auth.module.scss"
import resetImg from "../../assets/forgot.png"
import { Link } from "react-router-dom"
import Card from "../../components/card/card"

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
    <Card>    
      <div className={styles.form}>
        <h2>Reset Password</h2>
        
        <form>
          <input type="text" placeholder="Email" required/>
          
          <button className="--btn --btn-primary 
          --btn-block">Reset Password</button>

          <div className={styles.links}>
            <p>
            <Link to="/login">Login</Link>
            </p>
            <p>
            <Link to="/Register">Register</Link>
            </p>
          </div>

        </form>
      </div>
      </Card>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset Password" width="400"/>
      </div>
    </section>
  )
}

export default Reset