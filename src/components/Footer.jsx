import React from 'react';
import tiktok from '../assets/tiktok.png';
const Footer = () => {
    return (
        <div className="border-t-[1px] border-[#e2e2e2]">
            <div className="mx-auto max-w-[1280px] px-[24px] py-[40px]">
                <div className="grid grid-cols-3 gap-[48px]">
                    <div>
                        <h1 className="mb-[24px] text-[18px] font-semibold">Thông tin liên hệ</h1>
                        <p className="mb-[16px] text-[18px] font-semibold">
                            MÂY VIỆT - Tinh hoa tự nhiên từ làng quê Việt
                        </p>
                        <p className="mb-[16px] text-[18px] font-semibold">
                            Không gian trải nghiệm sản phẩm trực tiếp:
                        </p>
                        <p className="mb-[16px] text-[16px]">
                            <strong>Cơ sở 1: </strong>
                            54 Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng
                        </p>
                        <p className="mb-[16px] text-[16px]">
                            <strong>Cơ sở 2: </strong>
                            03 An Dương Vương, An Cựu, Huế, Thừa Thiên Huế
                        </p>
                        <p className="mb-[16px] text-[18px] font-semibold">Xưởng sản xuất:</p>
                        <p className="mb-[16px] text-[16px]">
                            <strong>Nhà máy: </strong>
                            KCN Liên Chiểu, 61A Nguyễn Văn Cừ, Hòa Hiệp Bắc, Liên Chiểu, Đà Nẵng
                        </p>
                        <p className="mb-[16px] text-[18px]">Liên hệ mua hàng, đặt hàng, CSKH: 0966535573 (Zalo)</p>
                        <p className="mb-[16px] text-[18px]">Email: notthatmaytre.mayviet@gmail.com</p>
                    </div>

                    <div>
                        <h1 className="mb-[24px] text-[18px] font-semibold">Dịch vụ Mây Việt</h1>
                        <a className="mb-[16px] block cursor-pointer text-[16px] hover:font-semibold hover:text-primaryColor">
                            Chính sách bán hàng
                        </a>
                        <a className="mb-[16px] block cursor-pointer text-[16px] hover:font-semibold hover:text-primaryColor">
                            Dịch vụ giao hàng
                        </a>
                        <a className="mb-[16px] block cursor-pointer text-[16px] hover:font-semibold hover:text-primaryColor">
                            Dịch vụ thanh toán
                        </a>
                        <a className="mb-[16px] block cursor-pointer text-[16px] hover:font-semibold hover:text-primaryColor">
                            Dịch vụ tư vấn
                        </a>
                        <a className="mb-[16px] block cursor-pointer text-[16px] hover:font-semibold hover:text-primaryColor">
                            Chăm sóc khách hàng
                        </a>

                        <h1 className="mb-[24px] text-[18px] font-semibold">Thông tin</h1>
                        <a className="mb-[16px] block cursor-pointer text-[16px] hover:font-semibold hover:text-primaryColor">
                            Điều khoản dịch vụ
                        </a>
                        <a className="mb-[16px] block cursor-pointer text-[16px] hover:font-semibold hover:text-primaryColor">
                            Chính sách đổi trả
                        </a>
                        <a className="mb-[16px] block cursor-pointer text-[16px] hover:font-semibold hover:text-primaryColor">
                            Chính sách bảo mật
                        </a>
                    </div>
                    <div>
                        <h1 className="mb-[24px] text-[18px] font-semibold">Kết nối với Mây Việt</h1>

                        <ul className="flex items-center">
                            <li className="mr-[8px]">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61567839437743"
                                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#3B599A]"
                                >
                                    <i className={`fa fa-facebook text-white`} aria-hidden="true"></i>
                                </a>
                            </li>

                            <li className="mr-[8px]">
                                <a
                                    href="https://www.tiktok.com/@noithatmaytre.mayviet"
                                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
                                >
                                    <img className="h-[36px] w-[36px] text-white" src={tiktok} />
                                </a>
                            </li>

                            <li className="mr-[8px]">
                                <a
                                    href={`https://zalo.me/0966535573`}
                                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
                                >
                                    <img src="./src/assets/icon-zalo.png" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
