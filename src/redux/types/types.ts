export interface AuthPayload {
    uid?: string | null | undefined;
    displayName?: string | null | undefined;
}
export type types =
    // Authentication types
    | { type: '[Auth] Login', payload: AuthPayload }
    | { type: '[Auth] Logout', payload: AuthPayload }