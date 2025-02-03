// This file is auto-generated by @hey-api/openapi-ts

export const ContactCreateSchema = {
    properties: {
        name: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Name'
        },
        email: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Email'
        },
        phone: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Phone'
        },
        message: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Message'
        }
    },
    type: 'object',
    title: 'ContactCreate'
} as const;

export const ContactSchemaSchema = {
    properties: {
        name: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Name'
        },
        email: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Email'
        },
        phone: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Phone'
        },
        message: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Message'
        },
        id: {
            type: 'integer',
            title: 'Id'
        }
    },
    type: 'object',
    required: ['id'],
    title: 'ContactSchema'
} as const;

export const HTTPValidationErrorSchema = {
    properties: {
        detail: {
            items: {
                '$ref': '#/components/schemas/ValidationError'
            },
            type: 'array',
            title: 'Detail'
        }
    },
    type: 'object',
    title: 'HTTPValidationError'
} as const;

export const NOTIFICATION_EVENTSchema = {
    type: 'string',
    enum: ['created_by_manager', 'accountant_tariff_approved', 'logist_ports_approved', 'payment_auction_success', 'payment_success', 'accountant_payment_approved', 'logist_car_arived_to_storage', 'logist_added_car_photo', 'logist_car_to_shipment', 'company_invoice_not_paid', 'logist_gives_delivary_info', 'no_cargo_doc', 'have_cargo_doc', 'broker_check_doc', 'broker_create_duties_fee', 'dealer_paid_duties_fee', 'dealer_put_date', 'no_delivery_info', 'success'],
    title: 'NOTIFICATION_EVENT'
} as const;

export const NOTIFICATION_EVENT_ACCOUNTANTSchema = {
    type: 'string',
    enum: ['company_invoice_not_paid'],
    title: 'NOTIFICATION_EVENT_ACCOUNTANT'
} as const;

export const NOTIFICATION_EVENT_BROKERSchema = {
    type: 'string',
    enum: ['no_cargo_doc', 'no_delivery_info'],
    title: 'NOTIFICATION_EVENT_BROKER'
} as const;

export const NOTIFICATION_SERVICESchema = {
    type: 'string',
    enum: ['cargo', 'finance', 'storage', 'pdf', 'notification'],
    title: 'NOTIFICATION_SERVICE'
} as const;

export const NotificationCreateSchema = {
    properties: {
        cargo_id: {
            type: 'integer',
            title: 'Cargo Id'
        },
        notification_event: {
            '$ref': '#/components/schemas/NOTIFICATION_EVENT'
        },
        notification_service: {
            '$ref': '#/components/schemas/NOTIFICATION_SERVICE',
            default: 'notification'
        },
        user_role: {
            '$ref': '#/components/schemas/UserRole'
        }
    },
    type: 'object',
    required: ['cargo_id', 'notification_event', 'user_role'],
    title: 'NotificationCreate'
} as const;

export const NotificationCreateAccountantSchema = {
    properties: {
        cargo_id: {
            type: 'integer',
            title: 'Cargo Id'
        },
        notification_event: {
            '$ref': '#/components/schemas/NOTIFICATION_EVENT_ACCOUNTANT'
        }
    },
    type: 'object',
    required: ['cargo_id', 'notification_event'],
    title: 'NotificationCreateAccountant'
} as const;

export const NotificationCreateBrokerSchema = {
    properties: {
        cargo_id: {
            type: 'integer',
            title: 'Cargo Id'
        },
        notification_event: {
            '$ref': '#/components/schemas/NOTIFICATION_EVENT_BROKER'
        }
    },
    type: 'object',
    required: ['cargo_id', 'notification_event'],
    title: 'NotificationCreateBroker'
} as const;

export const NotificationSchemaSchema = {
    properties: {
        cargo_id: {
            type: 'integer',
            title: 'Cargo Id'
        },
        notification_event: {
            '$ref': '#/components/schemas/NOTIFICATION_EVENT'
        },
        notification_service: {
            '$ref': '#/components/schemas/NOTIFICATION_SERVICE',
            default: 'notification'
        },
        user_role: {
            '$ref': '#/components/schemas/UserRole'
        },
        id: {
            type: 'integer',
            title: 'Id'
        },
        user_id: {
            type: 'string',
            format: 'uuid',
            title: 'User Id'
        },
        email: {
            type: 'string',
            title: 'Email'
        },
        title: {
            type: 'string',
            title: 'Title'
        },
        message: {
            type: 'string',
            title: 'Message'
        },
        url: {
            type: 'string',
            title: 'Url'
        },
        is_email_sent: {
            type: 'boolean',
            title: 'Is Email Sent'
        },
        is_active: {
            type: 'boolean',
            title: 'Is Active'
        },
        updated_on: {
            type: 'string',
            format: 'date-time',
            title: 'Updated On'
        },
        created_on: {
            type: 'string',
            format: 'date-time',
            title: 'Created On'
        }
    },
    type: 'object',
    required: ['cargo_id', 'notification_event', 'user_role', 'id', 'user_id', 'email', 'title', 'message', 'url', 'is_email_sent', 'is_active', 'updated_on', 'created_on'],
    title: 'NotificationSchema'
} as const;

export const PaginationSchema_ContactSchema_Schema = {
    properties: {
        total: {
            type: 'integer',
            title: 'Total'
        },
        page: {
            type: 'integer',
            title: 'Page'
        },
        total_pages: {
            type: 'integer',
            title: 'Total Pages'
        },
        items: {
            items: {
                '$ref': '#/components/schemas/ContactSchema'
            },
            type: 'array',
            title: 'Items'
        }
    },
    type: 'object',
    required: ['total', 'page', 'total_pages', 'items'],
    title: 'PaginationSchema[ContactSchema]'
} as const;

export const PaginationSchema_NotificationSchema_Schema = {
    properties: {
        total: {
            type: 'integer',
            title: 'Total'
        },
        page: {
            type: 'integer',
            title: 'Page'
        },
        total_pages: {
            type: 'integer',
            title: 'Total Pages'
        },
        items: {
            items: {
                '$ref': '#/components/schemas/NotificationSchema'
            },
            type: 'array',
            title: 'Items'
        }
    },
    type: 'object',
    required: ['total', 'page', 'total_pages', 'items'],
    title: 'PaginationSchema[NotificationSchema]'
} as const;

export const UserRoleSchema = {
    type: 'string',
    enum: ['Admin', 'Manager', 'Accountant', 'Dealer', 'Logistician', 'Broker', 'Customer', 'Robot'],
    title: 'UserRole'
} as const;

export const ValidationErrorSchema = {
    properties: {
        loc: {
            items: {
                anyOf: [
                    {
                        type: 'string'
                    },
                    {
                        type: 'integer'
                    }
                ]
            },
            type: 'array',
            title: 'Location'
        },
        msg: {
            type: 'string',
            title: 'Message'
        },
        type: {
            type: 'string',
            title: 'Error Type'
        }
    },
    type: 'object',
    required: ['loc', 'msg', 'type'],
    title: 'ValidationError'
} as const;