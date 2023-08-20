export interface Employee {
    id?: number;
    isArchive?: boolean;
    role?: string;
    phone?: string;
    birthday?: string;
    firstName?: string;
    lastName?: string;
}

export type JobTitle = 'driver' | 'waiter' | 'cook';
