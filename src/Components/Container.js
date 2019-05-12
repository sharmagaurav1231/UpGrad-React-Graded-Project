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
            commentFlag: true
        }
    }

    getVideoObject = (object) => {
        this.setState({changeFlag:true,videoObject:object,commentFlag:true});
    } 

    changeCommentState = () => {
        this.setState({commentFlag:false});
    }
    
    render() {

        let {query,changeFlags} = this.props;

        return (
            <div className="mainContainer">
                {
                    query && !changeFlags && this.state.changeFlag? <VideoContainer query={this.props.query} videoObject={this.state.videoObject} changeCommentState={this.changeCommentState} changeFlag={this.state.commentFlag} changeCommentStates={this.props.changeCommentStates} changeFlags={this.props.commentFlags} nbox={this.props.nbox} cbox={this.props.cbox}/> 
                    : 
                    query && changeFlags ? <VideoContainer query={this.props.query} changeCommentState={this.changeCommentState} changeFlag={this.state.commentFlag} changeCommentStates={this.props.changeCommentStates} changeFlags={this.props.commentFlags} nbox={this.props.nbox} cbox={this.props.cbox}/> : null
                }
                {query ? <ListContainer query={this.props.query} getVideoObject={this.getVideoObject} setChangeFlag={this.props.setChangeFlag}/> : null}
            </div>
        );
    }
}

export default Container;