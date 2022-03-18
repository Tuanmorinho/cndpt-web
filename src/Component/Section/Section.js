import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import About from './About/About'
import Library from './Libraris/Library'
import Study from './Study/Study'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/ve-chung-toi/gioi-thieu',
        component: About,
        label: 'GIỚI THIỆU'
    },
    {
        path: '/ve-chung-toi/tam-nhin-su-menh',
        component: About,
        label: 'TẦM NHÌN & SỨ MỆNH'
    },
    {
        path: '/ve-chung-toi/gia-tri-cot-loi',
        component: About,
        label: 'GIÁ TRỊ CỐT LÕI'
    },
    {
        path: '/ve-chung-toi/su-khac-biet',
        component: About,
        label: 'SỰ KHÁC BIỆT'
    },
    {
        path: '/ve-chung-toi/co-so-vat-chat',
        component: About,
        label: 'CƠ SỞ VẬT CHẤT'
    },
    {
        path: '/ve-chung-toi/doi-ngu',
        component: About,
        label: 'ĐỘI NGŨ'
    },
    {
        path: '/chuong-trinh-hoc/lop-nha-tre-1-3-tuoi',
        component: Study,
        label: 'LỚP NHÀ TRẺ: 1-3 TUỔI'
    },
    {
        path: '/chuong-trinh-hoc/lop-mau-giao-3-6-tuoi',
        component: Study,
        label: 'LỚP MẪU GIÁO: 3-6 TUỔI'
    },
    {
        path: '/chuong-trinh-hoc/chuong-trinh-hoc-anh-quoc',
        component: Study,
        label: 'CHƯƠNG TRÌNH ĐÀO TẠO FIELDWORK ANH QUỐC'
    },
    {
        path: '/chuong-trinh-hoc/phuong-phap-steam',
        component: Study,
        label: 'PHƯƠNG PHÁP STEAM'
    },
    {
        path: '/chuong-trinh-hoc/hoc-tieng-anh',
        component: Study,
        label: 'HỌC TIẾNG ANH'
    },
    {
        path: '/thu-vien/thu-vien-hinh-anh/',
        component: Library
    },
    {
        path: '/thu-vien/thu-vien-video/',
        component: Library
    },
    {
        path: '/lien-he',
        component: Contact
    }
]

function Section() {
    return (
        <div style={{ marginTop: 130 }}>
            <Switch>
                {
                    routes.map((route, index) => (
                        <Route
                            key={index}
                            exact path={route.path}
                            children={<route.component label={route.label} /> }
                        />
                    ))
                }
            </Switch>
        </div>
    )
}

export default Section