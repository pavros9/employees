import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { EmployeeJobTitle } from 'entities/Employee';
import { Select } from 'shared/ui/Select/Select';

interface EmployeeFilterSelectorProps {
    className?: string;
    type: EmployeeJobTitle;
    onChangeType: (newType: EmployeeJobTitle) => void;
}

export const EmployeeFilterSelector = memo(
    (props: EmployeeFilterSelectorProps) => {
        const { className, onChangeType, type } = props;

        const typeOptions = [
            {
                value: EmployeeJobTitle.ALL,
                content: 'Все',
            },
            {
                value: EmployeeJobTitle.COOK,
                content: 'Повар',
            },
            {
                value: EmployeeJobTitle.DRIVER,
                content: 'Водитель',
            },
            {
                value: EmployeeJobTitle.WAITER,
                content: 'Официант',
            },
        ];

        return (
            <div className={classNames('', {}, [className])}>
                <Select
                    className="min-w-[300px]"
                    placeholder="Должность"
                    value={typeOptions[0].value}
                    options={typeOptions}
                    onChange={onChangeType}
                />
            </div>
        );
    },
);
