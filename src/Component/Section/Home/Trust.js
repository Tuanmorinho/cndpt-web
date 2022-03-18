import React from 'react'
import { TrustImg, Trust1, Trust2, Trust3, Trust4, Trust5, Trust6 } from '../../../Resouces/Img'

function Trust() {
    return (
        <div className="jumbotron p-lg-5">
            <h1 className="display-6 text-center text-secondary">Điều gì khiến bố mẹ tin tưởng DHT?</h1>
            <hr className="my-4" />
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="row my-5">
                            <div className="col">
                                <div className="p-2 w-100 d-flex justify-content-start align-items-start">
                                    <img className="mt-1" src={Trust1} alt="..." style={{ height: 40, width: 40, objectFit: 'contain' }} />
                                    <p className="ms-3 text-secondary" style={{ fontSize: 17, width: 230 }}>Không gian học tập hiện đại tạo cảm ứng cho trẻ</p>
                                </div>
                            </div>
                            <div className="col ms-3">
                                <div className="p-2 w-100 d-flex justify-content-start align-items-start">
                                    <img className="mt-1" src={Trust2} alt="..." style={{ width: 40, objectFit: 'contain' }} />
                                    <p className="ms-3 text-secondary" style={{ fontSize: 17, width: 220 }}>Hành trình học tập riêng biệt</p>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col">
                                <div className="p-2 w-100 d-flex justify-content-start align-items-start">
                                    <img src={Trust3} alt="..." style={{ height: 40, width: 40, objectFit: 'contain' }} />
                                    <p className="ms-3 text-secondary" style={{ fontSize: 17, width: 230}}>Chương trình học tập có tính tư duy</p>
                                </div>
                            </div>
                            <div className="col ms-3">
                                <div className="p-2 w-100 d-flex justify-content-start align-items-start">
                                    <img className="mt-1" src={Trust4} alt="..." style={{ width: 40, objectFit: 'contain' }} />
                                    <p className="ms-3 text-secondary" style={{ fontSize: 17, width: 220 }}>Môi trường học tập an toàn và chu đáo</p>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col">
                                <div className="p-2 w-100 d-flex justify-content-start align-items-start">
                                    <img src={Trust5} alt="..." style={{ height: 40, width: 40, objectFit: 'contain' }} />
                                    <p className="ms-3 text-secondary" style={{ fontSize: 17, width: 230 }}>Mối quan hệ tích cực và hỗ trợ</p>
                                </div>
                            </div>
                            <div className="col ms-3">
                                <div className="p-2 w-100 d-flex justify-content-start align-items-start">
                                    <img src={Trust6} alt="..." style={{ width: 40, objectFit: 'contain' }} />
                                    <p className="ms-3 text-secondary" style={{ fontSize: 17, width: 220 }}>Đội ngũ chuyên môn tận tâm</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="mx-auto d-flex justify-content-center align-items-center h-100">
                            <img className="mb-5" src={TrustImg} alt="..." style={{ width: 450, objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust