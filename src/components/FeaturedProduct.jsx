import React from 'react';
import product_2 from '../assets/product_2.jpg';
import product_3 from '../assets/product_3.jpg';
import product_4 from '../assets/product_4.jpg';
import product_5 from '../assets/product_5.jpg';
import product_6 from '../assets/product_6.jpg';
import product_7 from '../assets/product_7.jpg';

const FeaturedProduct = () => {
    return (
        <div className="py-[40px]">
            <div className="mb-[40px]">
                <div className="text-[24px] font-semibold">Sản phẩm nổi bật</div>
                <hr className="mt-[16px] text-[#e2e2e2]" />
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-[8px]">
                <img src={product_2} />
                <img src={product_3} />
                <img src={product_4} />
                <img src={product_5} />
                <img src={product_6} />
                <img src={product_7} />
            </div>
        </div>
    );
};

export default FeaturedProduct;
