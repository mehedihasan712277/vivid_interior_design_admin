export interface AboutType {
    _id?: string;
    img: string;
    short_descripton: string;
    full_descripton: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ServiceType {
    _id?: string;
    title: string;
    subtitle: string;
    type: string;
    img: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface CategoryType {
    _id?: string; // MongoDB ObjectId
    name: string;
    services: ServiceType[]; // Array of populated Service objects
    createdAt?: string; // Timestamp added by mongoose
    updatedAt?: string; // Timestamp added by mongoose
}

