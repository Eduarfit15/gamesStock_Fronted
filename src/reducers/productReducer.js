export const productReducer=(state=[],action)=>{


    switch (action.type) {
        
        case 'loadingProducts':
                return action.payload;


        case 'EncontrarPorId':

            return action.payload;

        case 'EncontrarPorIdAll':

            return action.payload;

        default:
            return state;
    }
}