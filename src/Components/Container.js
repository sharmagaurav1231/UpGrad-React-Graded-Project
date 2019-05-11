import React, { Component } from 'react';
import InfoContainer from './InfoContainer';
import VideoContainer from './VideoContainer';
import ListContainer from './ListContainer';
import './Container.css';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
    }

    
    
    render() {

        let {query,flag} = this.props;

        return (
            <div className="mainContainer">
                {query && flag ? <VideoContainer query={this.props.query} flag={this.props.flag}/> : null}
                {query && flag ? <ListContainer query={this.props.query}/> : null}
                <InfoContainer/>
            </div>
        );
    }
}

export default Container;