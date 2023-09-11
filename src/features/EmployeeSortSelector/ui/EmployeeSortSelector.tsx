import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types/sort';
import { EmployeeSortField } from 'entities/Employee';
import { Select, SelectOption } from 'shared/ui/Select/Select';

interface EmployeeSortSelectorProps {
    className?: string;
    sort: EmployeeSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: EmployeeSortField) => void;
}

export const EmployeeSortSelector = memo((props: EmployeeSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: 'возрастанию',
            },
            {
                value: 'desc',
                content: 'убыванию',
            },
        ],
        [],
    );

    const sortFieldOptions = useMemo<SelectOption<EmployeeSortField>[]>(
        () => [
            {
                value: EmployeeSortField.CREATED,
                content: 'дате рождения',
            },
            {
                value: EmployeeSortField.NAME,
                content: 'имени',
            },
        ],
        [],
    );

    return (
        <div className={classNames('', {}, [className])}>
            <Select
                options={sortFieldOptions}
                className="mb-7"
                label={'Сортировать ПО'}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={'по'}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
