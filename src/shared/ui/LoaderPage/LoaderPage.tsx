import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from '../Loader/Loader';
import cls from './LoaderPage.module.scss';

export const LoaderPage = () => {
    return (
        <div
            className={classNames(
                'w-full h-full mx-auto absolute top-[64px] left-0 flex items-center justify-center',
                {},
                [cls.wrapperLoader],
            )}
        >
            <Loader />
        </div>
    );
};
