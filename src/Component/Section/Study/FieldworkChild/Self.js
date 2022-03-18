import React from 'react'

function Self(props) {
    return (
        props.trigger === true ?
            <div className="container bg-light border" style={{ borderColor: '#DFDFDF' }}>
                <h6 className="mt-4 font-italic">Tự tin và Tự ý thức</h6>
                <p className="text-justify">
                    Trẻ tự tin thử những hoạt động mới, và nói tại sao trẻ thích một số hoạt động hơn các hoạt động khác. Trẻ tự tin phát biểu trong nhóm quen thuộc,
                    nói về ý kiến của mình, và sẽ lựa chọn nguồn lực mà trẻ cần cho các hoạt động được chọn. Trẻ nói khi nào trẻ cần hoặc không cần hỗ trợ.
                </p>
                <h6 className="mt-4 font-italic">Quản lý Cảm xúc và Hành vi</h6>
                <p className="text-justify">
                    Trẻ nói về cách trẻ và người khác thể hiện cảm xúc, nói về hành vi của chính mình và người khác và hậu quả của nó, và biết rằng một số hành vi là 
                    không thể chấp nhận được. Trẻ làm việc như một thành vien trong một nhóm hoặc lớp, hiểu và tuân theo các quy tắc. Trẻ điều chỉnh hành vi của mình 
                    theo các tình huống khác nhau và thay đổi thói quen dễ dàng.
                </p>
                <h6 className="mt-4 font-italic">Tạo mối quan hệ</h6>
                <p className="text-justify">
                    Trẻ chơi chơi một cách hợp tác với người khác. Trẻ cân nhắc ý kiến của người khác về cách tổ chức hoạt động của mình. Trẻ thể hiện sự nhạy cảm trước 
                    nhu cầu và cảm xúc của người khác và hình thành mối quan hệ tích cực với người lớn và những đứa trẻ khác.
                </p>
            </div>
            : ''
    )
}

export default Self