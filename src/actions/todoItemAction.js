let AddTodoId=0;
export const ADD_TODO=item=>({
    type: "ADD_ITEM",
    id: AddTodoId++,
    text:item
})

export const FILTER_LIST=filterType=>({
    type:"FILTER_LIST",
    filterType
})

export const FINISH_TODO=item =>({
    type:"FINISH_ITEM",
    item
})