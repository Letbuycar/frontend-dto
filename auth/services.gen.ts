// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type { SignupUserApiV1AuthSignupPostData, SignupUserApiV1AuthSignupPostError, SignupUserApiV1AuthSignupPostResponse, SigninUserApiV1AuthSigninPostData, SigninUserApiV1AuthSigninPostError, SigninUserApiV1AuthSigninPostResponse, ChangeMeApiV1AuthChangePatchData, ChangeMeApiV1AuthChangePatchError, ChangeMeApiV1AuthChangePatchResponse, GetMeApiV1AuthMeGetError, GetMeApiV1AuthMeGetResponse, RefreshTokenApiV1AuthRefreshTokenPostData, RefreshTokenApiV1AuthRefreshTokenPostError, RefreshTokenApiV1AuthRefreshTokenPostResponse, ChangePasswordApiV1AuthChangePasswordPostData, ChangePasswordApiV1AuthChangePasswordPostError, ChangePasswordApiV1AuthChangePasswordPostResponse, AdminGetUsersApiV1UsersGetData, AdminGetUsersApiV1UsersGetError, AdminGetUsersApiV1UsersGetResponse, CreateUserApiV1UsersPostData, CreateUserApiV1UsersPostError, CreateUserApiV1UsersPostResponse, ChangeUserApiV1UsersChangeUserIdPatchData, ChangeUserApiV1UsersChangeUserIdPatchError, ChangeUserApiV1UsersChangeUserIdPatchResponse, GetBrokersApiV1UsersBrokersGetData, GetBrokersApiV1UsersBrokersGetError, GetBrokersApiV1UsersBrokersGetResponse, GetRandomStaffApiV1UsersRandomStaffGetError, GetRandomStaffApiV1UsersRandomStaffGetResponse, GetDealersApiV1UsersDealersGetData, GetDealersApiV1UsersDealersGetError, GetDealersApiV1UsersDealersGetResponse, AdminGetUserApiV1UsersUserIdGetData, AdminGetUserApiV1UsersUserIdGetError, AdminGetUserApiV1UsersUserIdGetResponse, AdminResetPasswordApiV1UsersUserIdChangePasswordPostData, AdminResetPasswordApiV1UsersUserIdChangePasswordPostError, AdminResetPasswordApiV1UsersUserIdChangePasswordPostResponse, ReadCustomerGroupsApiV1CustomerGroupsGetData, ReadCustomerGroupsApiV1CustomerGroupsGetError, ReadCustomerGroupsApiV1CustomerGroupsGetResponse, CreateNewCustomerGroupApiV1CustomerGroupsPostData, CreateNewCustomerGroupApiV1CustomerGroupsPostError, CreateNewCustomerGroupApiV1CustomerGroupsPostResponse, ReadCustomerGroupApiV1CustomerGroupsGroupIdGetData, ReadCustomerGroupApiV1CustomerGroupsGroupIdGetError, ReadCustomerGroupApiV1CustomerGroupsGroupIdGetResponse, UpdateExistingCustomerGroupApiV1CustomerGroupsGroupIdPutData, UpdateExistingCustomerGroupApiV1CustomerGroupsGroupIdPutError, UpdateExistingCustomerGroupApiV1CustomerGroupsGroupIdPutResponse, DeleteExistingCustomerGroupApiV1CustomerGroupsGroupIdDeleteData, DeleteExistingCustomerGroupApiV1CustomerGroupsGroupIdDeleteError, DeleteExistingCustomerGroupApiV1CustomerGroupsGroupIdDeleteResponse, ReadCountriesApiV1LocationCountriesGetData, ReadCountriesApiV1LocationCountriesGetError, ReadCountriesApiV1LocationCountriesGetResponse, CreateCountryApiV1LocationCountriesPostData, CreateCountryApiV1LocationCountriesPostError, CreateCountryApiV1LocationCountriesPostResponse, ReadCountryApiV1LocationCountriesCountryIdGetData, ReadCountryApiV1LocationCountriesCountryIdGetError, ReadCountryApiV1LocationCountriesCountryIdGetResponse, UpdateCountryApiV1LocationCountriesCountryIdPutData, UpdateCountryApiV1LocationCountriesCountryIdPutError, UpdateCountryApiV1LocationCountriesCountryIdPutResponse, DeleteCountryApiV1LocationCountriesCountryIdDeleteData, DeleteCountryApiV1LocationCountriesCountryIdDeleteError, DeleteCountryApiV1LocationCountriesCountryIdDeleteResponse, ReadCitiesApiV1LocationCitiesGetData, ReadCitiesApiV1LocationCitiesGetError, ReadCitiesApiV1LocationCitiesGetResponse, CreateCityApiV1LocationCitiesPostData, CreateCityApiV1LocationCitiesPostError, CreateCityApiV1LocationCitiesPostResponse, ReadCityApiV1LocationCitiesCityIdGetData, ReadCityApiV1LocationCitiesCityIdGetError, ReadCityApiV1LocationCitiesCityIdGetResponse, UpdateCityApiV1LocationCitiesCityIdPutData, UpdateCityApiV1LocationCitiesCityIdPutError, UpdateCityApiV1LocationCitiesCityIdPutResponse, DeleteCityApiV1LocationCitiesCityIdDeleteData, DeleteCityApiV1LocationCitiesCityIdDeleteError, DeleteCityApiV1LocationCitiesCityIdDeleteResponse, RootGetError, RootGetResponse } from './types.gen';

export const client = createClient(createConfig());

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
 * Refresh Token
 */
export const refreshTokenApiV1AuthRefreshTokenPost = <ThrowOnError extends boolean = false>(options: Options<RefreshTokenApiV1AuthRefreshTokenPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<RefreshTokenApiV1AuthRefreshTokenPostResponse, RefreshTokenApiV1AuthRefreshTokenPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/auth/refresh-token/'
    });
};

/**
 * Change Password
 */
export const changePasswordApiV1AuthChangePasswordPost = <ThrowOnError extends boolean = false>(options: Options<ChangePasswordApiV1AuthChangePasswordPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<ChangePasswordApiV1AuthChangePasswordPostResponse, ChangePasswordApiV1AuthChangePasswordPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/auth/change-password/'
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
 * Create User
 */
export const createUserApiV1UsersPost = <ThrowOnError extends boolean = false>(options: Options<CreateUserApiV1UsersPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateUserApiV1UsersPostResponse, CreateUserApiV1UsersPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/'
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
 * Get Brokers
 */
export const getBrokersApiV1UsersBrokersGet = <ThrowOnError extends boolean = false>(options?: Options<GetBrokersApiV1UsersBrokersGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetBrokersApiV1UsersBrokersGetResponse, GetBrokersApiV1UsersBrokersGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/brokers/'
    });
};

/**
 * Get Random Staff
 */
export const getRandomStaffApiV1UsersRandomStaffGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<GetRandomStaffApiV1UsersRandomStaffGetResponse, GetRandomStaffApiV1UsersRandomStaffGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/random-staff/'
    });
};

/**
 * Get Dealers
 */
export const getDealersApiV1UsersDealersGet = <ThrowOnError extends boolean = false>(options?: Options<GetDealersApiV1UsersDealersGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetDealersApiV1UsersDealersGetResponse, GetDealersApiV1UsersDealersGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/dealers/'
    });
};

/**
 * Admin Get User
 */
export const adminGetUserApiV1UsersUserIdGet = <ThrowOnError extends boolean = false>(options: Options<AdminGetUserApiV1UsersUserIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<AdminGetUserApiV1UsersUserIdGetResponse, AdminGetUserApiV1UsersUserIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/{user_id}/'
    });
};

/**
 * Admin Reset Password
 */
export const adminResetPasswordApiV1UsersUserIdChangePasswordPost = <ThrowOnError extends boolean = false>(options: Options<AdminResetPasswordApiV1UsersUserIdChangePasswordPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<AdminResetPasswordApiV1UsersUserIdChangePasswordPostResponse, AdminResetPasswordApiV1UsersUserIdChangePasswordPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/{user_id}/change-password/'
    });
};

/**
 * Read Customer Groups
 */
export const readCustomerGroupsApiV1CustomerGroupsGet = <ThrowOnError extends boolean = false>(options?: Options<ReadCustomerGroupsApiV1CustomerGroupsGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ReadCustomerGroupsApiV1CustomerGroupsGetResponse, ReadCustomerGroupsApiV1CustomerGroupsGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/customer-groups/'
    });
};

/**
 * Create New Customer Group
 */
export const createNewCustomerGroupApiV1CustomerGroupsPost = <ThrowOnError extends boolean = false>(options: Options<CreateNewCustomerGroupApiV1CustomerGroupsPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateNewCustomerGroupApiV1CustomerGroupsPostResponse, CreateNewCustomerGroupApiV1CustomerGroupsPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/customer-groups/'
    });
};

/**
 * Read Customer Group
 */
export const readCustomerGroupApiV1CustomerGroupsGroupIdGet = <ThrowOnError extends boolean = false>(options: Options<ReadCustomerGroupApiV1CustomerGroupsGroupIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ReadCustomerGroupApiV1CustomerGroupsGroupIdGetResponse, ReadCustomerGroupApiV1CustomerGroupsGroupIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/customer-groups/{group_id}/'
    });
};

/**
 * Update Existing Customer Group
 */
export const updateExistingCustomerGroupApiV1CustomerGroupsGroupIdPut = <ThrowOnError extends boolean = false>(options: Options<UpdateExistingCustomerGroupApiV1CustomerGroupsGroupIdPutData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateExistingCustomerGroupApiV1CustomerGroupsGroupIdPutResponse, UpdateExistingCustomerGroupApiV1CustomerGroupsGroupIdPutError, ThrowOnError>({
        ...options,
        url: '/api/v1/customer-groups/{group_id}/'
    });
};

/**
 * Delete Existing Customer Group
 */
export const deleteExistingCustomerGroupApiV1CustomerGroupsGroupIdDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteExistingCustomerGroupApiV1CustomerGroupsGroupIdDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteExistingCustomerGroupApiV1CustomerGroupsGroupIdDeleteResponse, DeleteExistingCustomerGroupApiV1CustomerGroupsGroupIdDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/customer-groups/{group_id}/'
    });
};

/**
 * Read Countries
 */
export const readCountriesApiV1LocationCountriesGet = <ThrowOnError extends boolean = false>(options?: Options<ReadCountriesApiV1LocationCountriesGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ReadCountriesApiV1LocationCountriesGetResponse, ReadCountriesApiV1LocationCountriesGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/countries/'
    });
};

/**
 * Create Country
 */
export const createCountryApiV1LocationCountriesPost = <ThrowOnError extends boolean = false>(options: Options<CreateCountryApiV1LocationCountriesPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateCountryApiV1LocationCountriesPostResponse, CreateCountryApiV1LocationCountriesPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/countries/'
    });
};

/**
 * Read Country
 */
export const readCountryApiV1LocationCountriesCountryIdGet = <ThrowOnError extends boolean = false>(options: Options<ReadCountryApiV1LocationCountriesCountryIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ReadCountryApiV1LocationCountriesCountryIdGetResponse, ReadCountryApiV1LocationCountriesCountryIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/countries/{country_id}'
    });
};

/**
 * Update Country
 */
export const updateCountryApiV1LocationCountriesCountryIdPut = <ThrowOnError extends boolean = false>(options: Options<UpdateCountryApiV1LocationCountriesCountryIdPutData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateCountryApiV1LocationCountriesCountryIdPutResponse, UpdateCountryApiV1LocationCountriesCountryIdPutError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/countries/{country_id}/'
    });
};

/**
 * Delete Country
 */
export const deleteCountryApiV1LocationCountriesCountryIdDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteCountryApiV1LocationCountriesCountryIdDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteCountryApiV1LocationCountriesCountryIdDeleteResponse, DeleteCountryApiV1LocationCountriesCountryIdDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/countries/{country_id}/'
    });
};

/**
 * Read Cities
 */
export const readCitiesApiV1LocationCitiesGet = <ThrowOnError extends boolean = false>(options?: Options<ReadCitiesApiV1LocationCitiesGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ReadCitiesApiV1LocationCitiesGetResponse, ReadCitiesApiV1LocationCitiesGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/cities/'
    });
};

/**
 * Create City
 */
export const createCityApiV1LocationCitiesPost = <ThrowOnError extends boolean = false>(options: Options<CreateCityApiV1LocationCitiesPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateCityApiV1LocationCitiesPostResponse, CreateCityApiV1LocationCitiesPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/cities/'
    });
};

/**
 * Read City
 */
export const readCityApiV1LocationCitiesCityIdGet = <ThrowOnError extends boolean = false>(options: Options<ReadCityApiV1LocationCitiesCityIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ReadCityApiV1LocationCitiesCityIdGetResponse, ReadCityApiV1LocationCitiesCityIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/cities/{city_id}'
    });
};

/**
 * Update City
 */
export const updateCityApiV1LocationCitiesCityIdPut = <ThrowOnError extends boolean = false>(options: Options<UpdateCityApiV1LocationCitiesCityIdPutData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateCityApiV1LocationCitiesCityIdPutResponse, UpdateCityApiV1LocationCitiesCityIdPutError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/cities/{city_id}/'
    });
};

/**
 * Delete City
 */
export const deleteCityApiV1LocationCitiesCityIdDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteCityApiV1LocationCitiesCityIdDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteCityApiV1LocationCitiesCityIdDeleteResponse, DeleteCityApiV1LocationCitiesCityIdDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/location/cities/{city_id}/'
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