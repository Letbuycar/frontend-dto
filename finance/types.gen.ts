// This file is auto-generated by @hey-api/openapi-ts

export type ApprovePayment = {
    amount: number;
    status: PAYMENT_STATUS;
};

export type AuctionSchema = {
    id: number;
    title: string;
    payment_account: string;
};

export type CARGO_STATUS = 'accountant_tariff_approved' | 'payment_auction_success' | 'payment_success' | 'accountant_payment_approved' | 'company_invoice_not_paid';

export type CARGO_STATUS_ACCOUNTANT = 'accountant_payment_approved';

export type CalculatedUserData = {
    user_id: string;
    balance: number;
    total_amount: number;
    paid_amount: number;
    cargo_count: number;
    not_paid_cargo_count: number;
    left_to_pay_amount?: (number | null);
};

export type CarBrandSchema = {
    id: number;
    title: string;
};

export type CarModelSchema = {
    id: number;
    title: string;
};

export type CargoForPaymentSchema = {
    vin_code?: (string | null);
    car_brand?: (CarBrandSchema | null);
    car_model?: (CarModelSchema | null);
    participent_number?: (number | null);
    lot_number?: (number | null);
    auction?: (AuctionSchema | null);
};

export type CargoPaySchema = {
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
    status?: (CARGO_STATUS_ACCOUNTANT | null);
    is_archived?: (boolean | null);
    id: number;
    dealer_id?: (string | null);
    left_to_pay_amount?: (number | null);
    is_auction_paid?: (boolean | null);
    status_list?: (Array<CARGO_STATUS> | null);
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
    status?: (CARGO_STATUS_ACCOUNTANT | null);
    is_archived?: (boolean | null);
};

export type DealerInfo = {
    id: string;
    first_name: string;
    last_name: string;
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type INVOICE_TYPE = 'auction' | 'company' | 'storage';

export type InvoiceSchema = {
    id?: number;
    invoice_type?: (INVOICE_TYPE | null);
    total_amount?: (string | null);
    paid_amount?: (string | null);
    file_id?: (string | null);
    cargo_id?: (number | null);
};

export type PAYMENT_STATUS = 'new' | 'approving' | 'approved' | 'failed';

export type PaginationSchema_Payment_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<Payment>;
};

export type PaginationSchema_Transaction_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<Transaction>;
};

export type PayCargoResponse = {
    success: boolean;
    amount: number;
};

export type Payment = {
    amount: number;
    file_id?: (string | null);
    cargo_id?: (number | null);
    cargo_vin?: (string | null);
    id: number;
    user_id: string;
    payment_date: string;
    status: string;
    cargo?: (CargoForPaymentSchema | null);
    is_active: boolean;
    dealer?: (DealerInfo | null);
    updated_on: string;
    created_on: string;
};

export type PaymentDealerCreate = {
    amount: number;
    file_id?: (string | null);
    cargo_id?: (number | null);
    cargo_vin?: (string | null);
};

export type PaymentsDocsAccess = {
    payment_id: number;
    user_id: string;
    doc_type: string;
};

export type SettingsSchema = {
    payment_account: string;
    payment_storage_account: string;
};

export type Transaction = {
    created_by_user_id: string;
    created_by_user_role: UserRole;
    user_id: string;
    amount: number;
    balance_before: number;
    balance_after: number;
    cargo_id: (number | null);
    cargo: (CargoSchema | null);
    updated_on: string;
    created_on: string;
};

export type UserBalance = {
    user_id: string;
    balance: number;
};

export type UserRole = 'Admin' | 'Manager' | 'Accountant' | 'Dealer' | 'Logistician' | 'Broker' | 'Expeditor' | 'Customer' | 'Robot';

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type GetUserBalanceApiV1UserBalanceGetResponse = (UserBalance);

export type GetUserBalanceApiV1UserBalanceGetError = unknown;

export type GetUserBalanceApiV1UserBalanceBalancesGetData = {
    query?: {
        user_ids?: Array<(string)>;
    };
};

export type GetUserBalanceApiV1UserBalanceBalancesGetResponse = (Array<CalculatedUserData>);

export type GetUserBalanceApiV1UserBalanceBalancesGetError = (HTTPValidationError);

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

export type GetTransactionsApiV1TransactionsGetData = {
    query?: {
        cargo_id?: number;
        user_id?: string;
    };
};

export type GetTransactionsApiV1TransactionsGetResponse = (PaginationSchema_Transaction_);

export type GetTransactionsApiV1TransactionsGetError = (HTTPValidationError);

export type GetSingleTransactionApiV1TransactionsTransactionIdGetData = {
    path: {
        transaction_id: number;
    };
};

export type GetSingleTransactionApiV1TransactionsTransactionIdGetResponse = (Transaction);

export type GetSingleTransactionApiV1TransactionsTransactionIdGetError = (HTTPValidationError);

export type GetAllPaymentsApiV1PaymentsAccountantGetData = {
    query?: {
        page?: number;
        status?: PAYMENT_STATUS;
        user_id?: string;
    };
};

export type GetAllPaymentsApiV1PaymentsAccountantGetResponse = (PaginationSchema_Payment_);

export type GetAllPaymentsApiV1PaymentsAccountantGetError = (HTTPValidationError);

export type GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetData = {
    path: {
        payment_id: number;
    };
};

export type GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetResponse = (Payment);

export type GetSinglePaymentApiV1PaymentsAccountantPaymentIdGetError = (HTTPValidationError);

export type ProcessPaymentApiV1PaymentsAccountantPaymentIdPostData = {
    body: ApprovePayment;
    path: {
        payment_id: number;
    };
};

export type ProcessPaymentApiV1PaymentsAccountantPaymentIdPostResponse = (Payment);

export type ProcessPaymentApiV1PaymentsAccountantPaymentIdPostError = (HTTPValidationError);

export type CreatePaymentApiV1PaymentsDealerPostData = {
    body: PaymentDealerCreate;
};

export type CreatePaymentApiV1PaymentsDealerPostResponse = (Payment);

export type CreatePaymentApiV1PaymentsDealerPostError = (HTTPValidationError);

export type GetMyPaymentsApiV1PaymentsDealerGetData = {
    query?: {
        page?: number;
        status?: PAYMENT_STATUS;
    };
};

export type GetMyPaymentsApiV1PaymentsDealerGetResponse = (PaginationSchema_Payment_);

export type GetMyPaymentsApiV1PaymentsDealerGetError = (HTTPValidationError);

export type GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetData = {
    path: {
        payment_id: string;
    };
};

export type GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetResponse = (Payment);

export type GetMySinglePaymentApiV1PaymentsDealerPaymentIdGetError = (HTTPValidationError);

export type GetSinglePaymentApiV1PaymentsAdminPaymentIdPostData = {
    body: ApprovePayment;
    path: {
        payment_id: number;
    };
};

export type GetSinglePaymentApiV1PaymentsAdminPaymentIdPostResponse = (Payment);

export type GetSinglePaymentApiV1PaymentsAdminPaymentIdPostError = (HTTPValidationError);

export type UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostData = {
    body: PaymentsDocsAccess;
};

export type UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostResponse = (unknown);

export type UpdateExistingCargoLogistApiV1PaymentsRobotHasFileAccessPostError = (HTTPValidationError);

export type GetSettingsApiV1SettingsGetData = {
    query?: {
        cargo_ids?: string;
    };
};

export type GetSettingsApiV1SettingsGetResponse = (SettingsSchema);

export type GetSettingsApiV1SettingsGetError = (HTTPValidationError);

export type UpdateSettingsApiV1SettingsPostData = {
    body: SettingsSchema;
};

export type UpdateSettingsApiV1SettingsPostResponse = (unknown);

export type UpdateSettingsApiV1SettingsPostError = (HTTPValidationError);

export type GetInvoicesApiV1InvoicesCargoIdGetData = {
    path: {
        cargo_id: number;
    };
};

export type GetInvoicesApiV1InvoicesCargoIdGetResponse = (Array<InvoiceSchema>);

export type GetInvoicesApiV1InvoicesCargoIdGetError = (HTTPValidationError);

export type RootGetResponse = (unknown);

export type RootGetError = unknown;