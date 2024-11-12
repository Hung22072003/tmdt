import React, { useState } from 'react';
import logo from '../assets/logo.png';
const Header = () => {
    const [navId, setNavId] = useState(1);
    const navList = [
        {
            id: 1,
            name: 'Trang chủ',
        },
        {
            id: 2,
            name: 'Cửa hàng',
        },
    ];
    return (
        <div className="mx-auto max-w-[1280px] py-[10px]">
            <div className="flex items-center justify-between px-[24px]">
                <div>
                    <img className="h-[60px]" src={logo} />
                </div>

                <div className="flex items-center pb-[4px]">
                    <ul className="flex items-center">
                        {navList.map((item) => (
                            <li
                                className={`mx-[16px] cursor-pointer text-[18px] hover:border-primaryColor hover:text-primaryColor ${item.id === navId && 'border-b-[1px] border-black'}`}
                                key={item.id}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <div className="mx-[16px] h-[18px] w-[1px] border-[1px] border-black"></div>
                    <div className="flex items-center gap-[16px]">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6 cursor-pointer hover:text-primaryColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6 cursor-pointer hover:text-primaryColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6 cursor-pointer hover:text-primaryColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
