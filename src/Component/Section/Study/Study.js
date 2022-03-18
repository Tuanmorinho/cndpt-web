import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import ClassOneToThree from './ClassOneToThree'
import ClassThreeToSix from './ClassThreeToSix'
import FieldWork from './FieldWork'

const routes = [
  {
    path: '/chuong-trinh-hoc/lop-nha-tre-1-3-tuoi',
    component: ClassOneToThree
  },
  {
    path: '/chuong-trinh-hoc/lop-mau-giao-3-6-tuoi',
    component: ClassThreeToSix
  },
  {
    path: '/chuong-trinh-hoc/chuong-trinh-hoc-anh-quoc',
    component: FieldWork
  }
]

function Study({ label }) {
  const [styleColor, setStyleColor] = useState(
    {
      'letter': '',
      'vision': '',
      'core': '',
      'diff': '',
      'infra': ''
    }
  );

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/chuong-trinh-hoc/lop-nha-tre-1-3-tuoi/') {
      setStyleColor({
        'letter': 'bg-warning',
        'vision': '',
        'core': '',
        'diff': '',
        'infra': ''
      });
    } else if (location.pathname === '/chuong-trinh-hoc/lop-mau-giao-3-6-tuoi/') {
      setStyleColor({
        'letter': '',
        'vision': 'bg-warning',
        'core': '',
        'diff': '',
        'infra': ''
      });
    } else {
      if (location.pathname === '/chuong-trinh-hoc/chuong-trinh-hoc-anh-quoc/') {
        setStyleColor({
          'letter': '',
          'vision': '',
          'core': '',
          'diff': '',
          'infra': 'bg-warning'
        });
      } else {
        setStyleColor({
          'letter': '',
          'vision': '',
          'core': '',
          'diff': '',
          'infra': ''
        });
      }
    }
  }, [])

  return (
    <div className="bg-about d-flex flex-column justify-content-center align-items-center">
      <label className="display-5 p-5 font-weight-bold">{label}</label>
      <div style={{ width: 1100 }}>
        <div className="row mb-5">
          <div className="col-3">
            <div className="shadow p-3 bg-light">
              <div className="d-flex flex-column">
                <Link to='/chuong-trinh-hoc/lop-nha-tre-1-3-tuoi/' className={`text-decoration-none p-2 text-dark ${styleColor.letter}`} type="button">Lớp nhà trẻ</Link>
                <Link to='/chuong-trinh-hoc/lop-mau-giao-3-6-tuoi/' className={`text-decoration-none p-2 text-dark ${styleColor.vision}`}>Lớp mẫu giáo</Link>
                <Link to='/chuong-trinh-hoc/chuong-trinh-hoc-anh-quoc/' className={`text-decoration-none p-2 text-dark ${styleColor.core}`} type="button">Chương trình học quốc tế</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="shadow bg-light">
              <Switch>
                {
                  routes.map((route, index) => (
                    <Route
                      key={index}
                      exact path={route.path}
                      children={<route.component />}
                    />
                  ))
                }
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Study