export interface AuthPayload {
    uid?: string | null | undefined;
    displayName?: string | null | undefined;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export type authTypes =
    // Authentication types
    | { type: '[Auth] Login', payload: AuthPayload }
    | { type: '[Auth] Logout', payload: AuthPayload }
