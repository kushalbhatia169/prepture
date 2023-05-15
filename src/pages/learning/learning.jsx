import React, { useState } from "react";
import LoadImage from "../../components/getImage";

export const Learning = (props) => {

  const [videoLink, setVideoLink] = useState(`${props.data.baseVideoLink}${props.data.youtubeLinks[0].id}`);
  const [videoLinkNumber, setVideoLinkNumber] = useState(props.data.youtubeLinks[0].selected);
    console.log(props.data.youtubeLinks[0].id)
  return (
    <div id="learning">
      <div className="container">
        <div className="section-title text-center">
          <h2>Learning With Prepture</h2>
          <p>
            At Prepture We value our young genration and provide learning material to them for there better future.
          </p>
        </div>
        <div className="video-responsive-section">
            <div className="video-responsive">
                <iframe
                    src={videoLink}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className="link-list">
                <h3>Reskill yourself With Prepture...</h3>
                <ul>
                    {
                        props.data ? props.data.youtubeLinks.map((item, index) => {
                            return (<>
                                <li id={`${item.id}${index}`} className={videoLinkNumber === item.selected ? 'video-link-active': ""}>
                                    <span><b>{index+1}</b></span>
                                    <img  className="youtube-img" src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} alt="..."/>
                                    <button onClick={() => {
                                        setVideoLink(`${props.data.baseVideoLink}${item.id}`);
                                        setVideoLinkNumber(item.selected);
                                    }}>{item.text}</button>
                                </li>
                                {index === props.data.youtubeLinks.length - 1 ? <div className="view-more-div">
                                    <a className="view-more-button" href="https://www.youtube.com/watch?v=qBZvB9FWycU&list=PLAiGxBlpx8IeO0G-YlgxMjNbaw9VvXJ5x" target="blank">View More</a>
                                </div>: null}
                            </>
                            )
                        }) : <span>...loading</span>
                    }
                </ul>
            </div>
        </div>
        <div className="learn-more-link">
            <a
                href={props.data.learnMoreLink}
                className="btn btn-custom btn-lg page-scroll"
            >
                Learn More In Youtube
            </a>{" "}
        </div>
      </div>
    </div>
  );
};
