import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(true);

    const toggleButtonMenu = () => {
        setOpenMenu((prev) => !prev);
    };

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={toggleButtonMenu}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Открыть меню</span>

                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `text-white rounded-md px-3 py-2 text-sm font-medium ${
                                            isActive
                                                ? 'text-orange-400 bg-gray-900'
                                                : ''
                                        }`
                                    }
                                >
                                    Работники
                                </NavLink>
                                <NavLink
                                    to="/settings"
                                    className={({ isActive }) =>
                                        `text-white rounded-md px-3 py-2 text-sm font-medium ${
                                            isActive
                                                ? 'text-orange-400 bg-gray-900'
                                                : ''
                                        }`
                                    }
                                >
                                    Настройка
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={classNames(
                    'sm:hidden transition-height duration-500 ease-in-out overflow-hidden',
                    {},
                    [openMenu ? 'h-32' : 'h-0'],
                )}
                id="mobile-menu"
            >
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-white block rounded-md px-3 py-2 text-sm font-medium ${
                                isActive ? 'text-orange-400 bg-gray-900' : ''
                            }`
                        }
                    >
                        Работники
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `text-white block rounded-md px-3 py-2 text-sm font-medium ${
                                isActive ? 'text-orange-400 bg-gray-900' : ''
                            }`
                        }
                    >
                        Настройка
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
