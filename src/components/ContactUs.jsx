import React from 'react';

const ContactUs = () => {
    return (
        <div className="py-[40px]">
            <div className="mb-[40px]">
                <div className="text-[24px] font-semibold">Liên hệ</div>
                <hr className="mt-[16px] text-[#e2e2e2]" />
            </div>

            <div className="grid grid-cols-2 gap-[32px]">
                <form action="">
                    <h4 className="mb-[24px] text-[24px] font-semibold">
                        Để lại thông tin, chúng tôi sẽ liên lạc và tư vấn cho bạn
                    </h4>
                    <div className="mb-[24px]">
                        <input
                            className="w-[100%] border-[1px] border-[#e2e2e2] px-[16px] py-[10px] text-[18px] outline-none"
                            placeholder="Họ và tên"
                        />
                    </div>
                    <div className="mb-[24px]">
                        <input
                            className="w-[100%] border-[1px] border-[#e2e2e2] px-[16px] py-[10px] text-[18px] outline-none"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-[24px]">
                        <input
                            className="w-[100%] border-[1px] border-[#e2e2e2] px-[16px] py-[10px] text-[18px] outline-none"
                            placeholder="Số điện thoại"
                        />
                    </div>
                    <div className="mb-[24px]">
                        <textarea
                            placeholder="Lời nhắn"
                            className="h-[120px] w-[100%] resize-y border-[1px] border-[#e2e2e2] p-[16px] text-[18px] outline-none"
                        />
                    </div>
                    <button className="w-[100%] bg-black px-[32px] py-[12px] text-center text-[18px] text-white">
                        Gửi
                    </button>
                </form>

                <div>
                    <h4 className="mb-[24px] text-[24px] font-semibold">
                        Tư vấn miễn phí tại tất cả các cơ sở trên cả nước
                    </h4>
                    <p className="mb-[24px] text-[18px] text-[#5e5e5e]">
                        Hãy đến với cửa hàng của chúng tôi để trực tiếp trải nghiệm chất lượng và vẻ đẹp tự nhiên của
                        từng sản phẩm Mây Việt! Không gian trưng bày ấm cúng, phong cách độc đáo sẽ giúp bạn hình dung
                        rõ hơn về cách sản phẩm nội thất hòa quyện vào ngôi nhà của mình.
                    </p>

                    <p className="mb-[24px] text-[18px]">
                        <strong>Thời gian mở cửa: </strong>
                        <span className="text-[#5e5e5e]">
                            Các ngày trong tuần từ 8 giờ đến 21 giờ. Thứ bảy và chủ nhật từ 9 giờ đến 21 giờ.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
