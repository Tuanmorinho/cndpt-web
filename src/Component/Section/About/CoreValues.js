import React from 'react'
import { CoreValue1, CoreValue2, CoreValue3, CoreValue4, CoreValue5, CoreValue6 } from '../../../Resouces/Img'

function CoreValues() {
  return (
    <div className="p-5 text-secondary">
      <div className="container">
        <h5 className="font-italic" style={{ color: '#11A79C' }}>Điều gì khiến DHT trở thành một nơi đặc biệt để học tập và phát triển.</h5>
        <hr className="my-2" style={{ color: '#11A79C' }} />
        <p className="mt-2 text-justify">
          Giá trị cốt lõi của chúng tôi tạo nền tảng để chúng tôi làm việc tại trường mầm non DHT. Những giá trị cốt lõi này không đổi, làm cơ sở và định hình
          cách chúng tôi tương tác và hiện thực hóa tầm nhìn.
        </p>
        <div className="row my-5">
          <div className="col">
            <div className="d-flex w-75 mx-auto flex-column justify-content-center">
              <img src={CoreValue1} alt="..." />
              <p className="text-center mt-3" style={{ color: '#ADD037' }}>SỰ ĐỔI MỚI</p>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <div className="d-flex w-75 mx-auto flex-column justify-content-center">
              <img src={CoreValue2} alt="..." />
              <p className="text-center mt-3" style={{ color: '#0966B1' }}>SỰ CHÍNH TRỰC</p>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <div className="d-flex w-75 mx-auto flex-column justify-content-center">
              <img src={CoreValue3} alt="..." />
              <p className="text-center mt-3" style={{ color: '#ED1C76' }}>SỰ XUẤT SẮC</p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <div className="d-flex w-75 mx-auto flex-column justify-content-center">
              <img src={CoreValue4} alt="..." />
              <p className="text-center mt-3" style={{ color: '#F79929' }}>SỰ CHĂM SÓC</p>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <div className="d-flex w-75 mx-auto flex-column justify-content-center">
              <img src={CoreValue5} alt="..." />
              <p className="text-center mt-3" style={{ color: '#11A79C' }}>MỐI QUAN HỆ</p>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <div className="d-flex w-75 mx-auto flex-column justify-content-center">
              <img src={CoreValue6} alt="..." />
              <p className="text-center mt-3" style={{ color: '#FFDD0F' }}>TÍNH CÁ NHÂN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreValues