import { Employee } from './employee';

export interface EmployeeSchema {
    isLoading: boolean;
    error?: string;
    data?: Employee[];
}
