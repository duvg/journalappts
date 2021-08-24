import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Swal from 'sweetalert2';
import { types } from '../types/types';
import {AuthPayload, RegisterPayload } from '../types/authTypes';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';
import { noteLogout } from './notes';


export const startLoginEmailPasswordAction = (email: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        
        try {
            dispatch(startLoading());
            const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);
            const authenticatedUser: AuthPayload = {
                uid: user?.uid,
                displayName: user?.displayName
            }
            dispatch(loginAction(authenticatedUser));
            dispatch(finishLoading());
        } catch (e: any) {
            dispatch(finishLoading());
            Swal.fire('Error', e.message, 'error');
        }
    }
}


// Login with google
export const startGoogleLoginAction = () => {
    
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                const googleuser = {
                    uid: user?.uid,
                    displayName: user?.displayName
                }
                dispatch(loginAction(googleuser));
            }).catch( e => {
                console.error(e.message)
            });
    }
}



// Register 
export const startRegisterWithEmailPasswordName = (registerUser: RegisterPayload) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(startLoading());
        firebase.auth().createUserWithEmailAndPassword(registerUser.email, registerUser.password)
            .then(async ({ user }) => {
                await user?.updateProfile({ displayName: registerUser.name });
                
                dispatch(finishLoading());
                dispatch(loginAction({ uid: user?.uid, displayName: user?.displayName }));
                
            })
            .catch(e => {
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
                console.log(e);
            });
        
    }
}



export const startLogOutAction = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            await firebase.auth().signOut();
            dispatch(logOutAction());
            dispatch(noteLogout());
        } catch (e) {
            console.log(e);
        }
    }
}

// Set data user in redux
export const loginAction = (authUser: AuthPayload): types => ({
    type: "[Auth] Login",
    payload: authUser
});


export const logOutAction = (): types => {
    return {
        type: "[Auth] Logout",
        payload: {uid: "", displayName: ""}
    }
}