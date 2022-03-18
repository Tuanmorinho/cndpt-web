import React from 'react'

function Math(props) {
    return (
        props.trigger === true ?
            <div className="container bg-light border" style={{ borderColor: '#DFDFDF' }}>
                <h6 className="mt-4 font-italic">Số</h6>
                <p className="text-justify">
                    Trẻ đếm các số từ 1 đến 20, sắp xếp các số này đúng thứ tự và nói số nào lớn hơn hoặc nhỏ hơn một số đã cho. Bằng cách sử dụng các con số 
                    và đồ vật, trẻ cộng và trừ các số có hai chữ số và đếm xuôi ngược để tìm câu trả lời. Trẻ giải các bài toán bao gồm gấp đôi, chia đôi và 
                    phân chia.
                </p>
                <h6 className="mt-4 font-italic">Hình dạng, Không gian và Đo lường</h6>
                <p className="text-justify">
                    Trẻ sử dụng ngôn ngữ hàng ngày để nói về kích thước, khối lượng, thể tích, vị trí, khoảng cách, thời gian và tiền bạc để so sánh các số 
                    và đồ vật và giải các bài toán. Trẻ nhận ra, tạo ra và mô tả mô hình. Trẻ khám phá đặc điểm của các hình dạng và đồ vật hàng ngày và sử 
                    dụng ngôn ngữ toán học để mô tả chúng.
                </p>
            </div>
            : ''
    )
}

export default Math