import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: string;
    className?: string;
    children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { text, children, icon, className, ...otherProps } = props;
    return (
        <button
            className={classNames('flex items-center', {}, [className])}
            {...otherProps}
        >
            {text}
            {icon && <img src={icon} alt={text} />}
            {children}
        </button>
    );
};
