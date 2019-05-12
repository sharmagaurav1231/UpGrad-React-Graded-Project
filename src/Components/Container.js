import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import ListContainer from './ListContainer';
import './Container.css';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            changeFlag:false,
        }
    }

    getVideoObject = (object) => {
        this.setState({changeFlag:true,videoObject:object});
    } 
    
    render() {

        let {query,changeFlags} = this.props;
        return (
            <div className="mainContainer">
                {
                    query && !changeFlags && this.state.changeFlag? <VideoContainer query={this.props.query} videoObject={this.state.videoObject} changeFlags={this.props.commentFlags} cbox={this.props.cbox} setCommentFlag={this.props.setCommentFlag}/> 
                    : 
                    query && changeFlags ? <VideoContainer query={this.props.query} changeFlags={this.props.commentFlags} cbox={this.props.cbox} setCommentFlag={this.props.setCommentFlag}/> : null
                }
                {query ? <ListContainer query={this.props.query} getVideoObject={this.getVideoObject} setChangeFlag={this.props.setChangeFlag}/> : null}
            </div>
        );
    }
}

export default Container;