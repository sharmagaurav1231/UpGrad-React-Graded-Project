import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            val: "upgrad",
            flag: true,
            api_key:"AIzaSyBl-pWcEn-pfB89ll5WGw8a364jbmUiIVw"
        };
        this.searchResults = this.searchResults.bind(this);
    }

    async searchResults() {
        const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q="+this.state['val']+"&type=video&videoDefinition=high&key="+this.state.api_key;
        const res = await fetch(url);
        const data = await res.json();
        if(data.pageInfo.totalResults === 0) {
            this.setState({flag:false});
        }
        else {
            this.setState({flag:true});
        }
        this.props.getSearch(data,this.state['flag'],false);
    }

    setSearch = (event) => {
        this.setState({val:event.target.value});
    }

    async componentDidMount() {
        const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q="+this.state['val']+"&type=video&videoDefinition=high&key="+this.state.api_key;
        const res = await fetch(url);
        const data = await res.json();
        this.setState({val:"upgrad",flag:true});
        this.props.getSearch(data,this.state['flag'],true);
    }

    render() {

        return (
            <div className="navBar">
                <input type="text" placeholder="Search" className="searchBar" onChange={this.setSearch} defaultValue={this.state.val} required/>&nbsp;
                <button type="submit" className="searchBtn" onClick={this.searchResults}>Search</button>
            </div>
        );
    }

}

export default NavBar;