import { types } from '../types/types';
import { UiPayload } from '../types/uiTypes';

// Set Errors
export const setErrorAction = (err: UiPayload): types => ({
    type: "[UI] Ui Set Error",
    payload: err
});

export const unSetErrorAction = (): types => ({
    type: "[UI] Ui Unset Error"
});

// Set Loading
export const startLoading = (): types => ({
    type: "[UI] Ui Start Loading"
});

export const finishLoading = (): types => ({
    type: "[UI] Ui Finish Loading"
})