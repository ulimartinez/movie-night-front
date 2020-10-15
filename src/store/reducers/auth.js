import { createActions, createReducer } from 'reduxsauce';
import * as Immutable from 'seamless-immutable';
import { fatalFailure, logout, loginRequest, loginSuccess, discordRequest, discordSuccess } from '../handlers/auth';
import { dismissSnack } from '../handlers/snack';


export const INITIAL_STATE = {
    fetching: false,
    User: undefined,
    error: undefined,
    connected: false,
    snack: undefined
};

export const {
    Types,
    Creators
} = createActions({
    // Auth Actions
    auth_request: ['data'],
    auth_success: ['payload'],
    auth_failure: ['payload'],
    register_request: ['data'],
    register_success: ['payload'],
    register_failure: ['payload'],
	discord_request: ['data'],
	discord_success: ['payload'],
	discord_failure: ['payload'],
    logout: undefined,
	dismiss_snack: undefined,
});

export default createReducer(INITIAL_STATE, {
    // Auth reducers
    [Types.AUTH_REQUEST]: loginRequest,
    [Types.AUTH_SUCCESS]: loginSuccess,
    [Types.AUTH_FAILURE]: fatalFailure,
    [Types.REGISTER_REQUEST]: loginRequest,
    [Types.REGISTER_SUCCESS]: loginSuccess,
    [Types.REGISTER_FAILURE]: fatalFailure,
	[Types.DISCORD_SUCCESS]: discordSuccess,
	[Types.DISCORD_REQUEST]: discordRequest,
	[Types.DISCORD_FAILURE]: fatalFailure,
    [Types.LOGOUT]: logout,
	[Types.DISMISS_SNACK]: dismissSnack,
});
