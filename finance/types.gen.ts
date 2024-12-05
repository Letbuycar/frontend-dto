// This file is auto-generated by @hey-api/openapi-ts

export type CargoPaySchema = {
    vin_code?: (string | null);
    cost?: (number | null);
    sublot?: (number | null);
    auct_collect?: (number | null);
    penalty?: (number | null);
    insurance_pay?: (number | null);
    sea_freight?: (number | null);
    land_delivery?: (number | null);
    broker_sevice_amount?: (number | null);
    storage_sevice_amount?: (number | null);
    doc_change_cost?: (number | null);
    closed_location_cost?: (number | null);
    total_amount?: (number | null);
    paid_amount?: (number | null);
    left_to_pay_amount?: (number | null);
    amount: number;
};

export type CargoSchema = {
    vin_code?: (string | null);
    cost?: (number | null);
    sublot?: (number | null);
    auct_collect?: (number | null);
    penalty?: (number | null);
    insurance_pay?: (number | null);
    sea_freight?: (number | null);
    land_delivery?: (number | null);
    broker_sevice_amount?: (number | null);
    storage_sevice_amount?: (number | null);
    doc_change_cost?: (number | null);
    closed_location_cost?: (number | null);
    total_amount?: (number | null);
    paid_amount?: (number | null);
    left_to_pay_amount?: (number | null);
    id: number;
    dealer_id?: (string | null);
};

export type CargoUpdateSchema = {
    vin_code?: (string | null);
    cost?: (number | null);
    sublot?: (number | null);
    auct_collect?: (number | null);
    penalty?: (number | null);
    insurance_pay?: (number | null);
    sea_freight?: (number | null);
    land_delivery?: (number | null);
    broker_sevice_amount?: (number | null);
    storage_sevice_amount?: (number | null);
    doc_change_cost?: (number | null);
    closed_location_cost?: (number | null);
    total_amount?: (number | null);
    paid_amount?: (number | null);
    left_to_pay_amount?: (number | null);
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type PayCargoResponse = {
    success: boolean;
    amount: number;
};

export type UserBalance = {
    user_id: string;
    balance: number;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type GetUserBalanceApiV1UserBalanceGetData = {
    query: {
        token: string;
    };
};

export type GetUserBalanceApiV1UserBalanceGetResponse = (UserBalance);

export type GetUserBalanceApiV1UserBalanceGetError = (HTTPValidationError);

export type GetUserBalanceApiV1UserBalanceUsersBalancesGetData = {
    query?: {
        user_ids?: Array<(string)>;
    };
};

export type GetUserBalanceApiV1UserBalanceUsersBalancesGetResponse = (Array<UserBalance>);

export type GetUserBalanceApiV1UserBalanceUsersBalancesGetError = (HTTPValidationError);

export type GetUserBalanceApiV1UserBalanceUserIdGetData = {
    path: {
        user_id: string;
    };
};

export type GetUserBalanceApiV1UserBalanceUserIdGetResponse = (UserBalance);

export type GetUserBalanceApiV1UserBalanceUserIdGetError = (HTTPValidationError);

export type GetCargosApiV1CargoGetData = {
    query?: {
        cargo_ids?: string;
    };
};

export type GetCargosApiV1CargoGetResponse = (Array<CargoSchema>);

export type GetCargosApiV1CargoGetError = (HTTPValidationError);

export type CreateCargoApiV1CargoPostData = {
    body: CargoSchema;
};

export type CreateCargoApiV1CargoPostResponse = (CargoSchema);

export type CreateCargoApiV1CargoPostError = (HTTPValidationError);

export type GetCargoApiV1CargoCargoIdGetData = {
    path: {
        cargo_id: number;
    };
};

export type GetCargoApiV1CargoCargoIdGetResponse = (CargoSchema);

export type GetCargoApiV1CargoCargoIdGetError = (HTTPValidationError);

export type UpdateCargoApiV1CargoCargoIdPutData = {
    body: CargoUpdateSchema;
    path: {
        cargo_id: number;
    };
};

export type UpdateCargoApiV1CargoCargoIdPutResponse = (CargoSchema);

export type UpdateCargoApiV1CargoCargoIdPutError = (HTTPValidationError);

export type PayForCargoApiV1CargoPayCargoIdPostData = {
    body: CargoPaySchema;
    path: {
        cargo_id: number;
    };
};

export type PayForCargoApiV1CargoPayCargoIdPostResponse = (PayCargoResponse);

export type PayForCargoApiV1CargoPayCargoIdPostError = (HTTPValidationError);

export type RootGetResponse = (unknown);

export type RootGetError = unknown;