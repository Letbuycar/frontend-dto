// This file is auto-generated by @hey-api/openapi-ts

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type NOTIFICATION_EVENT = 'created_by_manager' | 'accountant_tariff_approved' | 'logist_ports_approved' | 'payment_auction_success' | 'payment_success' | 'accountant_payment_approved' | 'logist_car_arived_to_storage' | 'logist_added_car_photo' | 'logist_car_to_shipment' | 'company_invoice_not_paid' | 'logist_gives_delivary_info' | 'no_cargo_doc' | 'have_cargo_doc' | 'broker_check_doc' | 'broker_create_duties_fee' | 'dealer_paid_duties_fee' | 'dealer_put_date' | 'no_delivery_info' | 'success';

export type NOTIFICATION_EVENT_ACCOUNTANT = 'company_invoice_not_paid';

export type NOTIFICATION_EVENT_BROKER = 'no_delivery_info';

export type NOTIFICATION_SERVICE = 'cargo' | 'finance' | 'storage' | 'pdf' | 'notification';

export type NotificationCreate = {
    cargo_id: number;
    notification_event: NOTIFICATION_EVENT;
    notification_service?: NOTIFICATION_SERVICE;
    user_role: UserRole;
};

export type NotificationCreateAccountant = {
    cargo_id: number;
    notification_event: NOTIFICATION_EVENT_ACCOUNTANT;
};

export type NotificationCreateBroker = {
    cargo_id: number;
    notification_event: NOTIFICATION_EVENT_BROKER;
};

export type NotificationSchema = {
    cargo_id: number;
    notification_event: NOTIFICATION_EVENT;
    notification_service?: NOTIFICATION_SERVICE;
    user_role: UserRole;
    id: number;
    user_id: string;
    email: string;
    title: string;
    message: string;
    url: string;
    is_email_sent: boolean;
    is_active: boolean;
    updated_on: string;
    created_on: string;
};

export type PaginationSchema_NotificationSchema_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<NotificationSchema>;
};

export type UserRole = 'Admin' | 'Manager' | 'Accountant' | 'Dealer' | 'Logistician' | 'Broker' | 'Customer' | 'Robot';

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type CreateNotificationApiV1NotificationPostData = {
    body: NotificationCreate;
};

export type CreateNotificationApiV1NotificationPostResponse = (NotificationSchema);

export type CreateNotificationApiV1NotificationPostError = (HTTPValidationError);

export type GetNotificationsApiV1NotificationGetData = {
    query?: {
        page?: number;
    };
};

export type GetNotificationsApiV1NotificationGetResponse = (PaginationSchema_NotificationSchema_);

export type GetNotificationsApiV1NotificationGetError = (HTTPValidationError);

export type CreateNotificationByAccountantApiV1NotificationAccountantPostData = {
    body: NotificationCreateAccountant;
};

export type CreateNotificationByAccountantApiV1NotificationAccountantPostResponse = (NotificationSchema);

export type CreateNotificationByAccountantApiV1NotificationAccountantPostError = (HTTPValidationError);

export type CreateNotificationByBrokerApiV1NotificationBrokerPostData = {
    body: NotificationCreateBroker;
};

export type CreateNotificationByBrokerApiV1NotificationBrokerPostResponse = (NotificationSchema);

export type CreateNotificationByBrokerApiV1NotificationBrokerPostError = (HTTPValidationError);

export type GetNotificationsApiV1NotificationNotificationIdGetData = {
    path: {
        notification_id: number;
    };
};

export type GetNotificationsApiV1NotificationNotificationIdGetResponse = (PaginationSchema_NotificationSchema_);

export type GetNotificationsApiV1NotificationNotificationIdGetError = (HTTPValidationError);

export type DeleteNotificationApiV1NotificationNotificationIdDeleteData = {
    path: {
        notification_id: number;
    };
};

export type DeleteNotificationApiV1NotificationNotificationIdDeleteResponse = (PaginationSchema_NotificationSchema_);

export type DeleteNotificationApiV1NotificationNotificationIdDeleteError = (HTTPValidationError);

export type GetNotificationsAllApiV1NotificationAllGetData = {
    query?: {
        page?: number;
        user_id?: string;
    };
};

export type GetNotificationsAllApiV1NotificationAllGetResponse = (PaginationSchema_NotificationSchema_);

export type GetNotificationsAllApiV1NotificationAllGetError = (HTTPValidationError);

export type RootGetResponse = (unknown);

export type RootGetError = unknown;