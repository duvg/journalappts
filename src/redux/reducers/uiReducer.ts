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
        case "[UI] UiSetError": {
            
            return {
                ...state,
                msgError: action.payload.msgError
            }
            }
        case "[UI] UiUnsetError":
            return {
                ...state,
                msgError: null
            }
        case "[UI] UiStartLoading":
            return {
                ...state,
                loading: true
            }
        case "[UI] UiFinishLoading":
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}