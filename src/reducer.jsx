import { Actions } from "./actions";

const initialState={
    products: [],
    status: "idle",
}
export const productsReducer =(state= initialState, action)=>{
    console.log("state, state");
    console.log("action.payload", action.payload)
    switch (action.type){
        case Actions.addProducts:
            return {
                ...state, 
                products: action.payload  
            }  
        }
    


}