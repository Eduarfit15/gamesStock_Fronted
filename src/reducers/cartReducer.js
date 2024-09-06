export const cartReducer=(state=[],action)=>{


    switch (action.type) {
        

        case 'AddProductCart':

        return[
            ...state,
            {
                product:action.payload,
                quantity:1,
            }
        ];

        case 'IncreaseProductCart':

        return state.map((i)=>{


            if(i.product.id===action.payload){

                return{
                    ...i,
                    quantity: i.quantity+1,
                }
            }
            else{
                return i;
            }
        });


        
        case 'DecreaseProductCart':

        return state.map((i)=>{


            if(i.product.id===action.payload){

                return{
                    ...i,
                    quantity: i.quantity-1,
                }
            }else{
                return i;
            }
        });
        

        case 'DeleteProductCart':

        return[

            ...state.filter((i)=>i.product.id!==action.payload)
        ];

        case 'DeleteAll':
            return  [];


    }
}