import React from "react"
import "./LoginForm.css"
import { Avatar, Button, TextField } from "@mui/material"

export default function LoginForm() {
  return (
    <div className="loginContainer">
      <div className="loginMainForm">
        <div className="loginHead">
          <Avatar style={{width:80,height:80}}/>
          <span>Simons, Welcome You!</span>
        </div>
        <div className="loginMain">
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" type="password" label="Password" variant="standard" />
          <Button variant="contained" color="success">
            Login
          </Button>
        </div>
        <div className="loginFooter"></div>
      </div>
    </div>
  )
}
