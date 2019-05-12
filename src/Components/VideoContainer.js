import React, { Component} from 'react';
import './VideoContainer.css';
import CommentContainer from './CommentContainer';

class VideoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoFlag: true
        }
        this.commentBox = [];
    }
    render() {
        
        let{videoObject} = this.props;

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
                    <i className="fa fa-heart-o"></i>   
                    <i className="fa fa-user"></i>  
                </div>
                <CommentContainer changeCommentState={this.props.changeCommentState} changeFlag={this.props.changeFlag} changeCommentStates={this.props.changeCommentStates} changeFlags={this.props.changeFlags} nbox={this.props.nbox} cbox={this.props.cbox}/>
            </div>
        );
    }
    
}

export default VideoContainer;