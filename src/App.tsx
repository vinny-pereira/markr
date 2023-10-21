import React, { Component } from "react"
import Home from './pages/Home/Home.tsx';
import styles from "./App.module.scss";

class App extends Component{
    render(){
        return(
             <div className={styles.App}>
                 <Home />
             </div>
        )
    }
}

export default App;
