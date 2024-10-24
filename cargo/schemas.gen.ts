// This file is auto-generated by @hey-api/openapi-ts

export const AuctionSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        payment_method: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Payment Method'
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'is_active', 'updated_on', 'created_on'],
    title: 'Auction'
} as const;

export const AuctionCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        payment_method: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Payment Method'
        }
    },
    type: 'object',
    required: ['title'],
    title: 'AuctionCreate'
} as const;

export const AuctionUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        payment_method: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Payment Method'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'AuctionUpdate'
} as const;

export const BoatTypeSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'updated_on', 'created_on'],
    title: 'BoatType'
} as const;

export const BoatTypeCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'BoatTypeCreate'
} as const;

export const BoatTypeUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'BoatTypeUpdate'
} as const;

export const BodyTypeSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'updated_on', 'created_on'],
    title: 'BodyType'
} as const;

export const BodyTypeCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'BodyTypeCreate'
} as const;

export const BodyTypeUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'BodyTypeUpdate'
} as const;

export const CarBrandSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'is_active', 'updated_on', 'created_on'],
    title: 'CarBrand'
} as const;

export const CarBrandCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CarBrandCreate'
} as const;

export const CarBrandUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CarBrandUpdate'
} as const;

export const CarModelSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        brand_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Brand Id'
        },
        id: {
            type: 'integer',
            title: 'Id'
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
        },
        brand: {
            anyOf: [
                {
                    '$ref': '#/components/schemas/CarBrand'
                },
                {
                    type: 'null'
                }
            ]
        }
    },
    type: 'object',
    required: ['title', 'id', 'is_active', 'updated_on', 'created_on'],
    title: 'CarModel'
} as const;

export const CarModelCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        brand_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Brand Id'
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CarModelCreate'
} as const;

export const CarModelUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        brand_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Brand Id'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CarModelUpdate'
} as const;

export const CitySchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'updated_on', 'created_on'],
    title: 'City'
} as const;

export const CityCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CityCreate'
} as const;

export const CityUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CityUpdate'
} as const;

export const CountrySchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'updated_on', 'created_on'],
    title: 'Country'
} as const;

export const CountryCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CountryCreate'
} as const;

export const CountryUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CountryUpdate'
} as const;

export const EngineVolumeSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'is_active', 'updated_on', 'created_on'],
    title: 'EngineVolume'
} as const;

export const EngineVolumeCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        }
    },
    type: 'object',
    required: ['title'],
    title: 'EngineVolumeCreate'
} as const;

export const EngineVolumeUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'EngineVolumeUpdate'
} as const;

export const FuelTypeSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'updated_on', 'created_on'],
    title: 'FuelType'
} as const;

export const FuelTypeCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'FuelTypeCreate'
} as const;

export const FuelTypeUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'FuelTypeUpdate'
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

export const PortFromSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        address: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Address'
        },
        zipcode: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Zipcode'
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'is_active', 'updated_on', 'created_on'],
    title: 'PortFrom'
} as const;

export const PortFromCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        address: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Address'
        },
        zipcode: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Zipcode'
        }
    },
    type: 'object',
    required: ['title'],
    title: 'PortFromCreate'
} as const;

export const PortFromUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        address: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Address'
        },
        zipcode: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Zipcode'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'PortFromUpdate'
} as const;

export const PortToSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        country_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Country Id'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        },
        id: {
            type: 'integer',
            title: 'Id'
        },
        country: {
            '$ref': '#/components/schemas/Country'
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
    required: ['title', 'id', 'country', 'updated_on', 'created_on'],
    title: 'PortTo'
} as const;

export const PortToCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        country_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Country Id'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'PortToCreate'
} as const;

export const PortToUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        country_id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Country Id'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'PortToUpdate'
} as const;

export const TransmissionSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        },
        id: {
            type: 'integer',
            title: 'Id'
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
    required: ['title', 'id', 'updated_on', 'created_on'],
    title: 'Transmission'
} as const;

export const TransmissionCreateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'TransmissionCreate'
} as const;

export const TransmissionUpdateSchema = {
    properties: {
        title: {
            type: 'string',
            title: 'Title'
        },
        is_active: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Active',
            default: true
        }
    },
    type: 'object',
    required: ['title'],
    title: 'TransmissionUpdate'
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