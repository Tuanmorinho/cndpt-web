import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import Letter from './Letter'
import VissionAndMission from './VissionAndMission'
import CoreValues from './CoreValues'
import Different from './Different'
import Infrastructure from './Infrastructure'
import OurTeam from './OurTeam'

const routes = [
  {
    path: '/ve-chung-toi/gioi-thieu',
    component: Letter
  },
  {
    path: '/ve-chung-toi/tam-nhin-su-menh',
    component: VissionAndMission
  },
  {
    path: '/ve-chung-toi/gia-tri-cot-loi',
    component: CoreValues
  },
  {
    path: '/ve-chung-toi/su-khac-biet',
    component: Different
  },
  {
    path: '/ve-chung-toi/co-so-vat-chat',
    component: Infrastructure
  },
  {
    path: '/ve-chung-toi/doi-ngu',
    component: OurTeam
  },
]

function About({label}) {
  const [styleColor, setStyleColor] = useState(
    {
      'letter': '',
      'vision': '',
      'core': '',
      'diff': '',
      'infra': '',
      'team': ''
    }
  );

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/ve-chung-toi/gioi-thieu/') {
      setStyleColor({
        'letter': 'bg-warning',
        'vision': '',
        'core': '',
        'diff': '',
        'infra': '',
        'team': ''
      });
    } else if (location.pathname === '/ve-chung-toi/tam-nhin-su-menh/') {
      setStyleColor({
        'letter': '',
        'vision': 'bg-warning',
        'core': '',
        'diff': '',
        'infra': '',
        'team': ''
      });
    } else if (location.pathname === '/ve-chung-toi/gia-tri-cot-loi/') {
      setStyleColor({
        'letter': '',
        'vision': '',
        'core': 'bg-warning',
        'diff': '',
        'infra': '',
        'team': ''
      });
    } else if (location.pathname === '/ve-chung-toi/su-khac-biet/') {
      setStyleColor({
        'letter': '',
        'vision': '',
        'core': '',
        'diff': 'bg-warning',
        'infra': '',
        'team': ''
      });
    } else if (location.pathname === '/ve-chung-toi/co-so-vat-chat/') {
      setStyleColor({
        'letter': '',
        'vision': '',
        'core': '',
        'diff': '',
        'infra': 'bg-warning',
        'team': ''
      });
    } else {
      if (location.pathname === '/ve-chung-toi/doi-ngu/') {
        setStyleColor({
          'letter': '',
          'vision': '',
          'core': '',
          'diff': '',
          'infra': '',
          'team': 'bg-warning'
        });
      } else {
        setStyleColor({
          'letter': '',
          'vision': '',
          'core': '',
          'diff': '',
          'infra': '',
          'team': ''
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
                <Link to='/ve-chung-toi/gioi-thieu/' className={`text-decoration-none p-2 text-dark ${styleColor.letter}`} type="button">Giới thiệu</Link>
                <Link to='/ve-chung-toi/tam-nhin-su-menh/' className={`text-decoration-none p-2 text-dark ${styleColor.vision}`}>Tầm nhìn & Sứ mệnh</Link>
                <Link to='/ve-chung-toi/gia-tri-cot-loi/' className={`text-decoration-none p-2 text-dark ${styleColor.core}`} type="button">Giá trị cốt lõi</Link>
                <Link to='/ve-chung-toi/su-khac-biet/' className={`text-decoration-none p-2 text-dark ${styleColor.diff}`} type="button">Sự khác biệt</Link>
                <Link to='/ve-chung-toi/co-so-vat-chat/' className={`text-decoration-none p-2 text-dark ${styleColor.infra}`} type="button">Cơ sở vật chất</Link>
                <Link to='/ve-chung-toi/doi-ngu/' className={`text-decoration-none p-2 text-dark ${styleColor.team}`} type="button">Đội ngũ</Link>
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

export default About