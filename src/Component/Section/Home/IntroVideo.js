import React from 'react'
import YouTube from 'react-youtube'

function IntroVideo() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const onReady = (e) => {
        e.target.pauseVideo();
    }

    return (
        <div className="jumbotron p-lg-5">
            <h1 className="display-6 text-center text-secondary">Một thoáng DHT</h1>
            <hr className="my-4" />
            <div className="container">
                <div className="d-flex justify-content-center">
                    <YouTube videoId="W4P8gl4dnrg" opts={opts} onReady={onReady} />
                </div>
            </div>
        </div>
    )
}

export default IntroVideo