import React from 'react'
import { CardImg1, CardImg2, CardImg3 } from '../../../Resouces/Img'
import { Link } from 'react-router-dom'

function InformationBlock() {
    return (
        <div className="p-lg-5">
            <div className="row" style={{ height: 450 }}>
                <div className="col">
                    <div className="card h-100 w-75 mx-auto border-0 rounded-0 shadow align-items-center">
                        <img src={CardImg1} className="my-4" alt="..." style={{ width: 50, height: 50, objectFit: 'contain' }} />
                        <div className="card-body text-center">
                            <h5 className="card-title" style={{ color: '#ED1C76' }}>Tạo dựng nền tảng tốt nhất cho trẻ</h5>
                            <p className="card-text my-5">Tại DHT, Chúng tôi tin rằng trách nhiệm của mình là dành cho trẻ môi trường và trải nghiệm để hỗ trợ lộ trình phát triển cho từng trẻ.</p>
                            <p className="card-text"><Link className="text-decoration-none" to='/chuong-trinh-hoc/chuong-trinh-hoc-anh-quoc/'><small className="text-primary">Đọc thêm</small></Link></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 w-75 mx-auto border-0 rounded-0 shadow align-items-center">
                        <img src={CardImg2} className="my-4" alt="..." style={{ width: 50, height: 50, objectFit: 'contain' }} />
                        <div className="card-body text-center">
                            <h5 className="card-title" style={{ color: '#F79929' }}>CHƯƠNG TRÌNH HỌC CỦA CHÚNG TÔI</h5>
                            <p className="card-text my-5">Hình thức tiếp cận học tập lấy trẻ làm trung tâm.</p>
                            <Link to='/chuong-trinh-hoc/chuong-trinh-hoc-anh-quoc/'>
                                <button className="border-0 p-2 text-light" style={{ backgroundColor: '#F79929', fontSize: 14 }}>Tìm hiểu thêm về giáo dục đẳng cấp thế giới</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 w-75 mx-auto border-0 rounded-0 shadow align-items-center">
                        <img src={CardImg3} className="my-4" alt="..." style={{ width: 50, height: 50, objectFit: 'contain' }} />
                        <div className="card-body text-center">
                            <h5 className="card-title" style={{ color: '#11A89D' }}>Mục đích xây dựng tạo không gian học tập cho trẻ</h5>
                            <p className="card-text my-5">Tường mầm non DHT luôn lưu tâm để có những thiết kế thận trọng dành cho trẻ một môi trường thực sự hỗ trợ trong mỗi hành trình học tập</p>
                            <p className="card-text"><Link className="text-decoration-none" to='/ve-chung-toi/co-so-vat-chat/'><small className="text-primary">Đọc thêm</small></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationBlock