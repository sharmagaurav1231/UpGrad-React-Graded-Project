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
        this.cbox = [];
    }

    setCommentFlag = () => {
        this.setState({commentFlags:true});
        this.cbox = [];
    }

    setChangeFlag = () => {
        this.setState({changeFlag:false,commentFlags:false});
        this.cbox = [];
    }

    searchQuery = (data,checkVar,cFlag) => {
        this.setState({search:data,flag:checkVar,changeFlag:true,commentFlags:cFlag});
        this.cbox = [];
    }

    render() {
        //console.log(this.state.changeFlag);
        return (
            <div className="mainDisplay">
                <NavBar getSearch={this.searchQuery}/>
                { this.state.flag?
                    <Container query={this.state['search']} changeFlags={this.state.changeFlag} setChangeFlag={this.setChangeFlag} commentFlags={this.state.commentFlags} cbox={this.cbox} setCommentFlag={this.setCommentFlag}/>
                    :
                    <NoVideosContainer/>
                }
            </div>
        );
    }
}

export default MainComponent;