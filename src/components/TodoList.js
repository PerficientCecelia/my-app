import React ,{Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends Component{

    render(){
        return (
          <ul>
              {this.props.items.map((item,i)=>(
                 <li key={i}>{item.text}</li>
              ))}
          </ul>
        );
    }  
}

TodoList.propTypes={
   items: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}



