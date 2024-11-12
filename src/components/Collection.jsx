import React from 'react';
import collection_1 from '../assets/collection_1.png';
import collection_2 from '../assets/collection_2.png';
import collection_3 from '../assets/collection_3.png';
import collection_4 from '../assets/collection_4.png';
const Collection = () => {
    const collection = [
        {
            name: 'Phòng Ăn',
            image: collection_1,
        },
        {
            name: 'Phòng Ngủ',
            image: collection_2,
        },
        {
            name: 'Phòng Khách',
            image: collection_3,
        },
        {
            name: 'Ban Công, Sân Vườn',
            image: collection_4,
        },
    ];
    return (
        <div className="py-[40px]">
            <div className="mb-[40px]">
                <div className="text-[24px] font-semibold">
                    <span className="text-primaryColor">Mua sắm theo không gian.</span> Lựa chọn dễ dàng hơn!
                </div>
                <hr className="mt-[16px] text-[#e2e2e2]" />
            </div>

            <div className="grid grid-cols-4 gap-[8px]">
                {collection.map((item, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-[8px] border-[1px] border-[#ebebeb] shadow-[0px_2px_10px_0px_rgba(106,106,106,0.2)]"
                    >
                        <div className="w-[100%]">
                            <img src={item.image} />
                        </div>

                        <div className="mb-[24px] p-[12px]">
                            <p className="text-[24px] font-semibold text-primaryColor">{item.name}</p>
                            <a href="" className="text-[16px] text-[#6e6e73] hover:text-primaryColor">
                                Xem sản phẩm
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collection;
