import { types } from "../types/types"

interface InitialState {
    loading: boolean;
    msgError: string | null;
}

const initialState: InitialState = {
    loading: false,
    msgError: null
}

export const uiReducer = (state= initialState, action:types ) => {
    switch (action.type) {
        case "[UI] Ui Set Error": {
            
            return {
                ...state,
                msgError: action.payload.msgError
            }
            }
        case "[UI] Ui Unset Error":
            return {
                ...state,
                msgError: null
            }
        case "[UI] Ui Start Loading":
            return {
                ...state,
                loading: true
            }
        case "[UI] Ui Finish Loading":
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}