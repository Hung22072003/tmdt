import React from 'react';
import material_1 from '../assets/material_1.png';
import material_2 from '../assets/material_2.jpeg';
import material_3 from '../assets/material_3.png';
import material_4 from '../assets/material_4.png';
import material_5 from '../assets/material_5.png';
import material_6 from '../assets/material_6.png';
import material_7 from '../assets/material_7.png';
const Material = () => {
    const list_material = [
        {
            name: 'Song Mây',
            description:
                'Mây là một loại sợi tự nhiên bền và mạnh, thích hợp cho việc sảnxuất đồ thủ công và nội thất. Ở Việt Nam, mây mọc phổ biến ở các khu rừng núi, đặc biệt là vùng Tây Nguyên và miền núi phía Bắc.',
            image: material_1,
        },
        {
            name: 'Tre',
            description:
                'Tre thuộc một nhóm thực vật thân gỗ nhưng phần thân rỗng và được phân thành nhiều đốt. Theo tìm hiểu khoa học thù tre thuộc bộ hỏa thảo, tông tre – Bambuseae. Chưa xem xét về nguồn gốc nhưng tre đã gắn liền với đời sống người dân Việt Nam từ xưa đến nay. Có mặt từ phía Nam ra phía Bắc nên nguồn nguyên liệu này rất dồi dào.',
            image: material_2,
        },
        {
            name: 'Lục Bình',
            description:
                'Lục bình là một loại cỏ nước có tên khoa học là Cyperus papyrus, thường được sử dụng để làm thảm, giấy và các sản phẩm thủ công trang trí trong nhiều nền văn hóa truyền thống. ',
            image: material_3,
        },
        {
            name: 'Cói Tròn',
            description:
                'Cói được trồng và mọc hoang ở ven biển các tỉnh phía Bắc từ Quảng Ninh đến Thanh Hóa và dọc ven biển Nam Trung Bộ. Cói chủ yếu được sử dụng để làm túi, nón, làn, chiếu và các mặt hàng thủ công mỹ nghệ khác ',
            image: material_4,
        },
        {
            name: 'Gỗ Sồi',
            description:
                'Gỗ sồi có màu nâu đỏ đẹp, độ cứng và bền cao, nên rất phù hợp để sử dụng trong các ứng dụng nội thất, như làm đồ đạc, sàn nhà, cửa sổ, tủ, bàn ghế. ',
            image: material_5,
        },
        {
            name: 'Gỗ Tần Bì',
            description:
                'Gỗ tần bì là loại gỗ từ cây tần bì ở châu Âu, có màu sáng đẹp và vân gỗ mịn. Được ưa chuộng trong chế tác nội thất và trang trí nhờ tính chống mục và ổn định cao. ',
            image: material_6,
        },
        {
            name: 'Gỗ Thông',
            description:
                'Gỗ thông là một loại gỗ có nguồn gốc từ cây thông, phổ biến và được sử dụng rộng rãi trong ngành công nghiệp gỗ. Nó có tính năng dễ chế biến, nhẹ, và khá bền, nên thường được sử dụng trong xây dựng, làm đồ nội thất, và sản xuất vật liệu xây dựng. ',
            image: material_7,
        },
    ];
    return (
        <div className="py-[40px]">
            <div className="mb-[40px]">
                <div className="text-[24px] font-semibold">
                    <span className="text-primaryColor">Vật liệu sản xuất.</span> Chất liệu thân thiện với môi trường
                </div>
                <hr className="mt-[16px] text-[#e2e2e2]" />
            </div>

            <div className="scrollbar-hide flex flex-nowrap gap-[8px] overflow-x-auto scroll-smooth">
                {list_material.map((item, key) => (
                    <div
                        key={key}
                        className="flex-shrink-0 flex-grow-0 basis-[24%] overflow-hidden rounded-[8px] border-[1px] border-[#ebebeb] shadow-[0px_2px_10px_0px_rgba(106,106,106,0.2)]"
                    >
                        <div className="h-[275px]">
                            <img className="h-[100%] w-[100%] object-cover" src={item.image} />
                        </div>

                        <div className="p-[12px]">
                            <p className="mb-[12px] text-[24px] font-semibold text-primaryColor">{item.name}</p>
                            <span className="mb-[12px] line-clamp-3 text-justify text-[16px] text-[#6e6e73]">
                                {item.description}
                            </span>

                            <div className="flex items-center text-[16px] text-primaryColor">
                                <a className="mr-[8px] cursor-pointer font-semibold">Tìm hiểu thêm</a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11"
                                    height="10"
                                    viewBox="0 0 11 10"
                                    fill="none"
                                >
                                    <path
                                        d="M6.00678 9L9.90855 5.22291C10.0305 5.10526 10.0305 4.9195 9.90855 4.79566L6 1"
                                        stroke="#498536"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M8 5L1 5"
                                        stroke="#498536"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Material;
