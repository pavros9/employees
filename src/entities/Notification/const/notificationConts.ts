import { notificationType } from '../model/types/types';

export enum NotificationType {
    ERROR = 'error',
    ACCESS = 'access',
    CANCEL = 'cancel',
}

export const NotificationTypeTranslation: Record<notificationType, string> = {
    [NotificationType.ACCESS]: 'Успешно',
    [NotificationType.CANCEL]: 'Отмена',
    [NotificationType.ERROR]: 'Ошибка',
};
