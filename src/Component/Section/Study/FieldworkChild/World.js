import React from 'react'

function World(props) {
    return (
        props.trigger === true ?
            <div className="container bg-light border" style={{ borderColor: '#DFDFDF' }}>
                <h6 className="mt-4 font-italic">Con người và Cộng đồng</h6>
                <p className="text-justify">
                    Trẻ nói về các sự kiện quá khứ và hiện tại trong cuộc sống của mình và cuộc sống của các thành viên trong gia đình. Trẻ biết rằng những đứa trẻ khác không 
                    phải lúc nào cũng thích những thứ giống nhau và nhạy cảm với điều này. Trẻ biết sự tương đồng và khác biệt giữa bản thân và những người khác, cũng như giữa 
                    các gia đình, cộng đồng và truyền thống.
                </p>
                <h6 className="mt-4 font-italic">Thế giới</h6>
                <p className="text-justify">
                    Tại DHT, trẻ học về sự tương đồng và khác biệt liên quan đến các địa điểm, đồ vật, vật liệu và sinh vật. Trẻ nói về đặc điểm môi trường của mình và từ môi 
                    trường này sang môi trường khác có thể thay đổi như nào. Trẻ quan sát động vật và thực vật và giải thích tại sao một số điều xảy ra, và nói về những thay đổi.
                </p>
                <h6 className="mt-4 font-italic">Công nghệ</h6>
                <p className="text-justify">
                    Trẻ nhận ra rằng công nghệ được sử dụng tại nhiều nơi, ngay cả ở nhà và trường học. Trẻ lựa chọn và sử dụng công nghệ cho nhiều mục đích khác nhau.
                </p>
            </div>
            : ''
    )
}

export default World