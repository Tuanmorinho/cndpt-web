import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarLogo } from '../Resouces/Img'


function Navbar() {
    return (
        <div className="position-fixed w-100" id="mainNav" style={{ zIndex: 100, top: 0 }}>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container justify-content-center">
                    <div className="px-lg-5 d-flex align-items-center">
                        <span className="material-icons px-lg-2"> call </span>
                        <label className="px-lg-1">0987654321</label>
                    </div>
                    <div className="px-lg-5 d-flex align-items-center">
                        <span className="material-icons px-lg-2"> email </span>
                        <label className="px-lg-1">admissions@dht.com</label>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center shadow p-2 bg-white">
                <div className="container justify-content-center w-50 justify-content-around">
                    <img className="navbar-brand" src={NavBarLogo} alt="..." />
                    <div id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item px-2"><Link to="/" className="nav-link px-lg-3 py-3 py-lg-4 text-nowrap">Trang chủ</Link></li>
                            <li className="nav-item px-2 dropdown my-auto">
                                <a className="nav-link dropdown-toggle" type="button" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Về chúng tôi
                                </a>
                                <div className="dropdown-menu border-light rounded-0 shadow p-2 mb-5 bg-white" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to='/ve-chung-toi/gioi-thieu/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Giới thiệu</Link>
                                    <Link to='/ve-chung-toi/tam-nhin-su-menh/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Tầm nhìn & Sứ mệnh</Link>
                                    <Link to='/ve-chung-toi/gia-tri-cot-loi/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Giá trị cốt lõi</Link>
                                    <Link to='/ve-chung-toi/su-khac-biet/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Sự khác biệt</Link>
                                    <Link to='/ve-chung-toi/co-so-vat-chat/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Cơ sở vật chất</Link>
                                    <Link to='/ve-chung-toi/doi-ngu/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Đội ngũ</Link>
                                </div>
                            </li>
                            <li className="nav-item px-2 dropdown my-auto">
                                <a className="nav-link dropdown-toggle" type="button" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Chương trình học
                                </a>
                                <div className="dropdown-menu border-light rounded-0 shadow p-2 mb-5 bg-white dropright" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to='/chuong-trinh-hoc/lop-nha-tre-1-3-tuoi/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Lớp nhà trẻ 1-3 tuổi</Link>
                                    <Link to='/chuong-trinh-hoc/lop-mau-giao-3-6-tuoi/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Lớp mẫu giáo 3-6 tuổi</Link>
                                    <Link to='/chuong-trinh-hoc/chuong-trinh-hoc-anh-quoc/' className="dropdown-item py-2" type="button" style={{ opacity: 0.7 }}>Chương trình mầm non Fieldwork</Link>
                                </div>
                            </li>
                            <li className="nav-item px-2"><Link to='/lien-he/' className="nav-link px-lg-3 py-3 py-lg-4 text-nowrap">Liên hệ</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar