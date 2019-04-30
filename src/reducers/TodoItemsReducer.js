const initialState={
    todoList:[
        {
            id:0,
            text:"Germany class",
            completed:false
        }
    ]
}

const todoItemsReducer=(state=initialState,action)=>{
  switch(action.type){
     case 'ADD_ITEM':
       return {...state,todoList:[...state.todoList,{id:action.id,text:action.text,completed:false}]}
     default:
       return state;
  }
}

export default todoItemsReducer;