import React from 'react'
import Exercise22 from './Exercise22';
class Exercise1 extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        number:0,
    };
}
changeNumber(e){
    this.setState({number:e.target.value})
}
    render(){
        var number=17;
        return(
            <>
            <h3>hello world</h3>
            <h3>{this.state.name}</h3>
            <input value={this.state.number} onChange={(e)=>this.changeNumber(e)}></input>
            {(this.state.number>10) ? <label>the number big</label> : <label>the number small</label>}
            <Exercise22 myPhone={this.state.phone}
            changePhone={(e)=>this.state.changePhone(e)} myName={this.state.name} changeName={(e)=>this.state.changeName(e)}></Exercise22>
            </>
        )
    }
}
export default Exercise1