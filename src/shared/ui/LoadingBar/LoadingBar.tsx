import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoadingBar.module.scss';

interface LoadingBarProps {
    time?: number;
    className?: string;
    startLoad?: boolean;
}

export const LoadingBar = (props: LoadingBarProps) => {
    const { time, className, startLoad } = props;

    return (
        <div
            className={classNames('', { [cls.active]: startLoad }, [
                cls.progress,
            ])}
        ></div>
    );
};
