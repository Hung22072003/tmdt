import React from 'react';
import video from '../assets/video1.mp4';
const AboutUs = () => {
    const descriptions = [
        'Mây Việt khởi nguồn từ niềm đam mê với vẻ đẹp tự nhiên và sự khéo léo của đôi bàn tay người Việt. Trên những cánh đồng trải dài của các làng nghề truyền thống, những người thợ tài hoa đã dệt nên từng sợi mây, nứa, tre từ bao đời nay. Mây Việt ra đời với mong muốn không chỉ làm đẹp không gian sống mà còn truyền tải tinh hoa của những làng nghề Việt, mang những sản phẩm "dệt từ bàn tay" ấy đến với mọi người. Thương hiệu không chỉ là lời tri ân dành cho ông bà và các nghệ nhân trong làng, mà còn là một bước tiến để đưa nét đẹp của mây tre Việt Nam vào cuộc sống hiện đại, kết nối quá khứ với tương lai.',
        'Sản phẩm của Mây Việt không chỉ là những món đồ nội thất đơn thuần mà còn chứa đựng câu chuyện của làng nghề, của từng bàn tay người thợ. Chúng tôi lựa chọn vật liệu tự nhiên, thân thiện với môi trường, với quy trình sản xuất nghiêm ngặt để đảm bảo từng sản phẩm không chỉ bền mà còn có hồn.',
    ];
    return (
        <div className="py-[40px]">
            <div className="mb-[40px]">
                <div className="text-[24px] font-semibold">Thương hiệu "MÂY VIỆT"</div>
                <hr className="mt-[16px] text-[#e2e2e2]" />
            </div>

            <div className="grid grid-cols-[30%_70%]">
                <div>
                    <video src={video} loop autoPlay muted />
                </div>

                <div className="ml-[48px]">
                    <div className="text-[18px] font-bold">🎋 Câu chuyện khởi nguồn nên xưởng mây tre</div>
                    <ul className="pl-[24px]">
                        {descriptions.map((item, index) => (
                            <li key={index} className="mt-[12px] list-disc text-[18px]">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-[18px] text-center text-[24px] font-bold uppercase">
                        Các sản phẩm nổi bật tại MÂY VIỆT
                    </div>

                    <p className="my-[12px] text-[18px]">
                        <strong>🎋 Xưởng MÂY VIỆT</strong> cung cấp đa dạng sản phẩm mây tre như: Bàn ghế mây, sofa mây,
                        xích đu mây, giường tre, kệ tre, đèn mây tre,… và các vật dụng trang trí nhà cửa, decor phòng,
                        được làm từ chất liệu tự nhiên như: song mây, tre, lồ ô, lục bình, cói, sợi ngô, lá cọ, lá
                        buông, lùng,…&nbsp; là sự lựa chọn tốt đẹp mang xu hướng bền vững hiện nay.
                    </p>

                    <p className="my-[12px] text-[18px]">
                        <strong>🎋 Ghế Papasan (Ghế Mây Tròn)</strong> độc đáo, bắt mắt từ thiết kế với màu nệm vô cùng
                        đa dạng. Là điểm nhấn nổi bật nơi không gian, thư giãn khi sử dụng cùng những công năng, giá trị
                        sử dụng khác nhau.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
