// This file is auto-generated by @hey-api/openapi-ts

export const ApprovePaymentSchema = {
    properties: {
        amount: {
            type: 'number',
            title: 'Amount'
        },
        status: {
            '$ref': '#/components/schemas/PAYMENT_STATUS'
        }
    },
    type: 'object',
    required: ['amount', 'status'],
    title: 'ApprovePayment'
} as const;

export const CargoPaySchemaSchema = {
    properties: {
        amount: {
            type: 'number',
            title: 'Amount'
        }
    },
    type: 'object',
    required: ['amount'],
    title: 'CargoPaySchema'
} as const;

export const CargoSchemaSchema = {
    properties: {
        vin_code: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Vin Code'
        },
        cost: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Cost',
            default: 0
        },
        sublot: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Sublot',
            default: 0
        },
        auct_collect: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Auct Collect',
            default: 0
        },
        penalty: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Penalty',
            default: 0
        },
        insurance_pay: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Insurance Pay',
            default: 0
        },
        sea_freight: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Sea Freight',
            default: 0
        },
        land_delivery: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Land Delivery',
            default: 0
        },
        broker_sevice_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Broker Sevice Amount',
            default: 0
        },
        storage_sevice_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Storage Sevice Amount',
            default: 0
        },
        doc_change_cost: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Doc Change Cost',
            default: 0
        },
        closed_location_cost: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Closed Location Cost',
            default: 0
        },
        total_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Total Amount',
            default: 0
        },
        paid_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Paid Amount',
            default: 0
        },
        id: {
            type: 'integer',
            title: 'Id'
        },
        dealer_id: {
            anyOf: [
                {
                    type: 'string',
                    format: 'uuid'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Dealer Id'
        },
        left_to_pay_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Left To Pay Amount',
            default: '0.00'
        }
    },
    type: 'object',
    required: ['id'],
    title: 'CargoSchema'
} as const;

export const CargoUpdateSchemaSchema = {
    properties: {
        vin_code: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Vin Code'
        },
        cost: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Cost',
            default: 0
        },
        sublot: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Sublot',
            default: 0
        },
        auct_collect: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Auct Collect',
            default: 0
        },
        penalty: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Penalty',
            default: 0
        },
        insurance_pay: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Insurance Pay',
            default: 0
        },
        sea_freight: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Sea Freight',
            default: 0
        },
        land_delivery: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Land Delivery',
            default: 0
        },
        broker_sevice_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Broker Sevice Amount',
            default: 0
        },
        storage_sevice_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Storage Sevice Amount',
            default: 0
        },
        doc_change_cost: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Doc Change Cost',
            default: 0
        },
        closed_location_cost: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Closed Location Cost',
            default: 0
        },
        total_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Total Amount',
            default: 0
        },
        paid_amount: {
            anyOf: [
                {
                    type: 'number'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Paid Amount',
            default: 0
        }
    },
    type: 'object',
    title: 'CargoUpdateSchema'
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

export const INVOICE_TYPESchema = {
    type: 'string',
    enum: ['auction', 'company', 'storage'],
    title: 'INVOICE_TYPE'
} as const;

export const InvoiceSchemaSchema = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id'
        },
        invoice_type: {
            anyOf: [
                {
                    '$ref': '#/components/schemas/INVOICE_TYPE'
                },
                {
                    type: 'null'
                }
            ]
        },
        total_amount: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Total Amount'
        },
        paid_amount: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Paid Amount'
        },
        file_id: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'File Id'
        },
        cargo_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Cargo Id'
        }
    },
    type: 'object',
    title: 'InvoiceSchema'
} as const;

export const PAYMENT_STATUSSchema = {
    type: 'string',
    enum: ['new', 'approving', 'approved', 'failed'],
    title: 'PAYMENT_STATUS'
} as const;

export const PaginationSchema_Payment_Schema = {
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
                '$ref': '#/components/schemas/Payment'
            },
            type: 'array',
            title: 'Items'
        }
    },
    type: 'object',
    required: ['total', 'page', 'total_pages', 'items'],
    title: 'PaginationSchema[Payment]'
} as const;

export const PaginationSchema_Transaction_Schema = {
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
                '$ref': '#/components/schemas/Transaction'
            },
            type: 'array',
            title: 'Items'
        }
    },
    type: 'object',
    required: ['total', 'page', 'total_pages', 'items'],
    title: 'PaginationSchema[Transaction]'
} as const;

export const PayCargoResponseSchema = {
    properties: {
        success: {
            type: 'boolean',
            title: 'Success'
        },
        amount: {
            type: 'number',
            title: 'Amount'
        }
    },
    type: 'object',
    required: ['success', 'amount'],
    title: 'PayCargoResponse'
} as const;

export const PaymentSchema = {
    properties: {
        amount: {
            type: 'number',
            title: 'Amount'
        },
        file_id: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'File Id'
        },
        cargo_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Cargo Id'
        },
        cargo_vin: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Cargo Vin'
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
        payment_date: {
            type: 'string',
            format: 'date-time',
            title: 'Payment Date'
        },
        status: {
            type: 'string',
            title: 'Status'
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
    required: ['amount', 'id', 'user_id', 'payment_date', 'status', 'is_active', 'updated_on', 'created_on'],
    title: 'Payment'
} as const;

export const PaymentDealerCreateSchema = {
    properties: {
        amount: {
            type: 'number',
            title: 'Amount'
        },
        file_id: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'File Id'
        },
        cargo_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Cargo Id'
        },
        cargo_vin: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Cargo Vin'
        }
    },
    type: 'object',
    required: ['amount'],
    title: 'PaymentDealerCreate'
} as const;

export const PaymentsDocsAccessSchema = {
    properties: {
        payment_id: {
            type: 'integer',
            title: 'Payment Id'
        },
        user_id: {
            type: 'string',
            format: 'uuid',
            title: 'User Id'
        },
        doc_type: {
            type: 'string',
            title: 'Doc Type'
        }
    },
    type: 'object',
    required: ['payment_id', 'user_id', 'doc_type'],
    title: 'PaymentsDocsAccess'
} as const;

export const SettingsSchemaSchema = {
    properties: {
        payment_account: {
            type: 'string',
            title: 'Payment Account'
        },
        payment_storage_account: {
            type: 'string',
            title: 'Payment Storage Account'
        }
    },
    type: 'object',
    required: ['payment_account', 'payment_storage_account'],
    title: 'SettingsSchema'
} as const;

export const TransactionSchema = {
    properties: {
        created_by_user_id: {
            type: 'string',
            format: 'uuid',
            title: 'Created By User Id'
        },
        created_by_user_role: {
            '$ref': '#/components/schemas/UserRole'
        },
        user_id: {
            type: 'string',
            format: 'uuid',
            title: 'User Id'
        },
        amount: {
            type: 'number',
            title: 'Amount'
        },
        balance_before: {
            type: 'number',
            title: 'Balance Before'
        },
        balance_after: {
            type: 'number',
            title: 'Balance After'
        },
        cargo_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Cargo Id'
        },
        cargo: {
            anyOf: [
                {
                    '$ref': '#/components/schemas/CargoSchema'
                },
                {
                    type: 'null'
                }
            ]
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
    required: ['created_by_user_id', 'created_by_user_role', 'user_id', 'amount', 'balance_before', 'balance_after', 'cargo_id', 'cargo', 'updated_on', 'created_on'],
    title: 'Transaction'
} as const;

export const UserBalanceSchema = {
    properties: {
        user_id: {
            type: 'string',
            format: 'uuid',
            title: 'User Id'
        },
        balance: {
            type: 'number',
            title: 'Balance'
        }
    },
    type: 'object',
    required: ['user_id', 'balance'],
    title: 'UserBalance'
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