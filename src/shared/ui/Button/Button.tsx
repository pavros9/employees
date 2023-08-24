import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    icon?: string;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const { text, icon, className, ...otherProps } = props;
    return (
        <button
            className={classNames('flex items-center', {}, [className])}
            {...otherProps}
        >
            {text}
            {icon && <img src={icon} alt={text} />}
        </button>
    );
};
