import { useState } from "react";
import styles from "./auth.module.scss"
import loginImg from "../../assets/login.png"
import { Link } from "react-router-dom"
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/card"

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400"/>
      </div>

    <Card>    
      <div className={styles.form}>
        <h2>Login</h2>
        
        <form>
          <input type="text" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <button className="--btn --btn-primary 
          --btn-block">Login</button>
          <div className={styles.links}>
            <Link to="/reset">¿Olvido su contraseña?</Link>
          </div>

          <p>--or--</p>

          <button className="--btn --btn-danger
          --btn-block"><FaGoogle color="#fff"/>
          Login with Google</button>

          <span className={styles.register}>
            <p>¿No tiene una cuenta?</p>
            <Link to="/register">Registrar</Link>
          </span>
        </form>
      </div>
      </Card>
    </section>
  )
}

export default Login