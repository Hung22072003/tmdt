import React from 'react';
import background from '../assets/background.webp';
const Background = () => {
    return (
        <div className="bg-custom-gradient flex min-h-[85vh] flex-col items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat">
            <div className="flex flex-col items-center justify-center">
                <h1 className="mx-auto block w-[75%] border-b-[1px] border-white pb-[8px] text-center text-[64px] font-semibold uppercase text-white">
                    Tinh hoa tự nhiên từ làng quê việt
                </h1>
                <button className="mt-[32px] min-h-[56px] cursor-pointer bg-white px-[32px] py-[8px] text-[18px] font-bold">
                    Mua ngay
                </button>
            </div>
        </div>
    );
};

export default Background;
