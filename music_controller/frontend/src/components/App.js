import React, {Component} from "react"
import {render} from "react-dom"
import HomePage from "./HomePage"

export default class App extends Component{
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div>
                <h1>
                   Ellie is Testing 😅 
                </h1>
                <HomePage/>
            </div>    
        )
    }
}    


const divContainer = document.getElementById("app")
render(<App/> , divContainer)
