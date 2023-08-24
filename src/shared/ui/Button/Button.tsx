import { classNames } from 'shared/lib/classNames/classNames';

interface ButtonProps {
    text: string;
    icon?: string;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const { text, icon, className } = props;
    return (
        <button className={classNames('flex items-center', {}, [className])}>
            {text}
            {icon && <img src={icon} alt={text} />}
        </button>
    );
};
