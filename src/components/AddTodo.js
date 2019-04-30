import React, {Component} from 'react';

class AddTodo extends Component {
   
    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    AddTodo(event){
        console.log(this.props);    
        event.preventDefault();
        this.props.onAddTodo(this.state.text);
    }

    render(){
        return (
            <div> 
                Add To the List:
                <input type="text" value={this.state.text} onChange={(event)=>this.handleChange(event)}/>
                <button type="button" onClick={(event)=>this.AddTodo(event)} />
            </div>
        );
    }
}

export default AddTodo;