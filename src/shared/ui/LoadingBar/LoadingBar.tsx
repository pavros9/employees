import cls from './LoadingBar.module.scss';

interface LoadingBarProps {
    time?: number;
}

export const LoadingBar = (props: LoadingBarProps) => {
    const { time } = props;
    return (
        <div className={cls.wrapper}>
            <div className={cls.bar}></div>
        </div>
    );
};
