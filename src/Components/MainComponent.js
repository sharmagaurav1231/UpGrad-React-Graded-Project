import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from './Container';
import NoVideosContainer from './NoVideosContainer';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: null,
            flag: true
        };
    }

    searchQuery = (data,checkVar) => {
        this.setState({search:data,flag:checkVar});
        //console.log(this.state['search']);
    }

    // playVideo = (key) => {
    //     this.setState({})
    // }

    render() {
        return (
            <div className="mainDisplay">
                <NavBar getSearch={this.searchQuery}/>
                { this.state.flag?
                    <Container query={this.state['search']} flag={this.state['flag']}/>
                    :
                    <NoVideosContainer/>
                }
            </div>
        );
    }
}

export default MainComponent;