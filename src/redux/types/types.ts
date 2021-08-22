export interface AuthPayload {
    uid?: string | null | undefined;
    displayName?: string | null | undefined;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface UiPayload {
    msgError: string    
}

export type types =
    // Authentication types
    | { type: '[Auth] Login', payload: AuthPayload }
    | { type: '[Auth] Logout', payload: AuthPayload }

    // Ui types - Errors
    | { type: '[UI] UiSetError', payload: UiPayload }
    | { type: '[UI] UiUnsetError' }
    // Ui types - Loading
    | { type: '[UI] UiStartLoading' }
    | { type: '[UI] UiFinishLoading' }
    