import React from 'react'

function Phisical(props) {
    return (
        props.trigger === true ?
            <div className="container bg-light border" style={{ borderColor: '#DFDFDF' }}>
                <h6 className="mt-4 font-italic">Di chuyển và Xử lý</h6>
                <p className="text-justify">
                    Trẻ thể hiện sự kiểm soát và phối hợp tốt trong các hoạt động lớn và nhỏ. Trẻ di chuyển tự tin theo nhiều cách, trong không gian sắp xếp an toàn. 
                    Trẻ cầm các thiết bị và công cụ hiệu quả, bao gồm bút chì và bút mực để viết.
                </p>
                <h6 className="mt-4 font-italic">Sức khỏe và Chăm sóc bản thân</h6>
                <p className="text-justify">
                    Trẻ biết tầm quan trọng của sức khỏe, tập thể dục và chế độ ăn uống lành mạnh và nói về cách giữ sức khỏe và an toàn. Trẻ quản lý vệ sinh cơ bản 
                    và nhu cầu cá nhân của mình, bao gồm mặc quần áo và tự đi vệ sinh.
                </p>
            </div>
            : ''
    )
}

export default Phisical