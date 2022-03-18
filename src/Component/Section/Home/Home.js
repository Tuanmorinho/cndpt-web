import React from 'react'
import Course from './Course'
import InformationBlock from './InformationBlock'
import InformationDetail from './InformationDetail'
import IntroVideo from './IntroVideo'
import Slide from './Slide'
import Trust from './Trust'

function Home() {
    return (
        <>
            <Slide />
            <InformationBlock />
            <InformationDetail />
            <IntroVideo />
            <Course />
            <Trust />
        </>
    )
}

export default Home