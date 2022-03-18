import React from 'react'

function Contact() {
  return (
    <div className="bg-light d-flex flex-column justify-content-center align-items-center">
      <label className="display-5 p-5 font-weight-bold">LIÊN HỆ</label>
      <p>
        Bạn có câu hỏi hoặc bình luận cho chúng tôi, hãy gửi email hoặc gọi cho chúng tôi qua những thông tin bên dưới.
      </p>
      <div className="text-center" style={{width: 600}}>
        <div className="my-3 p-3" style={{ backgroundColor: '#F2F2F2' }}>
          <h4 className="text-secondary">ĐỊA CHỈ</h4>
          <p className="my-1 text-info">Tầng 2, Tòa nhà R4, Goldmark City, Số 136 Hồ Tùng Mậu, Hà Nội, Việt Nam</p>
        </div>
        <div className="my-3 p-3" style={{ backgroundColor: '#F2F2F2' }}>
          <h4 className="text-secondary">SỐ ĐIỆN THOẠI</h4>
          <p className="my-1 text-warning">0987654321</p>
        </div>
        <div className="my-3 p-3" style={{ backgroundColor: '#F2F2F2' }}>
          <h4 className="text-secondary">EMAIL</h4>
          <p className="my-1 text-danger">admissions@dht.com</p>
        </div>
        <div className="my-3 p-3" style={{ backgroundColor: '#F2F2F2' }}>
          <h4 className="text-secondary">GIỜ MỞ CỬA</h4>
          <p className="my-1 text-muted">Thứ 2- Thứ 6</p>
          <p className="text-muted">7:30 Sáng - 6:00 Chiều</p>
        </div>
      </div>
    </div>
  )
}

export default Contact