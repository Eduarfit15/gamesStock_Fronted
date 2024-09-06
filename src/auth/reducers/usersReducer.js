

export const usersReducer=(state=[],action)=>{




    switch (action.type) {
        case 'addUser':
            
        return [
         ...state,
         {
            ...action.payload,
         }
            
        ];
            
        case'removeUser':
        
        return [
          ...state.filter((i)=>i.id==action.payload)
        ]
    
        default:
            return state;
    }




}