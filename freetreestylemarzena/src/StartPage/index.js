import React, {Component} from 'react';
import "./startpage.scss";
import { Link } from "react-router-dom";

class StartPage extends Component {
    constructor(){
        super()
        this.state= {}
    }

    render (){
        return(
          <div><img src={require('./Zinc.jpeg')} style={{width:null, height:null, flex:1, resize:'cover'}}/></div>
        )
    }
}

export default StartPage;












