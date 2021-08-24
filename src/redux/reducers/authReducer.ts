import { authTypes } from "../types/authTypes";

interface authReducerState {
    id: string,
    name: string
}

const initialState: authReducerState = {
    id: "",
    name: ""
}

export const authReducer = (state = initialState, action: authTypes) => {
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