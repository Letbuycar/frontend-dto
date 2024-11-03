// This file is auto-generated by @hey-api/openapi-ts

export type Auction = {
    title: string;
    payment_method?: (string | null);
    id: number;
    is_active: boolean;
    updated_on: string;
    created_on: string;
};

export type AuctionCreate = {
    title: string;
    payment_method?: (string | null);
};

export type AuctionUpdate = {
    title: string;
    payment_method?: (string | null);
    is_active?: (boolean | null);
};

export type BoatType = {
    title: string;
    is_active?: (boolean | null);
    id: number;
    updated_on: string;
    created_on: string;
};

export type BoatTypeCreate = {
    title: string;
    is_active?: (boolean | null);
};

export type BoatTypeUpdate = {
    title: string;
    is_active?: (boolean | null);
};

export type BodyType = {
    title: string;
    is_active?: (boolean | null);
    id: number;
    updated_on: string;
    created_on: string;
};

export type BodyTypeCreate = {
    title: string;
    is_active?: (boolean | null);
};

export type BodyTypeUpdate = {
    title: string;
    is_active?: (boolean | null);
};

export type CarBrand = {
    title: string;
    id: number;
    is_active: boolean;
    updated_on: string;
    created_on: string;
};

export type CarBrandCreate = {
    title: string;
};

export type CarBrandUpdate = {
    title: string;
    is_active?: (boolean | null);
};

export type CarModel = {
    title: string;
    brand_id?: (number | null);
    id: number;
    is_active: boolean;
    updated_on: string;
    created_on: string;
    brand?: (CarBrand | null);
};

export type CarModelCreate = {
    title: string;
    brand_id?: (number | null);
};

export type CarModelUpdate = {
    title: string;
    brand_id?: (number | null);
    is_active?: (boolean | null);
};

export type City = {
    title: string;
    is_active?: (boolean | null);
    id: number;
    updated_on: string;
    created_on: string;
};

export type CityCreate = {
    title: string;
    is_active?: (boolean | null);
};

export type CityUpdate = {
    title: string;
    is_active?: (boolean | null);
};

export type Country = {
    title?: string;
    is_active?: (boolean | null);
    id: number;
    updated_on?: string;
    created_on?: string;
};

export type CountryCreate = {
    title?: string;
    is_active?: (boolean | null);
};

export type CountryUpdate = {
    title?: string;
    is_active?: (boolean | null);
};

export type EngineVolume = {
    title: string;
    id: number;
    is_active: boolean;
    updated_on: string;
    created_on: string;
};

export type EngineVolumeCreate = {
    title: string;
};

export type EngineVolumeUpdate = {
    title: string;
    is_active?: (boolean | null);
};

export type FuelType = {
    title: string;
    is_active?: (boolean | null);
    id: number;
    updated_on: string;
    created_on: string;
};

export type FuelTypeCreate = {
    title: string;
    is_active?: (boolean | null);
};

export type FuelTypeUpdate = {
    title: string;
    is_active?: (boolean | null);
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type LocationFrom = {
    title: string;
    port_ids?: (Array<unknown> | null);
    id: number;
    is_active: boolean;
    updated_on: string;
    created_on: string;
};

export type LocationFromCreate = {
    title: string;
    port_ids?: (Array<unknown> | null);
};

export type LocationFromUpdate = {
    title: string;
    port_ids?: (Array<unknown> | null);
    is_active?: (boolean | null);
};

export type OverlandTariff = {
    price?: string;
    location_id?: number;
    port_id?: number;
    id: number;
    is_active: boolean;
    updated_on: string;
    created_on: string;
    location?: (LocationFrom | null);
    port?: (PortFrom | null);
};

export type OverlandTariffCreate = {
    price?: (number | string);
    location_id?: number;
    port_id?: number;
};

export type OverlandTariffUpdate = {
    price?: (number | string);
    location_id?: number;
    port_id?: number;
    is_active?: (boolean | null);
};

export type OverseaTariff = {
    price?: string;
    port_from_id?: number;
    port_to_id?: number;
    id: number;
    is_active: boolean;
    updated_on: string;
    created_on: string;
    port_from?: (PortFrom | null);
    port_to?: (PortTo | null);
};

export type OverseaTariffCreate = {
    price?: (number | string);
    port_from_id?: number;
    port_to_id?: number;
};

export type OverseaTariffUpdate = {
    price?: (number | string);
    port_from_id?: number;
    port_to_id?: number;
    is_active?: (boolean | null);
};

export type PaginationSchema_BodyType_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<BodyType>;
};

export type PaginationSchema_CarBrand_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<CarBrand>;
};

export type PaginationSchema_CarModel_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<CarModel>;
};

export type PaginationSchema_City_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<City>;
};

export type PaginationSchema_Country_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<Country>;
};

export type PaginationSchema_EngineVolume_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<EngineVolume>;
};

export type PaginationSchema_FuelType_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<FuelType>;
};

export type PaginationSchema_LocationFrom_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<LocationFrom>;
};

export type PaginationSchema_OverlandTariff_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<OverlandTariff>;
};

export type PaginationSchema_OverseaTariff_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<OverseaTariff>;
};

export type PaginationSchema_PortFrom_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<PortFrom>;
};

export type PaginationSchema_PortTo_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<PortTo>;
};

export type PaginationSchema_Transmission_ = {
    total: number;
    page: number;
    total_pages: number;
    items: Array<Transmission>;
};

export type PortFrom = {
    title: string;
    address?: (string | null);
    zipcode?: (string | null);
    id: number;
    is_active: boolean;
    updated_on: string;
    created_on: string;
};

export type PortFromCreate = {
    title: string;
    address?: (string | null);
    zipcode?: (string | null);
};

export type PortFromUpdate = {
    title: string;
    address?: (string | null);
    zipcode?: (string | null);
    is_active?: (boolean | null);
};

export type PortTo = {
    title: string;
    country_id?: (number | null);
    is_active?: (boolean | null);
    id: number;
    country?: (Country | null);
    updated_on?: string;
    created_on?: string;
};

export type PortToCreate = {
    title: string;
    country_id?: (number | null);
    is_active?: (boolean | null);
};

export type PortToUpdate = {
    title: string;
    country_id?: (number | null);
    is_active?: (boolean | null);
};

export type Transmission = {
    title: string;
    is_active?: (boolean | null);
    id: number;
    updated_on: string;
    created_on: string;
};

export type TransmissionCreate = {
    title: string;
    is_active?: (boolean | null);
};

export type TransmissionUpdate = {
    title: string;
    is_active?: (boolean | null);
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type ReadAuctionsApiV1AuctionsGetData = {
    query?: {
        page?: number;
    };
};

export type ReadAuctionsApiV1AuctionsGetResponse = (Array<Auction>);

export type ReadAuctionsApiV1AuctionsGetError = (HTTPValidationError);

export type CreateNewAuctionApiV1AuctionsPostData = {
    body: AuctionCreate;
    headers?: {
        Authorization?: string;
    };
};

export type CreateNewAuctionApiV1AuctionsPostResponse = (Auction);

export type CreateNewAuctionApiV1AuctionsPostError = (HTTPValidationError);

export type ReadAuctionApiV1AuctionsAuctionIdGetData = {
    path: {
        auction_id: number;
    };
};

export type ReadAuctionApiV1AuctionsAuctionIdGetResponse = (Auction);

export type ReadAuctionApiV1AuctionsAuctionIdGetError = (HTTPValidationError);

export type UpdateExistingAuctionApiV1AuctionsAuctionIdPutData = {
    body: AuctionUpdate;
    headers?: {
        Authorization?: string;
    };
    path: {
        auction_id: number;
    };
};

export type UpdateExistingAuctionApiV1AuctionsAuctionIdPutResponse = (Auction);

export type UpdateExistingAuctionApiV1AuctionsAuctionIdPutError = (HTTPValidationError);

export type DeleteExistingAuctionApiV1AuctionsAuctionIdDeleteData = {
    headers?: {
        Authorization?: string;
    };
    path: {
        auction_id: number;
    };
};

export type DeleteExistingAuctionApiV1AuctionsAuctionIdDeleteResponse = (Auction);

export type DeleteExistingAuctionApiV1AuctionsAuctionIdDeleteError = (HTTPValidationError);

export type ReadBoatTypesApiV1BoatTypesGetData = {
    headers?: {
        'Content-Language'?: string;
    };
};

export type ReadBoatTypesApiV1BoatTypesGetResponse = (Array<BoatType>);

export type ReadBoatTypesApiV1BoatTypesGetError = (HTTPValidationError);

export type CreateBoatTypeApiV1BoatTypesPostData = {
    body: BoatTypeCreate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
};

export type CreateBoatTypeApiV1BoatTypesPostResponse = (BoatType);

export type CreateBoatTypeApiV1BoatTypesPostError = (HTTPValidationError);

export type ReadBoatTypeApiV1BoatTypesBodyTypeIdGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    path: {
        body_type_id: number;
    };
};

export type ReadBoatTypeApiV1BoatTypesBodyTypeIdGetResponse = (BoatType);

export type ReadBoatTypeApiV1BoatTypesBodyTypeIdGetError = (HTTPValidationError);

export type UpdateBoatTypeApiV1BoatTypesBodyTypeIdPutData = {
    body: BoatTypeUpdate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        body_type_id: number;
    };
};

export type UpdateBoatTypeApiV1BoatTypesBodyTypeIdPutResponse = (BoatType);

export type UpdateBoatTypeApiV1BoatTypesBodyTypeIdPutError = (HTTPValidationError);

export type DeleteBoatTypeApiV1BoatTypesBodyTypeIdDeleteData = {
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        body_type_id: number;
    };
};

export type DeleteBoatTypeApiV1BoatTypesBodyTypeIdDeleteResponse = (BoatType);

export type DeleteBoatTypeApiV1BoatTypesBodyTypeIdDeleteError = (HTTPValidationError);

export type ReadBodyTypesApiV1BodyTypesGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    query?: {
        page?: number;
    };
};

export type ReadBodyTypesApiV1BodyTypesGetResponse = (PaginationSchema_BodyType_);

export type ReadBodyTypesApiV1BodyTypesGetError = (HTTPValidationError);

export type CreateBodyTypeApiV1BodyTypesPostData = {
    body: BodyTypeCreate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
};

export type CreateBodyTypeApiV1BodyTypesPostResponse = (BodyType);

export type CreateBodyTypeApiV1BodyTypesPostError = (HTTPValidationError);

export type ReadBodyTypeApiV1BodyTypesBodyTypeIdGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    path: {
        body_type_id: number;
    };
};

export type ReadBodyTypeApiV1BodyTypesBodyTypeIdGetResponse = (BodyType);

export type ReadBodyTypeApiV1BodyTypesBodyTypeIdGetError = (HTTPValidationError);

export type UpdateBodyTypeApiV1BodyTypesBodyTypeIdPutData = {
    body: BodyTypeUpdate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        body_type_id: number;
    };
};

export type UpdateBodyTypeApiV1BodyTypesBodyTypeIdPutResponse = (BodyType);

export type UpdateBodyTypeApiV1BodyTypesBodyTypeIdPutError = (HTTPValidationError);

export type DeleteBodyTypeApiV1BodyTypesBodyTypeIdDeleteData = {
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        body_type_id: number;
    };
};

export type DeleteBodyTypeApiV1BodyTypesBodyTypeIdDeleteResponse = (boolean);

export type DeleteBodyTypeApiV1BodyTypesBodyTypeIdDeleteError = (HTTPValidationError);

export type ReadCarBrandsApiV1CarBrandsGetData = {
    query?: {
        page?: number;
    };
};

export type ReadCarBrandsApiV1CarBrandsGetResponse = (PaginationSchema_CarBrand_);

export type ReadCarBrandsApiV1CarBrandsGetError = (HTTPValidationError);

export type CreateNewCarBrandApiV1CarBrandsPostData = {
    body: CarBrandCreate;
    headers?: {
        Authorization?: string;
    };
};

export type CreateNewCarBrandApiV1CarBrandsPostResponse = (CarBrand);

export type CreateNewCarBrandApiV1CarBrandsPostError = (HTTPValidationError);

export type ReadCarBrandApiV1CarBrandsCarBrandIdGetData = {
    path: {
        car_brand_id: number;
    };
};

export type ReadCarBrandApiV1CarBrandsCarBrandIdGetResponse = (CarBrand);

export type ReadCarBrandApiV1CarBrandsCarBrandIdGetError = (HTTPValidationError);

export type UpdateExistingCarBrandApiV1CarBrandsCarBrandIdPutData = {
    body: CarBrandUpdate;
    headers?: {
        Authorization?: string;
    };
    path: {
        car_brand_id: number;
    };
};

export type UpdateExistingCarBrandApiV1CarBrandsCarBrandIdPutResponse = (CarBrand);

export type UpdateExistingCarBrandApiV1CarBrandsCarBrandIdPutError = (HTTPValidationError);

export type DeleteExistingCarBrandApiV1CarBrandsCarBrandIdDeleteData = {
    headers?: {
        Authorization?: string;
    };
    path: {
        car_brand_id: number;
    };
};

export type DeleteExistingCarBrandApiV1CarBrandsCarBrandIdDeleteResponse = (CarBrand);

export type DeleteExistingCarBrandApiV1CarBrandsCarBrandIdDeleteError = (HTTPValidationError);

export type ReadCarModelsApiV1CarModelsGetData = {
    query?: {
        car_brand_id?: number;
        page?: number;
    };
};

export type ReadCarModelsApiV1CarModelsGetResponse = (PaginationSchema_CarModel_);

export type ReadCarModelsApiV1CarModelsGetError = (HTTPValidationError);

export type CreateNewCarModelApiV1CarModelsPostData = {
    body: CarModelCreate;
    headers?: {
        Authorization?: string;
    };
};

export type CreateNewCarModelApiV1CarModelsPostResponse = (CarModel);

export type CreateNewCarModelApiV1CarModelsPostError = (HTTPValidationError);

export type ReadCarModelApiV1CarModelsCarModelIdGetData = {
    path: {
        car_model_id: number;
    };
};

export type ReadCarModelApiV1CarModelsCarModelIdGetResponse = (CarModel);

export type ReadCarModelApiV1CarModelsCarModelIdGetError = (HTTPValidationError);

export type UpdateExistingCarModelApiV1CarModelsCarModelIdPutData = {
    body: CarModelUpdate;
    headers?: {
        Authorization?: string;
    };
    path: {
        car_model_id: number;
    };
};

export type UpdateExistingCarModelApiV1CarModelsCarModelIdPutResponse = (CarModel);

export type UpdateExistingCarModelApiV1CarModelsCarModelIdPutError = (HTTPValidationError);

export type DeleteExistingCarModelApiV1CarModelsCarModelIdDeleteData = {
    headers?: {
        Authorization?: string;
    };
    path: {
        car_model_id: number;
    };
};

export type DeleteExistingCarModelApiV1CarModelsCarModelIdDeleteResponse = (CarModel);

export type DeleteExistingCarModelApiV1CarModelsCarModelIdDeleteError = (HTTPValidationError);

export type ReadEngineVolumesApiV1EngineVolumesGetData = {
    query?: {
        page?: number;
    };
};

export type ReadEngineVolumesApiV1EngineVolumesGetResponse = (PaginationSchema_EngineVolume_);

export type ReadEngineVolumesApiV1EngineVolumesGetError = (HTTPValidationError);

export type CreateNewEngineVolumeApiV1EngineVolumesPostData = {
    body: EngineVolumeCreate;
    headers?: {
        Authorization?: string;
    };
};

export type CreateNewEngineVolumeApiV1EngineVolumesPostResponse = (EngineVolume);

export type CreateNewEngineVolumeApiV1EngineVolumesPostError = (HTTPValidationError);

export type ReadEngineVolumeApiV1EngineVolumesEngineVolumeIdGetData = {
    path: {
        engine_volume_id: number;
    };
};

export type ReadEngineVolumeApiV1EngineVolumesEngineVolumeIdGetResponse = (EngineVolume);

export type ReadEngineVolumeApiV1EngineVolumesEngineVolumeIdGetError = (HTTPValidationError);

export type UpdateExistingEngineVolumeApiV1EngineVolumesEngineVolumeIdPutData = {
    body: EngineVolumeUpdate;
    headers?: {
        Authorization?: string;
    };
    path: {
        engine_volume_id: number;
    };
};

export type UpdateExistingEngineVolumeApiV1EngineVolumesEngineVolumeIdPutResponse = (EngineVolume);

export type UpdateExistingEngineVolumeApiV1EngineVolumesEngineVolumeIdPutError = (HTTPValidationError);

export type DeleteExistingEngineVolumeApiV1EngineVolumesEngineVolumeIdDeleteData = {
    headers?: {
        Authorization?: string;
    };
    path: {
        engine_volume_id: number;
    };
};

export type DeleteExistingEngineVolumeApiV1EngineVolumesEngineVolumeIdDeleteResponse = (EngineVolume);

export type DeleteExistingEngineVolumeApiV1EngineVolumesEngineVolumeIdDeleteError = (HTTPValidationError);

export type ReadFuelTypesApiV1FuelTypesGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    query?: {
        page?: number;
    };
};

export type ReadFuelTypesApiV1FuelTypesGetResponse = (PaginationSchema_FuelType_);

export type ReadFuelTypesApiV1FuelTypesGetError = (HTTPValidationError);

export type CreateFuelTypeApiV1FuelTypesPostData = {
    body: FuelTypeCreate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
};

export type CreateFuelTypeApiV1FuelTypesPostResponse = (FuelType);

export type CreateFuelTypeApiV1FuelTypesPostError = (HTTPValidationError);

export type ReadFuelTypeApiV1FuelTypesFuelTypeIdGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    path: {
        fuel_type_id: number;
    };
};

export type ReadFuelTypeApiV1FuelTypesFuelTypeIdGetResponse = (FuelType);

export type ReadFuelTypeApiV1FuelTypesFuelTypeIdGetError = (HTTPValidationError);

export type UpdateFuelTypeApiV1FuelTypesFuelTypeIdPutData = {
    body: FuelTypeUpdate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        fuel_type_id: number;
    };
};

export type UpdateFuelTypeApiV1FuelTypesFuelTypeIdPutResponse = (FuelType);

export type UpdateFuelTypeApiV1FuelTypesFuelTypeIdPutError = (HTTPValidationError);

export type DeleteFuelTypeApiV1FuelTypesFuelTypeIdDeleteData = {
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        fuel_type_id: number;
    };
};

export type DeleteFuelTypeApiV1FuelTypesFuelTypeIdDeleteResponse = (FuelType);

export type DeleteFuelTypeApiV1FuelTypesFuelTypeIdDeleteError = (HTTPValidationError);

export type ReadTransmissionsApiV1TransmissionsTransmissionsGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    query?: {
        page?: number;
    };
};

export type ReadTransmissionsApiV1TransmissionsTransmissionsGetResponse = (PaginationSchema_Transmission_);

export type ReadTransmissionsApiV1TransmissionsTransmissionsGetError = (HTTPValidationError);

export type ReadTransmissionApiV1TransmissionsTransmissionsTransmissionIdGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    path: {
        transmission_id: number;
    };
};

export type ReadTransmissionApiV1TransmissionsTransmissionsTransmissionIdGetResponse = (Transmission);

export type ReadTransmissionApiV1TransmissionsTransmissionsTransmissionIdGetError = (HTTPValidationError);

export type CreateTransmissionApiV1TransmissionsPostData = {
    body: TransmissionCreate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
};

export type CreateTransmissionApiV1TransmissionsPostResponse = (Transmission);

export type CreateTransmissionApiV1TransmissionsPostError = (HTTPValidationError);

export type UpdateTransmissionApiV1TransmissionsTransmissionIdPutData = {
    body: TransmissionUpdate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        transmission_id: number;
    };
};

export type UpdateTransmissionApiV1TransmissionsTransmissionIdPutResponse = (Transmission);

export type UpdateTransmissionApiV1TransmissionsTransmissionIdPutError = (HTTPValidationError);

export type DeleteTransmissionApiV1TransmissionsTransmissionIdDeleteData = {
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        transmission_id: number;
    };
};

export type DeleteTransmissionApiV1TransmissionsTransmissionIdDeleteResponse = (Transmission);

export type DeleteTransmissionApiV1TransmissionsTransmissionIdDeleteError = (HTTPValidationError);

export type ReadCitiesApiV1CitiesGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    query?: {
        page?: number;
    };
};

export type ReadCitiesApiV1CitiesGetResponse = (PaginationSchema_City_);

export type ReadCitiesApiV1CitiesGetError = (HTTPValidationError);

export type CreateCityApiV1CitiesPostData = {
    body: CityCreate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
};

export type CreateCityApiV1CitiesPostResponse = (City);

export type CreateCityApiV1CitiesPostError = (HTTPValidationError);

export type ReadCityApiV1CitiesCityIdGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    path: {
        city_id: number;
    };
};

export type ReadCityApiV1CitiesCityIdGetResponse = (City);

export type ReadCityApiV1CitiesCityIdGetError = (HTTPValidationError);

export type UpdateCityApiV1CitiesCityIdPutData = {
    body: CityUpdate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        city_id: number;
    };
};

export type UpdateCityApiV1CitiesCityIdPutResponse = (City);

export type UpdateCityApiV1CitiesCityIdPutError = (HTTPValidationError);

export type DeleteCityApiV1CitiesCityIdDeleteData = {
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        city_id: number;
    };
};

export type DeleteCityApiV1CitiesCityIdDeleteResponse = (City);

export type DeleteCityApiV1CitiesCityIdDeleteError = (HTTPValidationError);

export type ReadCountriesApiV1CountriesGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    query?: {
        page?: number;
    };
};

export type ReadCountriesApiV1CountriesGetResponse = (PaginationSchema_Country_);

export type ReadCountriesApiV1CountriesGetError = (HTTPValidationError);

export type CreateCountryApiV1CountriesPostData = {
    body: CountryCreate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
};

export type CreateCountryApiV1CountriesPostResponse = (Country);

export type CreateCountryApiV1CountriesPostError = (HTTPValidationError);

export type ReadCountryApiV1CountriesCountryIdGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    path: {
        country_id: number;
    };
};

export type ReadCountryApiV1CountriesCountryIdGetResponse = (Country);

export type ReadCountryApiV1CountriesCountryIdGetError = (HTTPValidationError);

export type UpdateCountryApiV1CountriesCountryIdPutData = {
    body: CountryUpdate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        country_id: number;
    };
};

export type UpdateCountryApiV1CountriesCountryIdPutResponse = (Country);

export type UpdateCountryApiV1CountriesCountryIdPutError = (HTTPValidationError);

export type DeleteCountryApiV1CountriesCountryIdDeleteData = {
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        country_id: number;
    };
};

export type DeleteCountryApiV1CountriesCountryIdDeleteResponse = (Country);

export type DeleteCountryApiV1CountriesCountryIdDeleteError = (HTTPValidationError);

export type ReadLocationsFromApiV1LocationFromGetData = {
    query?: {
        page?: number;
    };
};

export type ReadLocationsFromApiV1LocationFromGetResponse = (PaginationSchema_LocationFrom_);

export type ReadLocationsFromApiV1LocationFromGetError = (HTTPValidationError);

export type CreateLocationFromApiV1LocationFromPostData = {
    body: LocationFromCreate;
    headers?: {
        Authorization?: string;
    };
};

export type CreateLocationFromApiV1LocationFromPostResponse = (LocationFrom);

export type CreateLocationFromApiV1LocationFromPostError = (HTTPValidationError);

export type ReadLocationFromApiV1LocationFromLocationFromIdGetData = {
    path: {
        location_from_id: number;
    };
};

export type ReadLocationFromApiV1LocationFromLocationFromIdGetResponse = (LocationFrom);

export type ReadLocationFromApiV1LocationFromLocationFromIdGetError = (HTTPValidationError);

export type UpdateLocationFromApiV1LocationFromLocationFromIdPutData = {
    body: LocationFromUpdate;
    headers?: {
        Authorization?: string;
    };
    path: {
        location_from_id: number;
    };
};

export type UpdateLocationFromApiV1LocationFromLocationFromIdPutResponse = (LocationFrom);

export type UpdateLocationFromApiV1LocationFromLocationFromIdPutError = (HTTPValidationError);

export type DeleteLocationFromApiV1LocationFromLocationFromIdDeleteData = {
    headers?: {
        Authorization?: string;
    };
    path: {
        location_from_id: number;
    };
};

export type DeleteLocationFromApiV1LocationFromLocationFromIdDeleteResponse = (LocationFrom);

export type DeleteLocationFromApiV1LocationFromLocationFromIdDeleteError = (HTTPValidationError);

export type ReadPortsFromApiV1PortFromGetData = {
    query?: {
        page?: number;
    };
};

export type ReadPortsFromApiV1PortFromGetResponse = (PaginationSchema_PortFrom_);

export type ReadPortsFromApiV1PortFromGetError = (HTTPValidationError);

export type CreateNewPortFromApiV1PortFromPostData = {
    body: PortFromCreate;
    headers?: {
        Authorization?: string;
    };
};

export type CreateNewPortFromApiV1PortFromPostResponse = (PortFrom);

export type CreateNewPortFromApiV1PortFromPostError = (HTTPValidationError);

export type ReadPortFromApiV1PortFromPortFromIdGetData = {
    path: {
        port_from_id: number;
    };
};

export type ReadPortFromApiV1PortFromPortFromIdGetResponse = (PortFrom);

export type ReadPortFromApiV1PortFromPortFromIdGetError = (HTTPValidationError);

export type UpdateExistingPortFromApiV1PortFromPortFromIdPutData = {
    body: PortFromUpdate;
    headers?: {
        Authorization?: string;
    };
    path: {
        port_from_id: number;
    };
};

export type UpdateExistingPortFromApiV1PortFromPortFromIdPutResponse = (PortFrom);

export type UpdateExistingPortFromApiV1PortFromPortFromIdPutError = (HTTPValidationError);

export type DeleteExistingPortFromApiV1PortFromPortFromIdDeleteData = {
    headers?: {
        Authorization?: string;
    };
    path: {
        port_from_id: number;
    };
};

export type DeleteExistingPortFromApiV1PortFromPortFromIdDeleteResponse = (PortFrom);

export type DeleteExistingPortFromApiV1PortFromPortFromIdDeleteError = (HTTPValidationError);

export type ReadPortsToApiV1PortToGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    query?: {
        page?: number;
    };
};

export type ReadPortsToApiV1PortToGetResponse = (PaginationSchema_PortTo_);

export type ReadPortsToApiV1PortToGetError = (HTTPValidationError);

export type CreatePortToApiV1PortToPostData = {
    body: PortToCreate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
};

export type CreatePortToApiV1PortToPostResponse = (PortTo);

export type CreatePortToApiV1PortToPostError = (HTTPValidationError);

export type ReadPortToApiV1PortToPortToIdGetData = {
    headers?: {
        'Content-Language'?: string;
    };
    path: {
        port_to_id: number;
    };
};

export type ReadPortToApiV1PortToPortToIdGetResponse = (PortTo);

export type ReadPortToApiV1PortToPortToIdGetError = (HTTPValidationError);

export type UpdatePortToApiV1PortToPortToIdPutData = {
    body: PortToUpdate;
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        port_to_id: number;
    };
};

export type UpdatePortToApiV1PortToPortToIdPutResponse = (PortTo);

export type UpdatePortToApiV1PortToPortToIdPutError = (HTTPValidationError);

export type DeletePortToApiV1PortToPortToIdDeleteData = {
    headers?: {
        Authorization?: string;
        'Content-Language'?: string;
    };
    path: {
        port_to_id: number;
    };
};

export type DeletePortToApiV1PortToPortToIdDeleteResponse = (PortTo);

export type DeletePortToApiV1PortToPortToIdDeleteError = (HTTPValidationError);

export type ReadOverlandTariffsApiV1OverlandTariffGetData = {
    query?: {
        location_id?: number;
        page?: number;
        port_id?: number;
    };
};

export type ReadOverlandTariffsApiV1OverlandTariffGetResponse = (PaginationSchema_OverlandTariff_);

export type ReadOverlandTariffsApiV1OverlandTariffGetError = (HTTPValidationError);

export type CreateNewOverlandTariffApiV1OverlandTariffPostData = {
    body: OverlandTariffCreate;
    headers?: {
        Authorization?: string;
    };
};

export type CreateNewOverlandTariffApiV1OverlandTariffPostResponse = (OverlandTariff);

export type CreateNewOverlandTariffApiV1OverlandTariffPostError = (HTTPValidationError);

export type ReadOverlandTariffApiV1OverlandTariffOverlandTariffIdGetData = {
    path: {
        overland_tariff_id: number;
    };
};

export type ReadOverlandTariffApiV1OverlandTariffOverlandTariffIdGetResponse = (OverlandTariff);

export type ReadOverlandTariffApiV1OverlandTariffOverlandTariffIdGetError = (HTTPValidationError);

export type UpdateExistingOverlandTariffApiV1OverlandTariffOverlandTariffIdPutData = {
    body: OverlandTariffUpdate;
    headers?: {
        Authorization?: string;
    };
    path: {
        overland_tariff_id: number;
    };
};

export type UpdateExistingOverlandTariffApiV1OverlandTariffOverlandTariffIdPutResponse = (OverlandTariff);

export type UpdateExistingOverlandTariffApiV1OverlandTariffOverlandTariffIdPutError = (HTTPValidationError);

export type DeleteExistingOverlandTariffApiV1OverlandTariffOverlandTariffIdDeleteData = {
    headers?: {
        Authorization?: string;
    };
    path: {
        overland_tariff_id: number;
    };
};

export type DeleteExistingOverlandTariffApiV1OverlandTariffOverlandTariffIdDeleteResponse = (OverlandTariff);

export type DeleteExistingOverlandTariffApiV1OverlandTariffOverlandTariffIdDeleteError = (HTTPValidationError);

export type ReadOverseaTariffsApiV1OverseaTariffGetData = {
    query?: {
        car_brand_id?: number;
        page?: number;
    };
};

export type ReadOverseaTariffsApiV1OverseaTariffGetResponse = (PaginationSchema_OverseaTariff_);

export type ReadOverseaTariffsApiV1OverseaTariffGetError = (HTTPValidationError);

export type CreateNewOverseaTariffApiV1OverseaTariffPostData = {
    body: OverseaTariffCreate;
    headers?: {
        Authorization?: string;
    };
};

export type CreateNewOverseaTariffApiV1OverseaTariffPostResponse = (OverseaTariff);

export type CreateNewOverseaTariffApiV1OverseaTariffPostError = (HTTPValidationError);

export type ReadOverseaTariffApiV1OverseaTariffOverseaTariffIdGetData = {
    path: {
        oversea_tariff_id: number;
    };
};

export type ReadOverseaTariffApiV1OverseaTariffOverseaTariffIdGetResponse = (OverseaTariff);

export type ReadOverseaTariffApiV1OverseaTariffOverseaTariffIdGetError = (HTTPValidationError);

export type UpdateExistingOverseaTariffApiV1OverseaTariffOverseaTariffIdPutData = {
    body: OverseaTariffUpdate;
    headers?: {
        Authorization?: string;
    };
    path: {
        oversea_tariff_id: number;
    };
};

export type UpdateExistingOverseaTariffApiV1OverseaTariffOverseaTariffIdPutResponse = (OverseaTariff);

export type UpdateExistingOverseaTariffApiV1OverseaTariffOverseaTariffIdPutError = (HTTPValidationError);

export type DeleteExistingOverseaTariffApiV1OverseaTariffOverseaTariffIdDeleteData = {
    headers?: {
        Authorization?: string;
    };
    path: {
        oversea_tariff_id: number;
    };
};

export type DeleteExistingOverseaTariffApiV1OverseaTariffOverseaTariffIdDeleteResponse = (OverseaTariff);

export type DeleteExistingOverseaTariffApiV1OverseaTariffOverseaTariffIdDeleteError = (HTTPValidationError);

export type RootGetResponse = (unknown);

export type RootGetError = unknown;