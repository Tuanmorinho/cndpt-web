import React from 'react'
import { Link } from 'react-router-dom'
import { FooterLogo } from '../Resouces/Img'

function Footer() {
  return (
    <footer className="p-2 bg-warning" style={{ zIndex: 100 }}>
      <div className="container">
        <img className="p-4" src={FooterLogo} alt="..." />
        <div className="row">
          <div className="col">
            <div className="ms-4 h-100 w-50">
              <h4 className="mt-3">LIÊN HỆ</h4>
              <p className="mt-3">Tòa nhà H3, Số 55 Giải Phóng, Phường Đồng Tâm, Quận Hai Bà Trưng, TP Hà Nội.</p>
              <div className="mt-4 d-flex align-items-center">
                <span className="material-icons"> call </span>
                <label className="ms-2">0946598131</label>
              </div>
              <div className="mt-2 d-flex align-items-center">
                <span className="material-icons"> email </span>
                <label className="ms-2">tuan1547463@nuce.edu.vn</label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="w-50">
              <h4 className="mt-3">GIỜ MỞ CỬA</h4>
              <p className="mt-3">Thứ 2 đến Thứ 6, 7h30 - 18h00</p>
            </div>
            <div className="mt-4 w-50">
              <h4>THÔNG TIN HỮU ÍCH</h4>
              <div className="d-flex flex-column">
                <Link to='/ve-chung-toi/gioi-thieu/' className="text-decoration-none mb-2"><label className="text-dark" type="button">Về chúng tôi</label></Link>
                <Link to='/chuong-trinh-hoc/chuong-trinh-hoc-anh-quoc/' className="text-decoration-none mb-2"><label className="text-dark" type="button">Khung chương trình Anh Quốc</label></Link>
                <Link to='/lien-he/' className="text-decoration-none mb-2"><label className="text-dark" type="button">Liên hệ</label></Link>
              </div>
            </div>
          </div>
        </div>
        <p className="ms-4 mt-5">Copyright &copy; 2022 by DHT Preschool. Terms of use.</p>
      </div>
    </footer>
  )
}

export default Footer