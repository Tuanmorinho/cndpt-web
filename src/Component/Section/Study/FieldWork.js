import React, { useState } from 'react'
import { FW1, FW2, FW3, FW4 } from '../../../Resouces/Img'
import Art from './FieldworkChild/Art';
import Language from './FieldworkChild/Language';
import Math from './FieldworkChild/Math';
import Phisical from './FieldworkChild/Phisical';
import ReadAndWrite from './FieldworkChild/ReadAndWrite';
import Self from './FieldworkChild/Self';
import World from './FieldworkChild/World';

function FieldWork() {
  const [icon1, setIcon1] = useState('add');
  const [icon2, setIcon2] = useState('add');
  const [icon3, setIcon3] = useState('add');

  const [icon4, setIcon4] = useState('add');
  const [icon5, setIcon5] = useState('add');
  const [icon6, setIcon6] = useState('add');
  const [icon7, setIcon7] = useState('add');

  const [selfTrigger, setSelfTrigger] = useState(false);
  const [physTrigger, setPhysTrigger] = useState(false);
  const [langTrigger, setLangTrigger] = useState(false);

  const [readTrigger, setReadTrigger] = useState(false);
  const [mathTrigger, setMathTrigger] = useState(false);
  const [worldTrigger, setWorldTrigger] = useState(false);
  const [artTrigger, setArtTrigger] = useState(false);

  const changeIcon1 = () => {
    if (icon1 === 'add') {
      setIcon1('remove');
      setSelfTrigger(true);

      setIcon2('add');
      setPhysTrigger(false);
      setIcon3('add');
      setLangTrigger(false);
    } else {
      setIcon1('add');
      setSelfTrigger(false);
    }
  }
  const changeIcon2 = () => {
    if (icon2 === 'add') {
      setIcon2('remove');
      setPhysTrigger(true);

      setIcon1('add');
      setSelfTrigger(false);
      setIcon3('add');
      setLangTrigger(false);
    } else {
      setIcon2('add');
      setPhysTrigger(false);
    }
  }
  const changeIcon3 = () => {
    if (icon3 === 'add') {
      setIcon3('remove');
      setLangTrigger(true);

      setIcon1('add');
      setSelfTrigger(false);
      setIcon2('add');
      setPhysTrigger(false);
    } else {
      setIcon3('add');
      setLangTrigger(false);
    }
  }

  const changeIcon4 = () => {
    if (icon4 === 'add') {
      setIcon4('remove');
      setReadTrigger(true);

      setIcon5('add');
      setMathTrigger(false);
      setIcon6('add');
      setWorldTrigger(false);
      setIcon7('add');
      setArtTrigger(false);
    } else {
      setIcon4('add');
      setReadTrigger(false);
    }
  }
  const changeIcon5 = () => {
    if (icon5 === 'add') {
      setIcon5('remove');
      setMathTrigger(true);

      setIcon4('add');
      setReadTrigger(false);
      setIcon6('add');
      setWorldTrigger(false);
      setIcon7('add');
      setArtTrigger(false);
    } else {
      setIcon5('add');
      setMathTrigger(false);
    }
  }
  const changeIcon6 = () => {
    if (icon6 === 'add') {
      setIcon6('remove');
      setWorldTrigger(true);

      setIcon4('add');
      setReadTrigger(false);
      setIcon5('add');
      setMathTrigger(false);
      setIcon7('add');
      setArtTrigger(false);
    } else {
      setIcon6('add');
      setWorldTrigger(false);
    }
  }
  const changeIcon7 = () => {
    if (icon7 === 'add') {
      setIcon7('remove');
      setArtTrigger(true);

      setIcon4('add');
      setReadTrigger(false);
      setIcon5('add');
      setMathTrigger(false);
      setIcon6('add');
      setWorldTrigger(false);
    } else {
      setIcon7('add');
      setArtTrigger(false);
    }
  }

  return (
    <div className="p-5 text-secondary">
      <div className="container">
        <h5 className="font-italic text-warning">Giáo dục tuyệt vời cho tương lai tươi sáng</h5>
        <hr className="my-2 bg-warning" />
        <p className="mt-2 text-justify">
          Mỗi trẻ đều xứng đáng có được khởi đầu tốt nhất trong cuộc đời và hỗ trợ để cho phép trẻ thể hiện tiềm năng của mình. Trẻ em phát triển rất nhanh trong những
          năm đầu đời và trải nghiệm tuổi thơ từ sơ sinh đến 6 tuổi là khoảng thời gian có ảnh hưởng lớn nhất đến tương lai của trẻ. Nuôi dạy trẻ tốt cùng với giáo dục
          sớm chất lượng cao sẽ cho trẻ có một nền tảng cần thiết để phát huy hết khả năng và tài năng của trẻ khi lớn lên.
        </p>
        <h6 className="mt-4 font-italic">Vậy khung chương trình FieldWork của Anh Quốc là gì?</h6>
        <p className="text-justify">
          Tại trường mắm non DHT, chúng tôi đi theo Khung chương trình FieldWork của Anh Quốc được xác định trong chương trình giảng dạy quốc gia của Anh Quốc. Kết cấu hợp
          lí của nó là một bộ tiêu chuẩn mà tất cả các trường mầm non phải đáp ứng nhằm đảm bảo trẻ có cơ hội tối ưu để tiến bộ và phát triển, trong một môi trường an toàn
          và lành mạnh. Cốt lõi của chương trình nhằm giúp nhận ra rằng tất cả trẻ là cá thể riêng biệt, việc học tập và phát triển phải được lên kế hoạch xoay quanh nhu cầu
          và sở thích cá nhân của mỗi trẻ.
        </p>
        <p className="text-justify">
          Khung chương trình FieldWork đưa ra các hướng dẫn về an toàn sức khỏe, các mục tiêu mà các trường mầm non phải giúp trẻ đạt được, căn cứ vào những mục tiêu của
          các lĩnh vực học tập và phát triển cụ thể quan trọng đối với từng độ tuổi và các biện pháp đánh giá để xem xét tiến bộ của trẻ. FieldWork nhằm mục đích đưa ra
          một nền tảng vững chắc và lành mạnh cho sự yêu thích trong học tập, bình đẳng về cơ hội cho tất cả trẻ em và sự hợp tác mạnh mẽ giữa các trường mầm non và cha mẹ.
        </p>
        <h6 className="mt-4 font-italic">Nguyên tắc chung</h6>
        <p className="text-justify">
          Trẻ em sinh ra đã sẵn sàng và ham học hỏi. Trẻ chủ động tiếp cận và tương tác với người khác và thế giới xung quanh. Khung chương trình Fieldwork công nhận rằng
          quá trình học tập và phát triển hiệu quả phụ thuộc vào việc trẻ có cơ hội tương tác trong các mối quan hệ tích cực và môi trường thuận lợi.
        </p>
        <p className="text-justify">
          Tại DHT, có 4 nguyên tắc hướng dẫn hình thành nên thực tiễn của chúng tôi:
        </p>
        <div>
          <div className="row" style={{ height: 400 }}>
            <div className="col">
              <div className="card h-100 border-0 rounded-0 shadow align-items-center">
                <img src={FW1} className="my-4" alt="..." style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <h5 className="card-title text-center" style={{ color: '#EC1C76' }}>MỖI TRẺ LÀ MỖI CÁ THỂ RIÊNG BIỆT</h5>
                <div className="card-body">
                  <p className="card-text">- Trẻ phát triển theo tốc độ riêng cá nhân</p>
                  <p className="card-text">- Trẻ được đối xử công bằng bất kể chủng tộc, tôn giáo hay khả năng của trẻ</p>
                  <p className="card-text">- Trẻ không ngừng học hỏi để kiên cường, có năng lực, tự tin và tin tưởng</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 rounded-0 shadow align-items-center">
                <img src={FW2} className="my-4" alt="..." style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <h5 className="card-title text-center" style={{ color: '#11A79C' }}>MỐI QUAN HỆ TÍCH CỰC</h5>
                <div className="card-body">
                  <p className="card-text">- Cha mẹ được biết đến là người giáo dục đầu tiên của trẻ</p>
                  <p className="card-text">- Chúng tôi muốn hợp tác với cha mẹ vì quyền lợi của trẻ</p>
                  <p className="card-text">- Chúng tôi tập trung phát triển các mối quan hệ chuyên nghiệp và tôn trọng nhau</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4" style={{ height: 400 }}>
            <div className="col">
              <div className="card h-100 border-0 rounded-0 shadow align-items-center">
                <img src={FW3} className="my-4" alt="..." style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <h5 className="card-title text-center" style={{ color: '#0966B1' }}>MÔI TRƯỜNG THUẬN LỢI</h5>
                <div className="card-body">
                  <p className="card-text">- Môi trường vui chơi đóng vai trò quan trọng trong việc hỗ trợ sự phát triển của trẻ</p>
                  <p className="card-text">- Các lớp học được lắp đặt để trẻ có thể khám phá, học tập an toàn và tự tiếp cận vào nguồn tài liệu phong phú</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 rounded-0 shadow align-items-center">
                <img src={FW4} className="my-4" alt="..." style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <h5 className="card-title text-center" style={{ color: '#F79929' }}>HỌC TẬP VÀ PHÁT TRIỂN</h5>
                <div className="card-body">
                  <p className="card-text">- Chúng tôi tôn trọng việc "vui chơi" chính là việc học của trẻ</p>
                  <p className="card-text">- Chúng tôi tin rằng thông qua việc vui chơi, trẻ sẽ hiểu thêm về thế giới của mình và phát triển cả về cảm xúc, trí tuệ và thể chất</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="mt-4 font-italic">Bảy lĩnh vực học tập</h6>
        <p className="text-justify">
          Chương trình FieldWork cung cấp cho chúng tôi một khung chương trình dựa trên vui chơi để cung cấp cho trẻ một chương trình giảng dạy cân bằng, dựa trên các lĩnh vực học
          tập chính và cụ thể. Chúng tôi sử dụng các lĩnh vực học tập được xác định khi lên kế hoạch, quan sát và đánh giá trong suốt quá trình học tập do giáo viên hoặc trẻ khởi
          xướng. Những lĩnh vực này cũng hỗ trợ chúng tôi trong việc đưa ra một môi trường học tập đầy thách thức và không ngừng phát triển.
        </p>
        <p className="text-justify">
          Các lĩnh vực học tập chính rất quan trọng để kích thích trí tò mò tự nhiên của trẻ, xây dựng khả năng học hỏi, hình thành các mối quan hệ và phát triển mạnh mẽ. Ba lĩnh vực
          chính này tạo nền tảng cho bốn lĩnh vực học tập cụ thể còn lại. Ba lĩnh vực trong FieldWork là:
        </p>
        <div>
          <div onClick={changeIcon1} className="my-2 d-flex justify-content-start align-items-center text-muted border" style={{ height: 40, backgroundColor: '#EDEDED', borderColor: '#DFDFDF' }} type="button">
            <span className="material-icons">{icon1}</span>
            <h6 className="h-100 ms-2 mt-4">Phát triển Cá nhân, Cảm xúc & Xã hội</h6>
          </div>
          <Self trigger={selfTrigger} />
          <div onClick={changeIcon2} className="my-2 d-flex justify-content-start align-items-center text-muted border" style={{ height: 40, backgroundColor: '#EDEDED', borderColor: '#DFDFDF' }} type="button">
            <span className="material-icons">{icon2}</span>
            <h6 className="h-100 ms-2 mt-4">Phát triển Thể chất</h6>
          </div>
          <Phisical trigger={physTrigger} />
          <div onClick={changeIcon3} className="my-2 d-flex justify-content-start align-items-center text-muted border" style={{ height: 40, backgroundColor: '#EDEDED', borderColor: '#DFDFDF' }} type="button">
            <span className="material-icons">{icon3}</span>
            <h6 className="h-100 ms-2 mt-4">Giao tiếp và ngôn ngữ</h6>
          </div>
          <Language trigger={langTrigger} />
        </div>
        <p className="text-justify">
          Các lĩnh vực học tập cụ thể cải thiện việc học tập và phát triển cùng với các lĩnh vực chính. Các lĩnh vực này cung cấp nhiều trải nghiệm và cơ hội cho trẻ mở rộng kiến thức
          và kỹ năng của mình. Các lĩnh vực này là:
        </p>
        <div>
          <div onClick={changeIcon4} className="my-2 d-flex justify-content-start align-items-center text-muted border" style={{ height: 40, backgroundColor: '#EDEDED', borderColor: '#DFDFDF' }} type="button">
            <span className="material-icons">{icon4}</span>
            <h6 className="h-100 ms-2 mt-4">Đọc viết</h6>
          </div>
          <ReadAndWrite trigger={readTrigger} />
          <div onClick={changeIcon5} className="my-2 d-flex justify-content-start align-items-center text-muted border" style={{ height: 40, backgroundColor: '#EDEDED', borderColor: '#DFDFDF' }} type="button">
            <span className="material-icons">{icon5}</span>
            <h6 className="h-100 ms-2 mt-4">Toán học</h6>
          </div>
          <Math trigger={mathTrigger} />
          <div onClick={changeIcon6} className="my-2 d-flex justify-content-start align-items-center text-muted border" style={{ height: 40, backgroundColor: '#EDEDED', borderColor: '#DFDFDF' }} type="button">
            <span className="material-icons">{icon6}</span>
            <h6 className="h-100 ms-2 mt-4">Hiểu biết về Thế giới</h6>
          </div>
          <World trigger={worldTrigger} />
          <div onClick={changeIcon7} className="my-2 d-flex justify-content-start align-items-center text-muted border" style={{ height: 40, backgroundColor: '#EDEDED', borderColor: '#DFDFDF' }} type="button">
            <span className="material-icons">{icon7}</span>
            <h6 className="h-100 ms-2 mt-4">Thiết kế và Nghệ thuật</h6>
          </div>
          <Art trigger={artTrigger} />
        </div>
      </div>
    </div>
  )
}

export default FieldWork