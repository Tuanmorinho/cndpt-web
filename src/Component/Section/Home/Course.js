import React from 'react'
import { Link } from 'react-router-dom'
import { CardImg5, CardImg6 } from '../../../Resouces/Img'

function Course() {
    return (
        <div className="jumbotron p-lg-5" style={{ backgroundColor: '#FEF6F0' }}>
            <h1 className="display-6 text-center text-secondary">Tổng quan về chương trình học</h1>
            <hr className="my-4" />
            <div className="p-lg-4">
                <div className="row" style={{ height: 600 }}>
                    <div className="col-2 invisible"></div>
                    <div className="col">
                        <div className="card h-100 mx-auto border-0 rounded-0 shadow align-items-center">
                            <img src={CardImg5} className="w-100" alt="..." style={{ height: 300 }} />
                            <div className="mt-4 card-body text-center">
                                <h1 className="card-title display-6" style={{ fontSize: 32, color: '#F79929' }}>Lớp nhà trẻ</h1>
                                <Link to='/chuong-trinh-hoc/lop-nha-tre-1-3-tuoi/'>
                                    <button className="mt-3 border-0 px-4 py-2 text-light" style={{ backgroundColor: '#FFDD0F', fontSize: 18 }}>Tìm hiểu thêm</button>
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="p-3 mb-3 mx-auto d-flex flex-column align-items-center" style={{ width: 200 }}>
                                        <label className="card-title text-black-50" style={{ fontSize: 18 }}>Độ tuổi</label>
                                        <p style={{ fontSize: 17, color: '#F79929' }}>1-3</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 mb-3 mx-auto d-flex flex-column align-items-center"  style={{ width: 200 }}>
                                        <label className="card-title text-black-50" style={{ fontSize: 18 }}>Sĩ số lớp</label>
                                        <p style={{ fontSize: 17, color: '#F79929' }}>15-24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 mx-auto border-0 rounded-0 shadow align-items-center">
                            <img src={CardImg6} className="w-100" alt="..." style={{ height: 300 }} />
                            <div className="mt-4 card-body text-center">
                                <h1 className="card-title display-6 text-success" style={{ fontSize: 32 }}>Lớp mẫu giáo</h1>
                                <Link to='/chuong-trinh-hoc/lop-mau-giao-3-6-tuoi/'>
                                    <button className="my-3 border-0 px-4 py-2 text-light" style={{ backgroundColor: '#ADD037', fontSize: 18 }}>Tìm hiểu thêm</button>
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="p-3 mb-3 mx-auto d-flex flex-column align-items-center" style={{ width: 200 }}>
                                        <label className="card-title text-black-50" style={{ fontSize: 18 }}>Độ tuổi</label>
                                        <p className="text-success" style={{ fontSize: 17 }}>3-6</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 mb-3 mx-auto d-flex flex-column align-items-center" style={{ width: 200 }}>
                                        <label className="card-title text-black-50" style={{ fontSize: 18 }}>Sĩ số lớp</label>
                                        <p className="text-success" style={{ fontSize: 17 }}>15-24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 invisible"></div>
                </div>
            </div>
        </div>
    )
}

export default Course