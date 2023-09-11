import React, { useEffect } from 'react';
import Arrow from 'shared/assets/icons/arrow.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    usePagination,
    DOTS,
} from 'shared/lib/hooks/usePagination.ts/usePagination';

interface PaginationProps {
    onPageChange: (number: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className: string;
}

export const Pagination = (props: PaginationProps) => {
    const {
        className,
        currentPage,
        onPageChange,
        pageSize,
        siblingCount = 1,
        totalCount,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage =
        paginationRange && paginationRange[paginationRange.length - 1];

    return (
        <div className="flex items-center justify-center bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-center sm:hidden">
                <button
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                    className={classNames(
                        'relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700',
                        {},
                        [
                            currentPage === 1
                                ? 'bg-slate-200'
                                : 'hover:bg-gray-50 cursor-pointer',
                        ],
                    )}
                >
                    <Arrow
                        transform="rotate(180)"
                        width={'30px'}
                        height={'30px'}
                    />
                </button>
                <button
                    onClick={onNext}
                    disabled={currentPage === lastPage}
                    className={classNames(
                        'relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700',
                        {},
                        [
                            currentPage === lastPage
                                ? 'bg-slate-200'
                                : 'hover:bg-gray-50 cursor-pointer',
                        ],
                    )}
                >
                    <Arrow width={'30px'} height={'30px'} />
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <button
                            disabled={currentPage === 1}
                            onClick={onPrevious}
                            className={classNames(
                                'relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0',
                                {},
                                [
                                    currentPage === 1
                                        ? 'bg-slate-200'
                                        : 'hover:bg-gray-50 cursor-pointer',
                                ],
                            )}
                        >
                            <span className="sr-only">Предыдущая</span>
                            <Arrow
                                transform="rotate(180)"
                                width={'30px'}
                                height={'30px'}
                            />
                        </button>
                        {paginationRange?.map((pageNumber) => {
                            if (pageNumber === DOTS) {
                                return (
                                    <li
                                        key={pageNumber}
                                        className="pagination-item dots"
                                    >
                                        &#8230;
                                    </li>
                                );
                            }

                            return (
                                <React.Fragment key={pageNumber}>
                                    <button
                                        className={classNames(
                                            'pagination-item  cursor-pointer relative inline-flex items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0',
                                            {},
                                            [
                                                pageNumber === currentPage
                                                    ? 'bg-indigo-500 text-white font-bold'
                                                    : 'hover:bg-gray-50',
                                            ],
                                        )}
                                        onClick={() =>
                                            onPageChange(Number(pageNumber))
                                        }
                                    >
                                        {pageNumber}
                                    </button>
                                </React.Fragment>
                            );
                        })}
                        <button
                            onClick={onNext}
                            disabled={currentPage === lastPage}
                            className={classNames(
                                'relative  inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0',
                                {},
                                [
                                    currentPage === lastPage
                                        ? 'bg-slate-200'
                                        : 'hover:bg-gray-50 cursor-pointer',
                                ],
                            )}
                        >
                            <span className="sr-only">Next</span>
                            <Arrow width={'30px'} height={'30px'} />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};
