import React, { Component } from "react"
import Home from './pages/Home/Home.tsx';
import styles from "./App.module.scss";

class App extends Component{
    render(){
        return(
             <div className={`${styles.App} rounded-xl`}>
                 <Home />
             </div>
        )
    }
}

export default App;
