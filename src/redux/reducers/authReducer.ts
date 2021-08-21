import { types } from "../types/types";

interface authReducerState {
    id: string,
    name: string
}

const initialState: authReducerState = {
    id: "",
    name: ""
}

export const authReducer = (state:authReducerState = initialState, action: types) => {
    switch (action.type) {
        case "[Auth] Login": {
            
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        }
        case "[Auth] Logout": {
            return initialState;
        }
        
    
        default:
            return state;
    }
}