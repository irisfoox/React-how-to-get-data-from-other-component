import React from 'react'
class Exercise2 extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        name:"vvv",
    };
}
changeName(e){
    this.setState({name:e.target.value})
}
    render(){
        var name='';
        return(
            <>
            <h1>hello world</h1>
            {1+3}
            <input type="text" value={this.state.name} onChange={(e)=>this.changeName(e)}></input>
            {this.state.name.length>5 ? <label>the name big</label> :<label>the name small</label>}
            </>
        )
    }
}
export default Exercise2
