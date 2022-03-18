import React from 'react'

function Language(props) {
    return (
        props.trigger === true ?
            <div className="container bg-light border" style={{ borderColor: '#DFDFDF' }}>
                <h6 className="mt-4 font-italic">Lắng nghe và Chú ý</h6>
                <p className="text-justify">
                    Trẻ chăm chú lắng nghe trong nhiều tình huống. Trẻ lắng nghe các câu chuyện, dự đoán chính xác các sự kiện chính và đáp lại các nhận xét, câu hỏi 
                    và hoạt động liên quan qua những gì mà trẻ nghe được. Trẻ chú ý vào những gì người khác nói và đáp lại phù hợp, trong khi tham gia vào hoạt động 
                    khác.
                </p>
                <h6 className="mt-4 font-italic">Hiểu</h6>
                <p className="text-justify">
                    Trẻ trả lời các câu hỏi "như thế nào" và "tại sao" về các trải nghiệm của mình và hưởng ứng các câu chuyện hoặc sự kiện.
                </p>
                <h6 className="mt-4 font-italic">Nói</h6>
                <p className="text-justify">
                    Trẻ thể hiện cảm xúc hiệu quả, thể hiện nhận thức về nhu cầu của người nghe. Trẻ sử dụng các thì quá khứ, hiện tại và tương lai một cách chính xác 
                    khi nói về các sự kiện đã xảy ra hoặc sẽ xảy ra trong tương lai. Trẻ phát triển các câu chuyện và lời giải thích của mình bằng cách kết nối các ý tưởng 
                    hoặc sự kiện.
                </p>
            </div>
            : ''
    )
}

export default Language