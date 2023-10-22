import React from "react"
import "./LoginForm.css"
import { Avatar, Button, Chip, Divider, TextField } from "@mui/material"

export default function LoginForm() {
  return (
    <div className="loginContainer">
      <div className="loginMainForm">
        <div className="loginHead">
          <Avatar style={{ width: 80, height: 80 }} />
          <span style={{color:"grey", marginTop:10}}>Simons, Welcome You!</span>
        </div>
        <div className="loginMain">
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" type="password" label="Password" variant="standard" />
          <Button variant="contained" color="success">
            Login
          </Button>
        </div>
        <div className="loginOAuth">
          <Divider style={{width:"100%"}}>
            <Chip label="OR" />
          </Divider>
          <div className="loginOAuthIcons">
          <Avatar src="assets/googleauth.png" />
          <Avatar src="assets/facebookauth.png"/>
          <Avatar src="assets/twitterauth.png"/>
          </div>
        </div>
        <div className="loginFooter">
          <span style={{ fontSize: 13, color: "grey" }}>
            Don't have an account? <a href="">Click Here</a>
          </span>
        </div>
      </div>
    </div>
  )
}
