import React from 'react'

function Art(props) {
    return (
        props.trigger === true ?
            <div className="container bg-light border" style={{ borderColor: '#DFDFDF' }}>
                <h6 className="mt-4 font-italic">Khám phá và Sử dụng các Phương tiện và Vật liệu</h6>
                <p className="text-justify">
                    Trẻ hát, chơi nhạc hoặc viết nhạc, nhảy và thực nghiệm những cách thay đổi mình. Trẻ sử dụng an toàn và khám phá nhiều vật liệu, công cụ và kỹ thuật, 
                    thử nghiệm màu sắc, thiết kế, kết cấu, hình thức và chức năng.
                </p>
                <h6 className="mt-4 font-italic">Giàu tưởng tượng</h6>
                <p className="text-justify">
                    Trẻ sử dụng những gì đã học được về các phương tiện và vật liệu theo cách nguyên bản, nghĩ về việc sử dụng và mục đích. Trẻ thể hiện ý kiến, suy 
                    nghĩ và cảm xúc thông qua thiết kế và công nghệ, nghệ thuật, âm nhạc, nhảy, đóng kịch và câu chuyện.
                </p>
            </div>
            : ''
    )
}

export default Art