import React from 'react'
import { CardImg1, CardImg2, CardImg3, CardImg4 } from '../../../Resouces/Img'

function InformationDetail() {
    return (
        <div className="jumbotron p-lg-5" style={{ backgroundColor: '#FEF6F0' }}>
            <h1 className="display-6 text-center text-secondary">Thông tin chính về trường mầm non DHT</h1>
            <hr className="my-4" />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="p-3 w-75 mx-auto d-flex justify-content-start">
                            <img src={CardImg3} alt="..." style={{ width: 50, height: 50, objectFit: 'contain' }} />
                            <div className="mx-5">
                                <h4 style={{ color: '#11A89D' }}>Cơ sở vật chất nổi bật</h4>
                                <p>- Khu học tập rộng hơn 1700m2<br />- Lớp học rộng hơn 70m2</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 w-75 mx-auto d-flex justify-content-start">
                            <img src={CardImg2} alt="..." style={{ width: 50, height: 50, objectFit: 'contain' }} />
                            <div className="mx-5">
                                <h4 style={{ color: '#F79929' }}>Chương trình học</h4>
                                <p>- Khung chương trình Fieldwork Education - Anh Quốc<br />- Trang thiết bị học tập hiện đại</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="p-3 w-75 mx-auto d-flex justify-content-start">
                            <img src={CardImg1} alt="..." style={{ width: 50, height: 50, objectFit: 'contain' }} />
                            <div className="mx-5">
                                <h4 style={{ color: '#ED1C76' }}>Độ tuổi</h4>
                                <p>- Từ 1 đến 6 tuổi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 w-75 mx-auto d-flex justify-content-start">
                            <img src={CardImg4} alt="..." style={{ width: 50, height: 50, objectFit: 'contain' }} />
                            <div className="mx-5">
                                <h4 style={{ color: '#0966B1' }}>Ngôn ngữ giảng dạy</h4>
                                <p>- Lớp song ngữ<br />- 100% tiếng Anh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationDetail