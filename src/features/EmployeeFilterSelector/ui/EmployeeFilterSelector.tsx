import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'react-select';
import { EmployeeJobTitle } from 'entities/Employee';

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
                label: 'Все',
            },
            {
                value: EmployeeJobTitle.COOK,
                label: 'Повар',
            },
            {
                value: EmployeeJobTitle.DRIVER,
                label: 'Водитель',
            },
            {
                value: EmployeeJobTitle.WAITER,
                label: 'Писатель',
            },
        ];

        return (
            <div className={classNames('', {}, [className])}>
                <Select
                    placeholder={'Должность'}
                    defaultValue={typeOptions[0]}
                    options={typeOptions}
                    onChange={(value) =>
                        value && onChangeType(value.value as EmployeeJobTitle)
                    }
                />
            </div>
        );
    },
);
