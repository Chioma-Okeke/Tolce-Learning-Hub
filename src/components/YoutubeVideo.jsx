/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect } from "react";

function YoutubeVideo({videoFrameClass}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            const iframe = document.getElementById("youtube-iframe");
            if (iframe) {
                iframe.src += "&autoplay=1";
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <iframe
            id="youtube-iframe"
            height="350"
            src="https://www.youtube.com/embed/GfF2e0vyGM4?si=pnb5P_twj_xL5Ylg?autoplay=1&mute=1&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={videoFrameClass}
        ></iframe>
    );
}

export default YoutubeVideo;
