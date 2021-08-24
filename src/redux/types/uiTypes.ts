
export interface UiPayload {
    msgError: string    
}

export type uiTypes =

    // Ui types - Errors
    | { type: '[UI] Ui Set Error', payload: UiPayload }
    | { type: '[UI] Ui Unset Error' }

    // Ui types - Loading
    | { type: '[UI] Ui Start Loading' }
    | { type: '[UI] Ui Finish Loading' }