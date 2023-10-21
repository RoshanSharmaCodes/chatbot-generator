import React from "react"
import "./Form.css"
import { Button, TextField } from "@mui/material"
import { ArrowCircleLeft, ArrowCircleRight, ArrowForwardIosRounded } from "@mui/icons-material"

export default function () {
  return (
    <div className="formContainer">
      <div className="formMain">
        <TextField id="outlined-basic" label="Question" variant="outlined" style={{ width: 500, borderRadius: 10, color: "white" }} />
        <TextField id="outlined-multiline-static" label="Answer" multiline rows={8} style={{ width: 500, borderRadius: 10 }} />
      </div>
      <div className="formActionBtnSection">
        <Button variant="contained" style={{width:100}}>Next</Button>
        <Button variant="contained" style={{width:100}}>Previous</Button>
      </div>
    </div>
  )
}
