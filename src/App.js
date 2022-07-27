import React, { Component } from "react";


export default class App extends Component {
    
    constructor() {
        super()
        this.state = {
            names: "yolo"
        }
        
    }


    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then((resp) => {
            this.setState({
                names: resp
            })
        })
    }


    render() {
        return(
            <div>{this.state.names}</div>
        )
    }
}