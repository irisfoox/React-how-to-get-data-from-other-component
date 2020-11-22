import React from 'react'
import Exercise1 from './exercise1';
import Exercise2 from './exercise2';
class Exercise22 extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        phone:" ",
    };
}
changePhone(e){
    this.setState({number:e.target.value})
}
    render(){
        var phone='';
        return(
            <>
            <h3>exercise22</h3>
            <label>{this.props.number}</label>
            <label>name:</label>
            <input type="text" value={this.props.myName} onChange={this.props.changeName}></input>
            <label>phone:</label>
            <input type="number" value={this.props.myPhone} onChange={this.props.changePhone}></input>
            </>
        )
    }

}
export default Exercise22






