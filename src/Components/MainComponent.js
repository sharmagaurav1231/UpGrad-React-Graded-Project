import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from './Container';
import NoVideosContainer from './NoVideosContainer';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: null,
            flag: true,
            changeFlag: true,
            commentFlags: true
        };
        this.nbox = [];
        this.cbox = [];
    }

    changeCommentStates = () => {
        this.setState({commentFlags:false});
    }

    setChangeFlag = () => {
        this.setState({changeFlag:false,commentFlags:false});
    }

    searchQuery = (data,checkVar) => {
        this.setState({search:data,flag:checkVar,changeFlag:true,commentFlags:true});
        this.nbox = [];
        this.cbox = [];
    }

    render() {
        //console.log(this.state.changeFlag);
        return (
            <div className="mainDisplay">
                <NavBar getSearch={this.searchQuery}/>
                { this.state.flag?
                    <Container query={this.state['search']} changeFlags={this.state.changeFlag} setChangeFlag={this.setChangeFlag} changeCommentStates={this.changeCommentStates} commentFlags={this.state.commentFlags} nbox={this.nbox} cbox={this.cbox}/>
                    :
                    <NoVideosContainer/>
                }
            </div>
        );
    }
}

export default MainComponent;