import React, { Component} from 'react';
import './VideoContainer.css';

class VideoContainer extends Component {

    render() {

        return (
            <div className="videoContainer">
                <div className="videoPlayer">
                    <iframe id="player" allowFullScreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src={"https://www.youtube.com/embed/"+this.props.query.items[0].id.videoId+"?enablejsapi=1&amp;widgetid=1"} frameBorder="0"></iframe>
                </div>
                <div className="title">
                    <p className="videoTitle">{this.props.query.items[0].snippet.title}</p>
                    <p className="channelTitle">{this.props.query.items[0].snippet.channelTitle}</p>
                </div>
                <div className="commentSection">
                    <form name="commentForm" id="comForm">
                        <span className="comLabel">Comments</span>
                        <div className="comInput">
                            <input type="text" placeholder="Your Name" id="comName"/>
                            <textarea rows="1" id="comment" placeholder="Your Comment"></textarea>
                        </div>
                        <div className="comBtn">
                            <button type="button" id="btnCom">Comment</button>
                            <button type="button" onClick={this.hello}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    
    hello = () => {
        console.log(this.props.query.items[0].snippet.title);
    }

}

export default VideoContainer;