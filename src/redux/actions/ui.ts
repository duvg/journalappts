import {types, UiPayload} from '../types/types';

// Set Errors
export const setErrorAction = (err: UiPayload): types => ({
    type: "[UI] UiSetError",
    payload: err
});

export const unSetErrorAction = (): types => ({
    type: "[UI] UiUnsetError"
});

// Set Loading
export const startLoading = (): types => ({
    type: "[UI] UiStartLoading"
});

export const finishLoading = (): types => ({
    type: "[UI] UiFinishLoading"
})