import React, { Component} from 'react';
import './VideoContainer.css';
import CommentContainer from './CommentContainer';

class VideoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoFlag: true,
        }
    }
    render() {
        
        let{videoObject} = this.props;

        if(!this.props.changeFlags){this.changeHeart(this.props.changeFlags);}

        return (
            <div className="videoContainer">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="videoPlayer">
                    {videoObject ? 
                        <iframe id="player" allowFullScreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src={"https://www.youtube.com/embed/"+this.props.videoObject.id.videoId+"?enablejsapi=1&amp;widgetid=1"} frameBorder="0"></iframe> 
                        :
                        <iframe id="player" allowFullScreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src={"https://www.youtube.com/embed/"+this.props.query.items[0].id.videoId+"?enablejsapi=1&amp;widgetid=1"} frameBorder="0"></iframe>
                    }
                </div>
                <div className="mainTitleSection">
                    <div className="title">
                        {videoObject ?
                            <p className="videoTitle">{this.props.videoObject.snippet.title}</p>
                            :
                            <p className="videoTitle">{this.props.query.items[0].snippet.title}</p>
                        }    
                        {videoObject ?
                            <p className="channelTitle">{this.props.videoObject.snippet.channelTitle}</p>
                            :
                            <p className="channelTitle">{this.props.query.items[0].snippet.channelTitle}</p>
                        } 
                    </div>
                    <i className="fa fa-heart-o fa-lg" onClick={this.changeHeart} ref="heartIcon"></i>
                </div>  
                <CommentContainer query={this.props.query} videoObject={this.props.videoObject} changeFlags={this.props.changeFlags} cbox={this.props.cbox} setCommentFlag={this.props.setCommentFlag}/>
            </div>
        );
    }

    changeHeart = (flag) => {

        if(this.refs.heartIcon) {

            if(flag && this.refs.heartIcon.className === "fa fa-heart-o fa-lg") {
                this.refs.heartIcon.setAttribute('class','fa fa-heart fa-lg');
            }
            else {
                this.refs.heartIcon.setAttribute('class','fa fa-heart-o fa-lg');
            }
        }
    }
    
}

export default VideoContainer;