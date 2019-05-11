import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from './Container';
import NoVideosContainer from './NoVideosContainer';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: null,
            changeFlag: true
        };
    }

    setChangeFlag = () => {
        this.setState({changeFlag:false});
    }

    searchQuery = (data,checkVar) => {
        this.setState({search:data,flag:checkVar,changeFlag:true});
    }

    render() {
        //console.log(this.state.changeFlag);
        return (
            <div className="mainDisplay">
                <NavBar getSearch={this.searchQuery}/>
                { this.state.flag?
                    <Container query={this.state['search']} changeFlags={this.state.changeFlag} setChangeFlag={this.setChangeFlag}/>
                    :
                    <NoVideosContainer/>
                }
            </div>
        );
    }
}

export default MainComponent;