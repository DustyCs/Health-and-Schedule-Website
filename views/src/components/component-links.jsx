import { useState } from 'react'

const ComponentLinks = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Components links */}
            <div className="relative">
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); setOpen(!open); }}
                    className={`flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary ${open ? 'bg-primary-100 dark:bg-primary' : ''}`}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                >
                    <span aria-hidden="true">
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                        </svg>
                    </span>
                    <span className="ml-2 text-sm"> Schedule </span>
                    <span aria-hidden="true" className="ml-auto">
                        {/* active class 'rotate-180' */}
                        <svg
                            className={`w-4 h-4 transition-transform transform ${open ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </a>
                {open && (
                    <div className="mt-2 space-y-2 px-7" role="menu" aria-label="Components">
                        {/* active & hover classes 'text-gray-700 dark:text-light' */}
                        {/* inActive classes 'text-gray-400 dark:text-gray-400' */}
                        <a
                            href="#"
                            role="menuitem"
                            className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                        >
                            Alerts (soon)
                        </a>
                        <a
                            href="#"
                            role="menuitem"
                            className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                        >
                            Buttons (soon)
                        </a>
                        <a
                            href="#"
                            role="menuitem"
                            className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                        >
                            Cards (soon)
                        </a>
                        <a
                            href="#"
                            role="menuitem"
                            className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                        >
                            Dropdowns (soon)
                        </a>
                        <a
                            href="#"
                            role="menuitem"
                            className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                        >
                            Forms (soon)
                        </a>
                        <a
                            href="#"
                            role="menuitem"
                            className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                        >
                            Lists (soon)
                        </a>
                        <a
                            href="#"
                            role="menuitem"
                            className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                        >
                            Modals (soon)
                        </a>
                    </div>
                )}
            </div>
        </>
    );
};

export default ComponentLinks;
