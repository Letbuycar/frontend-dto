// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type { RegisterAccountApiV1AuthPostError, RegisterAccountApiV1AuthPostResponse, SignupUserApiV1AuthSignupPostData, SignupUserApiV1AuthSignupPostError, SignupUserApiV1AuthSignupPostResponse, SigninUserApiV1AuthSigninPostData, SigninUserApiV1AuthSigninPostError, SigninUserApiV1AuthSigninPostResponse, ChangeMeApiV1AuthChangePatchData, ChangeMeApiV1AuthChangePatchError, ChangeMeApiV1AuthChangePatchResponse, GetMeApiV1AuthMeGetError, GetMeApiV1AuthMeGetResponse, ChangeUserApiV1AuthChangeUserIdPatchData, ChangeUserApiV1AuthChangeUserIdPatchError, ChangeUserApiV1AuthChangeUserIdPatchResponse, AdminGetUsersApiV1UsersGetData, AdminGetUsersApiV1UsersGetError, AdminGetUsersApiV1UsersGetResponse, AdminGetUserApiV1UsersUserIdGetData, AdminGetUserApiV1UsersUserIdGetError, AdminGetUserApiV1UsersUserIdGetResponse, ChangeUserApiV1UsersChangeUserIdPatchData, ChangeUserApiV1UsersChangeUserIdPatchError, ChangeUserApiV1UsersChangeUserIdPatchResponse, RootGetError, RootGetResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Register Account
 * Register account
 */
export const registerAccountApiV1AuthPost = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).post<RegisterAccountApiV1AuthPostResponse, RegisterAccountApiV1AuthPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/auth/'
    });
};

/**
 * Signup User
 */
export const signupUserApiV1AuthSignupPost = <ThrowOnError extends boolean = false>(options: Options<SignupUserApiV1AuthSignupPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<SignupUserApiV1AuthSignupPostResponse, SignupUserApiV1AuthSignupPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/auth/signup/'
    });
};

/**
 * Signin User
 */
export const signinUserApiV1AuthSigninPost = <ThrowOnError extends boolean = false>(options: Options<SigninUserApiV1AuthSigninPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<SigninUserApiV1AuthSigninPostResponse, SigninUserApiV1AuthSigninPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/auth/signin/'
    });
};

/**
 * Change Me
 */
export const changeMeApiV1AuthChangePatch = <ThrowOnError extends boolean = false>(options: Options<ChangeMeApiV1AuthChangePatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<ChangeMeApiV1AuthChangePatchResponse, ChangeMeApiV1AuthChangePatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/auth/change/'
    });
};

/**
 * Get Me
 */
export const getMeApiV1AuthMeGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<GetMeApiV1AuthMeGetResponse, GetMeApiV1AuthMeGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/auth/me/'
    });
};

/**
 * Change User
 */
export const changeUserApiV1AuthChangeUserIdPatch = <ThrowOnError extends boolean = false>(options: Options<ChangeUserApiV1AuthChangeUserIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<ChangeUserApiV1AuthChangeUserIdPatchResponse, ChangeUserApiV1AuthChangeUserIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/auth/change/{user_id}/'
    });
};

/**
 * Admin Get Users
 */
export const adminGetUsersApiV1UsersGet = <ThrowOnError extends boolean = false>(options?: Options<AdminGetUsersApiV1UsersGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<AdminGetUsersApiV1UsersGetResponse, AdminGetUsersApiV1UsersGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/'
    });
};

/**
 * Admin Get User
 */
export const adminGetUserApiV1UsersUserIdGet = <ThrowOnError extends boolean = false>(options: Options<AdminGetUserApiV1UsersUserIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<AdminGetUserApiV1UsersUserIdGetResponse, AdminGetUserApiV1UsersUserIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/{user_id}'
    });
};

/**
 * Change User
 */
export const changeUserApiV1UsersChangeUserIdPatch = <ThrowOnError extends boolean = false>(options: Options<ChangeUserApiV1UsersChangeUserIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<ChangeUserApiV1UsersChangeUserIdPatchResponse, ChangeUserApiV1UsersChangeUserIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/change/{user_id}/'
    });
};

/**
 * Root
 */
export const rootGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<RootGetResponse, RootGetError, ThrowOnError>({
        ...options,
        url: '/'
    });
};