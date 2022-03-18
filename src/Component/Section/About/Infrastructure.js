import React from 'react'
import { InfraSlide1, InfraSlide2, InfraSlide3, InfraSlide4, InfraSlide5, InfraSlide6 } from '../../../Resouces/Img'

function Infrastructure() {
  return (
    <div className="p-5 text-secondary">
      <div className="container">
        <div>
          <div id="carouselExampleControls" className="carousel slide mb-4" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={InfraSlide1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={InfraSlide2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={InfraSlide3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item active">
                <img src={InfraSlide4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={InfraSlide5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={InfraSlide6} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <p className="text-justify">
          Tại DHT, chúng tôi tuân theo ngôn ngữ thiết kế được xây dựng chu đáo cho cơ sở hạ tầng mầm non, mang tới sự kết hợp hoàn hảo giữa phong cách,
          thẩm mĩ, độ tin cậy, sự thân thiện với trẻ và chức năng. Trường mầm non của chúng tôi tuân theo phương pháp thiết kế cơ sở vật chất mầm non
          lấy trẻ làm trung tâm, mang tới một môi trường an toàn về vệ sinh, thích hợp cho sự phát triển toàn diện của trẻ.
        </p>
        <p className="text-justify">
          Cơ sở của chúng tôi bao gồm không gian hấp dẫn đầy cảm hứng với diện tích hơn 1700m2. Được thiết kế đặc trưng phù hợp với trẻ, các trang thiết
          bị hiện đại, đồ nội thất, đồ chơi với kích cỡ phù hợp với sự phát triển trí tuệ và thể chất của trẻ. Điều này được hỗ trợ bởi sự phối hợp giữa
          chất lượng giảng dạy và giáo cụ học đường để đảm bảo sự phát triển toàn diện của mỗi trẻ.
        </p>
        <h6 className="mt-4 font-italic">Điểm nhấn của cơ sở vật chất tại trường mầm non DHT:</h6>
        <p className="text-justify">
          - Phòng học rộng rãi, nhiều ánh sáng tự nhiên, mang đến sự linh hoạt phù hợp với mọi hoạt động.
        </p>
        <p className="text-justify">
          - Phòng đa giác quan giúp trẻ dễ dàng trải nghiệm.
        </p>
        <p className="text-justify">
          - Không gian đa năng mở với khu vui chơi trong nhà, khu vực dành riêng cho các hoạt động ca hát, diễn kịch, làm đồ thủ công, âm nhạc, nhảy và
          nhiều hoạt động khác.
        </p>
        <p className="text-justify">
          - Công nghệ được sử dụng làm phong phú môi trường học với các trang thiết bị như iPads và bảng tương tác nhằm truyền cảm hứng, tập sáng tạo,
          tăng năng suất và tính hiệu quả trong học tập.
        </p>
        <p className="text-justify">
          - Không gian ấm cúng và thoải mái nhằm đẩy mạnh tương tác cộng đồng và các buổi thảo luận.
        </p>
        <h6 className="mt-4 font-italic">Ngoài ra chúng tôi còn đặc biệt chú ý tới:</h6>
        <p className="text-justify">
          - Ánh sáng phù hợp.
        </p>
        <p className="text-justify">
          - Chất lượng không khí sạch sẽ và thoải mái.
        </p>
        <p className="text-justify">
          - An toàn và bảo mật.
        </p>
        <p className="text-justify">
          - Âm thanh.
        </p>
        <p className="text-justify">
          - Thói quen sạch sẽ và vệ sinh.
        </p>
        <p className="text-justify">
          - Màu sắc và hình khối tăng cường học tập và cảm giác hạnh phúc.
        </p>
        <p className="text-justify">
          - Không gian giám sát và hợp tác.
        </p>
      </div>
    </div>
  )
}

export default Infrastructure