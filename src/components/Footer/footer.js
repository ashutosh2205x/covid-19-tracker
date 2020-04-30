import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import React from "react";

export const Footer =()=>{
 return(
     <div className="footer" style={{
         width:"100%",
         textAlign: "center",
         marginTop: 20,
         borderTop: "2px solid black"
     }}>
            <Typography color="textSecondary" gutterBottom>
    Created by Shubhi Singh
  </Typography> 
     </div>

 )   
}