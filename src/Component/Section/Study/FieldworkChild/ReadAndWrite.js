import React from 'react'

function ReadAndWrite(props) {
    return (
        props.trigger === true ?
            <div className="container bg-light border" style={{ borderColor: '#DFDFDF' }}>
                <h6 className="mt-4 font-italic">Đọc</h6>
                <p className="text-justify">
                    Trẻ đọc và hiểu những câu đơn giản. Trẻ sử dụng kiến thức về ngữ âm để giải mã các từ và đọc to một cách chính xác. Trẻ thể hiện sự hiểu biết khi nói 
                    với người khác về những gì trẻ đã đọc.
                </p>
                <h6 className="mt-4 font-italic">Viết</h6>
                <p className="text-justify">
                    Trẻ sử dụng kiến thức về ngữ âm để viết những từ phù hợp với âm thanh được phát ra. Trẻ viết những câu đơn giản mà trẻ và người khác có thể đọc được.
                </p>
            </div>
            : ''
    )
}

export default ReadAndWrite