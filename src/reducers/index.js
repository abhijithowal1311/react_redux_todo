function reducer (state,action){
   
    switch(action.type){
        
        case "add_todo": 
            return {
                ...state,
                todos : [action.todo,...state.todos]
            };
    
        case "add_likes": 
        let index = action.index;
        let item = state.todos[index];
        let likes = item.likes+1;
        return {
            ...state,
            todos : [...state.todos.slice(0,index),{description : item.description, likes : likes },...state.todos.slice(index+1)]
        };
        case "remove_todo": 
          
            return {
                ...state,
                todos : [...state.todos.slice(0,action.index),...state.todos.slice(action.index+1)]
            };  
        case "mark_complete": 
        const key1 = action.index;
        return {
            ...state,
            
            todos : [...state.todos.slice(0,action.index),{description:state.todos[action.index].description, likes:state.todos[action.index].likes, completed : true},...state.todos.slice(action.index+1)]
        };  
        case "remove_likes": 
             
            return {
                ...state,
                todos : [...state.todos.slice(0,action.index),{description : state.todos[action.index].description, likes : state.todos[action.index].likes-1, completed : false },...state.todos.slice(action.index+1)]
            };
        
        case "get_completed": 
            return {
                ...state,
                completed : [...state.todos.slice(0,action.index),{description : state.todos[action.index].description, likes : state.todos[action.index].likes-1, completed : false },...state.todos.slice(action.index+1)]
            };                      
        default:
            return state;    
    }
}
export default reducer;