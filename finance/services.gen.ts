// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type { GetUserBalanceApiV1UserBalanceGetError, GetUserBalanceApiV1UserBalanceGetResponse, GetUserBalanceApiV1UserBalanceBalancesGetData, GetUserBalanceApiV1UserBalanceBalancesGetError, GetUserBalanceApiV1UserBalanceBalancesGetResponse, GetUserBalanceApiV1UserBalanceUserIdGetData, GetUserBalanceApiV1UserBalanceUserIdGetError, GetUserBalanceApiV1UserBalanceUserIdGetResponse, GetCargosApiV1CargoGetData, GetCargosApiV1CargoGetError, GetCargosApiV1CargoGetResponse, CreateCargoApiV1CargoPostData, CreateCargoApiV1CargoPostError, CreateCargoApiV1CargoPostResponse, GetCargoApiV1CargoCargoIdGetData, GetCargoApiV1CargoCargoIdGetError, GetCargoApiV1CargoCargoIdGetResponse, UpdateCargoApiV1CargoCargoIdPutData, UpdateCargoApiV1CargoCargoIdPutError, UpdateCargoApiV1CargoCargoIdPutResponse, PayForCargoApiV1CargoPayCargoIdPostData, PayForCargoApiV1CargoPayCargoIdPostError, PayForCargoApiV1CargoPayCargoIdPostResponse, GetCargoStatusHistoryApiV1CargoStatusHistoryCargoIdGetData, GetCargoStatusHistoryApiV1CargoStatusHistoryCargoIdGetError, GetCargoStatusHistoryApiV1CargoStatusHistoryCargoIdGetResponse, GetTransactionsApiV1TransactionsGetData, GetTransactionsApiV1TransactionsGetError, GetTransactionsApiV1TransactionsGetResponse, GetSingleTransactionApiV1TransactionsTransactionIdGetData, GetSingleTransactionApiV1TransactionsTransactionIdGetError, GetSingleTransactionApiV1TransactionsTransactionIdGetResponse, GetAllPaymentsApiV1PaymentsAccountantGetData, GetAllPaymentsApiV1PaymentsAccountantGetError, GetAllPaymentsApiV1PaymentsAccountantGetResponse, GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetData, GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetError, GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetResponse, ProcessPaymentApiV1PaymentsAccountantPaymentIdPostData, ProcessPaymentApiV1PaymentsAccountantPaymentIdPostError, ProcessPaymentApiV1PaymentsAccountantPaymentIdPostResponse, CreatePaymentApiV1PaymentsDealerPostData, CreatePaymentApiV1PaymentsDealerPostError, CreatePaymentApiV1PaymentsDealerPostResponse, GetMyPaymentsApiV1PaymentsDealerGetData, GetMyPaymentsApiV1PaymentsDealerGetError, GetMyPaymentsApiV1PaymentsDealerGetResponse, GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetData, GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetError, GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetResponse, GetSinglePaymentApiV1PaymentsAdminPaymentIdPostData, GetSinglePaymentApiV1PaymentsAdminPaymentIdPostError, GetSinglePaymentApiV1PaymentsAdminPaymentIdPostResponse, UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostData, UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostError, UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostResponse, GetSettingsApiV1SettingsGetData, GetSettingsApiV1SettingsGetError, GetSettingsApiV1SettingsGetResponse, UpdateSettingsApiV1SettingsPostData, UpdateSettingsApiV1SettingsPostError, UpdateSettingsApiV1SettingsPostResponse, GetInvoicesApiV1InvoicesCargoIdGetData, GetInvoicesApiV1InvoicesCargoIdGetError, GetInvoicesApiV1InvoicesCargoIdGetResponse, RootGetError, RootGetResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Get User Balance
 */
export const getUserBalanceApiV1UserBalanceGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<GetUserBalanceApiV1UserBalanceGetResponse, GetUserBalanceApiV1UserBalanceGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/user-balance/'
    });
};

/**
 * Get User Balance
 */
export const getUserBalanceApiV1UserBalanceBalancesGet = <ThrowOnError extends boolean = false>(options?: Options<GetUserBalanceApiV1UserBalanceBalancesGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetUserBalanceApiV1UserBalanceBalancesGetResponse, GetUserBalanceApiV1UserBalanceBalancesGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/user-balance/balances/'
    });
};

/**
 * Get User Balance
 */
export const getUserBalanceApiV1UserBalanceUserIdGet = <ThrowOnError extends boolean = false>(options: Options<GetUserBalanceApiV1UserBalanceUserIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetUserBalanceApiV1UserBalanceUserIdGetResponse, GetUserBalanceApiV1UserBalanceUserIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/user-balance/{user_id}/'
    });
};

/**
 * Get Cargos
 */
export const getCargosApiV1CargoGet = <ThrowOnError extends boolean = false>(options?: Options<GetCargosApiV1CargoGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCargosApiV1CargoGetResponse, GetCargosApiV1CargoGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo/'
    });
};

/**
 * Create Cargo
 */
export const createCargoApiV1CargoPost = <ThrowOnError extends boolean = false>(options: Options<CreateCargoApiV1CargoPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateCargoApiV1CargoPostResponse, CreateCargoApiV1CargoPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo/'
    });
};

/**
 * Get Cargo
 */
export const getCargoApiV1CargoCargoIdGet = <ThrowOnError extends boolean = false>(options: Options<GetCargoApiV1CargoCargoIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCargoApiV1CargoCargoIdGetResponse, GetCargoApiV1CargoCargoIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo/{cargo_id}/'
    });
};

/**
 * Update Cargo
 */
export const updateCargoApiV1CargoCargoIdPut = <ThrowOnError extends boolean = false>(options: Options<UpdateCargoApiV1CargoCargoIdPutData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateCargoApiV1CargoCargoIdPutResponse, UpdateCargoApiV1CargoCargoIdPutError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo/{cargo_id}/'
    });
};

/**
 * Pay For Cargo
 */
export const payForCargoApiV1CargoPayCargoIdPost = <ThrowOnError extends boolean = false>(options: Options<PayForCargoApiV1CargoPayCargoIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<PayForCargoApiV1CargoPayCargoIdPostResponse, PayForCargoApiV1CargoPayCargoIdPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo/pay/{cargo_id}/'
    });
};

/**
 * Get Cargo Status History
 */
export const getCargoStatusHistoryApiV1CargoStatusHistoryCargoIdGet = <ThrowOnError extends boolean = false>(options: Options<GetCargoStatusHistoryApiV1CargoStatusHistoryCargoIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCargoStatusHistoryApiV1CargoStatusHistoryCargoIdGetResponse, GetCargoStatusHistoryApiV1CargoStatusHistoryCargoIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo/status-history/{cargo_id}/'
    });
};

/**
 * Get Transactions
 */
export const getTransactionsApiV1TransactionsGet = <ThrowOnError extends boolean = false>(options?: Options<GetTransactionsApiV1TransactionsGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTransactionsApiV1TransactionsGetResponse, GetTransactionsApiV1TransactionsGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/transactions/'
    });
};

/**
 * Get Single Transaction
 */
export const getSingleTransactionApiV1TransactionsTransactionIdGet = <ThrowOnError extends boolean = false>(options: Options<GetSingleTransactionApiV1TransactionsTransactionIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetSingleTransactionApiV1TransactionsTransactionIdGetResponse, GetSingleTransactionApiV1TransactionsTransactionIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/transactions/{transaction_id}/'
    });
};

/**
 * Get All Payments
 */
export const getAllPaymentsApiV1PaymentsAccountantGet = <ThrowOnError extends boolean = false>(options?: Options<GetAllPaymentsApiV1PaymentsAccountantGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetAllPaymentsApiV1PaymentsAccountantGetResponse, GetAllPaymentsApiV1PaymentsAccountantGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/accountant/'
    });
};

/**
 * Get Single Payment
 */
export const getSinglePaymentApiV1PaymentsAccountantPaymentIdGet = <ThrowOnError extends boolean = false>(options: Options<GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetResponse, GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/accountant/{payment_id}/'
    });
};

/**
 * Process Payment
 */
export const processPaymentApiV1PaymentsAccountantPaymentIdPost = <ThrowOnError extends boolean = false>(options: Options<ProcessPaymentApiV1PaymentsAccountantPaymentIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<ProcessPaymentApiV1PaymentsAccountantPaymentIdPostResponse, ProcessPaymentApiV1PaymentsAccountantPaymentIdPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/accountant/{payment_id}/'
    });
};

/**
 * Create Payment
 */
export const createPaymentApiV1PaymentsDealerPost = <ThrowOnError extends boolean = false>(options: Options<CreatePaymentApiV1PaymentsDealerPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreatePaymentApiV1PaymentsDealerPostResponse, CreatePaymentApiV1PaymentsDealerPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/dealer/'
    });
};

/**
 * Get My Payments
 */
export const getMyPaymentsApiV1PaymentsDealerGet = <ThrowOnError extends boolean = false>(options?: Options<GetMyPaymentsApiV1PaymentsDealerGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetMyPaymentsApiV1PaymentsDealerGetResponse, GetMyPaymentsApiV1PaymentsDealerGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/dealer/'
    });
};

/**
 * Get My Single Payment
 */
export const getMySinglePaymentApiV1PaymentsDealerPaymentIdGet = <ThrowOnError extends boolean = false>(options: Options<GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetResponse, GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/dealer/{payment_id}/'
    });
};

/**
 * Get Single Payment
 */
export const getSinglePaymentApiV1PaymentsAdminPaymentIdPost = <ThrowOnError extends boolean = false>(options: Options<GetSinglePaymentApiV1PaymentsAdminPaymentIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<GetSinglePaymentApiV1PaymentsAdminPaymentIdPostResponse, GetSinglePaymentApiV1PaymentsAdminPaymentIdPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/admin/{payment_id}/'
    });
};

/**
 * Update Existing Cargo Logist
 */
export const updateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPost = <ThrowOnError extends boolean = false>(options: Options<UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostResponse, UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/robot/has-file-access/'
    });
};

/**
 * Get Settings
 */
export const getSettingsApiV1SettingsGet = <ThrowOnError extends boolean = false>(options?: Options<GetSettingsApiV1SettingsGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetSettingsApiV1SettingsGetResponse, GetSettingsApiV1SettingsGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/settings/'
    });
};

/**
 * Update Settings
 */
export const updateSettingsApiV1SettingsPost = <ThrowOnError extends boolean = false>(options: Options<UpdateSettingsApiV1SettingsPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UpdateSettingsApiV1SettingsPostResponse, UpdateSettingsApiV1SettingsPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/settings/'
    });
};

/**
 * Get Invoices
 */
export const getInvoicesApiV1InvoicesCargoIdGet = <ThrowOnError extends boolean = false>(options: Options<GetInvoicesApiV1InvoicesCargoIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetInvoicesApiV1InvoicesCargoIdGetResponse, GetInvoicesApiV1InvoicesCargoIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/invoices/{cargo_id}/'
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