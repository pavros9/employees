export interface Notification {
    type: string;
    message: string;
}

export type notificationType = 'error' | 'access' | 'cancel';
