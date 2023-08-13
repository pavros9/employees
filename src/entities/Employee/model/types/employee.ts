export interface Employee {
    id?: number;
    name?: string;
    isArchive?: boolean;
    role?: string;
    phone?: string;
    birthday?: string;
}

export type JobTitle = 'driver' | 'waiter' | 'cook';
