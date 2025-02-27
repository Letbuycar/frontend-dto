// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options, formDataBodySerializer } from '@hey-api/client-axios';
import type { UploadFileApiV1ImagesVinCodePostData, UploadFileApiV1ImagesVinCodePostError, UploadFileApiV1ImagesVinCodePostResponse, GetFilesApiV1ImagesVinCodeGetData, GetFilesApiV1ImagesVinCodeGetError, GetFilesApiV1ImagesVinCodeGetResponse, UploadMultipleFilesApiV1ImagesVinCodeMultiplePostData, UploadMultipleFilesApiV1ImagesVinCodeMultiplePostError, UploadMultipleFilesApiV1ImagesVinCodeMultiplePostResponse, GetDownloadZipApiV1ImagesDownloadZipVinCodeGetData, GetDownloadZipApiV1ImagesDownloadZipVinCodeGetError, GetDownloadZipApiV1ImagesDownloadZipVinCodeGetResponse, GetFileApiV1ImagesVinCodeFilenameGetData, GetFileApiV1ImagesVinCodeFilenameGetError, GetFileApiV1ImagesVinCodeFilenameGetResponse, DeleteFileApiV1ImagesVinCodeFilenameDeleteData, DeleteFileApiV1ImagesVinCodeFilenameDeleteError, DeleteFileApiV1ImagesVinCodeFilenameDeleteResponse, UploadFileDutyApiV1DutiesCargoIdPostData, UploadFileDutyApiV1DutiesCargoIdPostError, UploadFileDutyApiV1DutiesCargoIdPostResponse, GetFileDutyApiV1DutiesCargoIdFilenameGetData, GetFileDutyApiV1DutiesCargoIdFilenameGetError, GetFileDutyApiV1DutiesCargoIdFilenameGetResponse, UploadFileApiV1CargoDocsCargoIdPostData, UploadFileApiV1CargoDocsCargoIdPostError, UploadFileApiV1CargoDocsCargoIdPostResponse, GetFilesApiV1CargoDocsCargoIdGetData, GetFilesApiV1CargoDocsCargoIdGetError, GetFilesApiV1CargoDocsCargoIdGetResponse, UploadMultipleFilesApiV1CargoDocsCargoIdMultiplePostData, UploadMultipleFilesApiV1CargoDocsCargoIdMultiplePostError, UploadMultipleFilesApiV1CargoDocsCargoIdMultiplePostResponse, GetFileApiV1CargoDocsCargoIdFilenameGetData, GetFileApiV1CargoDocsCargoIdFilenameGetError, GetFileApiV1CargoDocsCargoIdFilenameGetResponse, DeleteFileApiV1CargoDocsCargoIdFilenameDeleteData, DeleteFileApiV1CargoDocsCargoIdFilenameDeleteError, DeleteFileApiV1CargoDocsCargoIdFilenameDeleteResponse, UploadFileInvoiceApiV1InvoicesCargoIdPostData, UploadFileInvoiceApiV1InvoicesCargoIdPostError, UploadFileInvoiceApiV1InvoicesCargoIdPostResponse, GetFileInvoiceApiV1InvoicesCargoIdFilenameGetData, GetFileInvoiceApiV1InvoicesCargoIdFilenameGetError, GetFileInvoiceApiV1InvoicesCargoIdFilenameGetResponse, UploadFilePaymentApiV1PaymentsPostData, UploadFilePaymentApiV1PaymentsPostError, UploadFilePaymentApiV1PaymentsPostResponse, GetFilePaymentApiV1PaymentsDealerFilenameGetData, GetFilePaymentApiV1PaymentsDealerFilenameGetError, GetFilePaymentApiV1PaymentsDealerFilenameGetResponse, GetFilePaymentApiV1PaymentsAccountantUserIdFilenameGetData, GetFilePaymentApiV1PaymentsAccountantUserIdFilenameGetError, GetFilePaymentApiV1PaymentsAccountantUserIdFilenameGetResponse, UploadFileContainerApiV1ContainersPostData, UploadFileContainerApiV1ContainersPostError, UploadFileContainerApiV1ContainersPostResponse, GetFileContainerApiV1ContainersFilenameGetData, GetFileContainerApiV1ContainersFilenameGetError, GetFileContainerApiV1ContainersFilenameGetResponse, UploadFileApiV1PortImagesCargoIdPostData, UploadFileApiV1PortImagesCargoIdPostError, UploadFileApiV1PortImagesCargoIdPostResponse, GetFilesApiV1PortImagesCargoIdGetData, GetFilesApiV1PortImagesCargoIdGetError, GetFilesApiV1PortImagesCargoIdGetResponse, UploadMultipleFilesApiV1PortImagesCargoIdMultiplePostData, UploadMultipleFilesApiV1PortImagesCargoIdMultiplePostError, UploadMultipleFilesApiV1PortImagesCargoIdMultiplePostResponse, GetDownloadZipApiV1PortImagesDownloadZipCargoIdGetData, GetDownloadZipApiV1PortImagesDownloadZipCargoIdGetError, GetDownloadZipApiV1PortImagesDownloadZipCargoIdGetResponse, GetFileApiV1PortImagesCargoIdFilenameGetData, GetFileApiV1PortImagesCargoIdFilenameGetError, GetFileApiV1PortImagesCargoIdFilenameGetResponse, DeleteFileApiV1PortImagesCargoIdFilenameDeleteData, DeleteFileApiV1PortImagesCargoIdFilenameDeleteError, DeleteFileApiV1PortImagesCargoIdFilenameDeleteResponse, UploadFileApiV1CertificatesCargoIdPostData, UploadFileApiV1CertificatesCargoIdPostError, UploadFileApiV1CertificatesCargoIdPostResponse, GetFilesApiV1CertificatesCargoIdGetData, GetFilesApiV1CertificatesCargoIdGetError, GetFilesApiV1CertificatesCargoIdGetResponse, UploadMultipleFilesApiV1CertificatesCargoIdMultiplePostData, UploadMultipleFilesApiV1CertificatesCargoIdMultiplePostError, UploadMultipleFilesApiV1CertificatesCargoIdMultiplePostResponse, GetFileApiV1CertificatesCargoIdFilenameGetData, GetFileApiV1CertificatesCargoIdFilenameGetError, GetFileApiV1CertificatesCargoIdFilenameGetResponse, DeleteFileApiV1CertificatesCargoIdFilenameDeleteData, DeleteFileApiV1CertificatesCargoIdFilenameDeleteError, DeleteFileApiV1CertificatesCargoIdFilenameDeleteResponse, UploadFileApiV1DeliveryCargoIdPostData, UploadFileApiV1DeliveryCargoIdPostError, UploadFileApiV1DeliveryCargoIdPostResponse, GetFilesApiV1DeliveryCargoIdGetData, GetFilesApiV1DeliveryCargoIdGetError, GetFilesApiV1DeliveryCargoIdGetResponse, UploadMultipleFilesApiV1DeliveryCargoIdMultiplePostData, UploadMultipleFilesApiV1DeliveryCargoIdMultiplePostError, UploadMultipleFilesApiV1DeliveryCargoIdMultiplePostResponse, GetFileApiV1DeliveryCargoIdFilenameGetData, GetFileApiV1DeliveryCargoIdFilenameGetError, GetFileApiV1DeliveryCargoIdFilenameGetResponse, DeleteFileApiV1DeliveryCargoIdFilenameDeleteData, DeleteFileApiV1DeliveryCargoIdFilenameDeleteError, DeleteFileApiV1DeliveryCargoIdFilenameDeleteResponse, RootGetError, RootGetResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Upload File
 */
export const uploadFileApiV1ImagesVinCodePost = <ThrowOnError extends boolean = false>(options: Options<UploadFileApiV1ImagesVinCodePostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileApiV1ImagesVinCodePostResponse, UploadFileApiV1ImagesVinCodePostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/images/{vin_code}/'
    });
};

/**
 * Get Files
 */
export const getFilesApiV1ImagesVinCodeGet = <ThrowOnError extends boolean = false>(options: Options<GetFilesApiV1ImagesVinCodeGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFilesApiV1ImagesVinCodeGetResponse, GetFilesApiV1ImagesVinCodeGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/images/{vin_code}/'
    });
};

/**
 * Upload Multiple Files
 */
export const uploadMultipleFilesApiV1ImagesVinCodeMultiplePost = <ThrowOnError extends boolean = false>(options: Options<UploadMultipleFilesApiV1ImagesVinCodeMultiplePostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadMultipleFilesApiV1ImagesVinCodeMultiplePostResponse, UploadMultipleFilesApiV1ImagesVinCodeMultiplePostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/images/{vin_code}/multiple/'
    });
};

/**
 * Get Download Zip
 */
export const getDownloadZipApiV1ImagesDownloadZipVinCodeGet = <ThrowOnError extends boolean = false>(options: Options<GetDownloadZipApiV1ImagesDownloadZipVinCodeGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetDownloadZipApiV1ImagesDownloadZipVinCodeGetResponse, GetDownloadZipApiV1ImagesDownloadZipVinCodeGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/images/download-zip/{vin_code}/'
    });
};

/**
 * Get File
 */
export const getFileApiV1ImagesVinCodeFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFileApiV1ImagesVinCodeFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFileApiV1ImagesVinCodeFilenameGetResponse, GetFileApiV1ImagesVinCodeFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/images/{vin_code}/{filename}/'
    });
};

/**
 * Delete File
 */
export const deleteFileApiV1ImagesVinCodeFilenameDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteFileApiV1ImagesVinCodeFilenameDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteFileApiV1ImagesVinCodeFilenameDeleteResponse, DeleteFileApiV1ImagesVinCodeFilenameDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/images/{vin_code}/{filename}/'
    });
};

/**
 * Upload File Duty
 */
export const uploadFileDutyApiV1DutiesCargoIdPost = <ThrowOnError extends boolean = false>(options: Options<UploadFileDutyApiV1DutiesCargoIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileDutyApiV1DutiesCargoIdPostResponse, UploadFileDutyApiV1DutiesCargoIdPostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/duties/{cargo_id}/'
    });
};

/**
 * Get File Duty
 */
export const getFileDutyApiV1DutiesCargoIdFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFileDutyApiV1DutiesCargoIdFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFileDutyApiV1DutiesCargoIdFilenameGetResponse, GetFileDutyApiV1DutiesCargoIdFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/duties/{cargo_id}/{filename}/'
    });
};

/**
 * Upload File
 */
export const uploadFileApiV1CargoDocsCargoIdPost = <ThrowOnError extends boolean = false>(options: Options<UploadFileApiV1CargoDocsCargoIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileApiV1CargoDocsCargoIdPostResponse, UploadFileApiV1CargoDocsCargoIdPostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/cargo-docs/{cargo_id}/'
    });
};

/**
 * Get Files
 */
export const getFilesApiV1CargoDocsCargoIdGet = <ThrowOnError extends boolean = false>(options: Options<GetFilesApiV1CargoDocsCargoIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFilesApiV1CargoDocsCargoIdGetResponse, GetFilesApiV1CargoDocsCargoIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo-docs/{cargo_id}/'
    });
};

/**
 * Upload Multiple Files
 */
export const uploadMultipleFilesApiV1CargoDocsCargoIdMultiplePost = <ThrowOnError extends boolean = false>(options: Options<UploadMultipleFilesApiV1CargoDocsCargoIdMultiplePostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadMultipleFilesApiV1CargoDocsCargoIdMultiplePostResponse, UploadMultipleFilesApiV1CargoDocsCargoIdMultiplePostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/cargo-docs/{cargo_id}/multiple/'
    });
};

/**
 * Get File
 */
export const getFileApiV1CargoDocsCargoIdFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFileApiV1CargoDocsCargoIdFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFileApiV1CargoDocsCargoIdFilenameGetResponse, GetFileApiV1CargoDocsCargoIdFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo-docs/{cargo_id}/{filename}/'
    });
};

/**
 * Delete File
 */
export const deleteFileApiV1CargoDocsCargoIdFilenameDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteFileApiV1CargoDocsCargoIdFilenameDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteFileApiV1CargoDocsCargoIdFilenameDeleteResponse, DeleteFileApiV1CargoDocsCargoIdFilenameDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/cargo-docs/{cargo_id}/{filename}/'
    });
};

/**
 * Upload File Invoice
 */
export const uploadFileInvoiceApiV1InvoicesCargoIdPost = <ThrowOnError extends boolean = false>(options: Options<UploadFileInvoiceApiV1InvoicesCargoIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileInvoiceApiV1InvoicesCargoIdPostResponse, UploadFileInvoiceApiV1InvoicesCargoIdPostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/invoices/{cargo_id}/'
    });
};

/**
 * Get File Invoice
 */
export const getFileInvoiceApiV1InvoicesCargoIdFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFileInvoiceApiV1InvoicesCargoIdFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFileInvoiceApiV1InvoicesCargoIdFilenameGetResponse, GetFileInvoiceApiV1InvoicesCargoIdFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/invoices/{cargo_id}/{filename}'
    });
};

/**
 * Upload File Payment
 */
export const uploadFilePaymentApiV1PaymentsPost = <ThrowOnError extends boolean = false>(options: Options<UploadFilePaymentApiV1PaymentsPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFilePaymentApiV1PaymentsPostResponse, UploadFilePaymentApiV1PaymentsPostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/payments/'
    });
};

/**
 * Get File Payment
 */
export const getFilePaymentApiV1PaymentsDealerFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFilePaymentApiV1PaymentsDealerFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFilePaymentApiV1PaymentsDealerFilenameGetResponse, GetFilePaymentApiV1PaymentsDealerFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/dealer/{filename}'
    });
};

/**
 * Get File Payment
 */
export const getFilePaymentApiV1PaymentsAccountantUserIdFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFilePaymentApiV1PaymentsAccountantUserIdFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFilePaymentApiV1PaymentsAccountantUserIdFilenameGetResponse, GetFilePaymentApiV1PaymentsAccountantUserIdFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/payments/accountant/{user_id}/{filename}'
    });
};

/**
 * Upload File Container
 */
export const uploadFileContainerApiV1ContainersPost = <ThrowOnError extends boolean = false>(options: Options<UploadFileContainerApiV1ContainersPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileContainerApiV1ContainersPostResponse, UploadFileContainerApiV1ContainersPostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/containers/'
    });
};

/**
 * Get File Container
 */
export const getFileContainerApiV1ContainersFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFileContainerApiV1ContainersFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFileContainerApiV1ContainersFilenameGetResponse, GetFileContainerApiV1ContainersFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/containers/{filename}/'
    });
};

/**
 * Upload File
 */
export const uploadFileApiV1PortImagesCargoIdPost = <ThrowOnError extends boolean = false>(options: Options<UploadFileApiV1PortImagesCargoIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileApiV1PortImagesCargoIdPostResponse, UploadFileApiV1PortImagesCargoIdPostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/port-images/{cargo_id}/'
    });
};

/**
 * Get Files
 */
export const getFilesApiV1PortImagesCargoIdGet = <ThrowOnError extends boolean = false>(options: Options<GetFilesApiV1PortImagesCargoIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFilesApiV1PortImagesCargoIdGetResponse, GetFilesApiV1PortImagesCargoIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/port-images/{cargo_id}/'
    });
};

/**
 * Upload Multiple Files
 */
export const uploadMultipleFilesApiV1PortImagesCargoIdMultiplePost = <ThrowOnError extends boolean = false>(options: Options<UploadMultipleFilesApiV1PortImagesCargoIdMultiplePostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadMultipleFilesApiV1PortImagesCargoIdMultiplePostResponse, UploadMultipleFilesApiV1PortImagesCargoIdMultiplePostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/port-images/{cargo_id}/multiple/'
    });
};

/**
 * Get Download Zip
 */
export const getDownloadZipApiV1PortImagesDownloadZipCargoIdGet = <ThrowOnError extends boolean = false>(options: Options<GetDownloadZipApiV1PortImagesDownloadZipCargoIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetDownloadZipApiV1PortImagesDownloadZipCargoIdGetResponse, GetDownloadZipApiV1PortImagesDownloadZipCargoIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/port-images/download-zip/{cargo_id}/'
    });
};

/**
 * Get File
 */
export const getFileApiV1PortImagesCargoIdFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFileApiV1PortImagesCargoIdFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFileApiV1PortImagesCargoIdFilenameGetResponse, GetFileApiV1PortImagesCargoIdFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/port-images/{cargo_id}/{filename}/'
    });
};

/**
 * Delete File
 */
export const deleteFileApiV1PortImagesCargoIdFilenameDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteFileApiV1PortImagesCargoIdFilenameDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteFileApiV1PortImagesCargoIdFilenameDeleteResponse, DeleteFileApiV1PortImagesCargoIdFilenameDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/port-images/{cargo_id}/{filename}/'
    });
};

/**
 * Upload File
 */
export const uploadFileApiV1CertificatesCargoIdPost = <ThrowOnError extends boolean = false>(options: Options<UploadFileApiV1CertificatesCargoIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileApiV1CertificatesCargoIdPostResponse, UploadFileApiV1CertificatesCargoIdPostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/certificates/{cargo_id}/'
    });
};

/**
 * Get Files
 */
export const getFilesApiV1CertificatesCargoIdGet = <ThrowOnError extends boolean = false>(options: Options<GetFilesApiV1CertificatesCargoIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFilesApiV1CertificatesCargoIdGetResponse, GetFilesApiV1CertificatesCargoIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/certificates/{cargo_id}/'
    });
};

/**
 * Upload Multiple Files
 */
export const uploadMultipleFilesApiV1CertificatesCargoIdMultiplePost = <ThrowOnError extends boolean = false>(options: Options<UploadMultipleFilesApiV1CertificatesCargoIdMultiplePostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadMultipleFilesApiV1CertificatesCargoIdMultiplePostResponse, UploadMultipleFilesApiV1CertificatesCargoIdMultiplePostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/certificates/{cargo_id}/multiple/'
    });
};

/**
 * Get File
 */
export const getFileApiV1CertificatesCargoIdFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFileApiV1CertificatesCargoIdFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFileApiV1CertificatesCargoIdFilenameGetResponse, GetFileApiV1CertificatesCargoIdFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/certificates/{cargo_id}/{filename}/'
    });
};

/**
 * Delete File
 */
export const deleteFileApiV1CertificatesCargoIdFilenameDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteFileApiV1CertificatesCargoIdFilenameDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteFileApiV1CertificatesCargoIdFilenameDeleteResponse, DeleteFileApiV1CertificatesCargoIdFilenameDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/certificates/{cargo_id}/{filename}/'
    });
};

/**
 * Upload File
 */
export const uploadFileApiV1DeliveryCargoIdPost = <ThrowOnError extends boolean = false>(options: Options<UploadFileApiV1DeliveryCargoIdPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileApiV1DeliveryCargoIdPostResponse, UploadFileApiV1DeliveryCargoIdPostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/delivery/{cargo_id}/'
    });
};

/**
 * Get Files
 */
export const getFilesApiV1DeliveryCargoIdGet = <ThrowOnError extends boolean = false>(options: Options<GetFilesApiV1DeliveryCargoIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFilesApiV1DeliveryCargoIdGetResponse, GetFilesApiV1DeliveryCargoIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/delivery/{cargo_id}/'
    });
};

/**
 * Upload Multiple Files
 */
export const uploadMultipleFilesApiV1DeliveryCargoIdMultiplePost = <ThrowOnError extends boolean = false>(options: Options<UploadMultipleFilesApiV1DeliveryCargoIdMultiplePostData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadMultipleFilesApiV1DeliveryCargoIdMultiplePostResponse, UploadMultipleFilesApiV1DeliveryCargoIdMultiplePostError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v1/delivery/{cargo_id}/multiple/'
    });
};

/**
 * Get File
 */
export const getFileApiV1DeliveryCargoIdFilenameGet = <ThrowOnError extends boolean = false>(options: Options<GetFileApiV1DeliveryCargoIdFilenameGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetFileApiV1DeliveryCargoIdFilenameGetResponse, GetFileApiV1DeliveryCargoIdFilenameGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/delivery/{cargo_id}/{filename}/'
    });
};

/**
 * Delete File
 */
export const deleteFileApiV1DeliveryCargoIdFilenameDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteFileApiV1DeliveryCargoIdFilenameDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteFileApiV1DeliveryCargoIdFilenameDeleteResponse, DeleteFileApiV1DeliveryCargoIdFilenameDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/delivery/{cargo_id}/{filename}/'
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