import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    margin: '120px auto',
    // border: '1px solid red'
  },
  quotes: {
    color: '#ffff',
    margin: '20px 0'
  },
  texts: {
    color: '#6A6A6A',
    width: 460
  },
  mainInput: {
    // border: '1px solid red',
    padding: 25,
    borderRadius: 5,
    backgroundColor: '#181818',
    width: 500,
    marginTop: 50
  },
  inputGroup: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(210, 210, 210, 0.25)',
    borderRadius: 5,
    padding: '5px 10px',
    border: 'none',
    margin: '15px 0',
    color: '#ffff',
    fontWeight: 'bold'
  }
}

const Login = () => {

  let navigate = useNavigate()
  console.log("navigate", navigate)
  
  return (
    <React.Fragment>
      <div>
        <div style={styles.mainInput}>
          <h1 style={{ color: '#ffff', backgroundColor: '#181818' }}>Login</h1>
          <form style={{backgroundColor: '#181818'}}>
            <input type="email" style={styles.inputGroup} placeholder="Email" />
            <input type="password" style={styles.inputGroup} placeholder="password" />
            <Button variant="danger" style={{ width: '100%', height: 50, marginTop: 40 }} onClick={() => navigate('/homepage')}>Login</Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

const Register = () => {
  return (
    <React.Fragment>
      <div>
        <div style={styles.mainInput}>
          <h1 style={{color: '#ffff', backgroundColor: '#181818'}}>Register</h1>
          <form style={{backgroundColor: '#181818'}}>
            <input type="text" style={styles.inputGroup} placeholder="Name" /> 
            <input type="email" style={styles.inputGroup} placeholder="Email" />
            <input type="password" style={styles.inputGroup} placeholder="password" />
            <Button variant="danger" style={{ width: '100%', height: 50, marginTop: 40 }}>Login</Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default function Auth() {

  // switch register/login
  const [ isRegister, setIsRegister ] = useState(false)

  const switchLogin = () => {
    setIsRegister(false)
  }

  const switchRegister = () => {
    setIsRegister(true)
  }

  return (
    <React.Fragment>
      <div className="container" style={styles.container}>
        <Row>
          <Col>
            <img src={Logo} alt="logo" width="250px" />
            <h1 style={styles.quotes}>Easy, Fast, and Reliable</h1>
            <p style={styles.texts}>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>

            <div className="btn-group-auth mt-5">
              <Button variant="danger" style={{ marginRight: 10, width: 140 }} onClick={switchLogin}>Login</Button>
              <Button variant="dark" style={{ width: 140 }} onClick={switchRegister}>Register</Button>
            </div>
          </Col>

          <Col>
            {isRegister ? <Register /> : <Login />}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
