import React, { Component} from 'react';
import './ListContainer.css';

class ListContainer extends Component {
    
    render() {

        const listItems = this.props.query.items.map((d) => <li key={d.snippet.title}>
            <div className="videoList">
                <img className="image" src={d.snippet.thumbnails.medium.url} alt={this.props.query.items[0].snippet.title}/>
                <div className="titles">
                    <span className="vTitle" id={d.id.videoId} onClick={this.changeVideo}>{d.snippet.title}</span>
                    <span className="cTitle">{d.snippet.channelTitle}</span>
                </div>
            </div>
        </li>);

        return (
            
            <div className="listContainer">
                <ol>
                    {listItems}
                </ol>
            </div>
        );
    }

    changeVideo = (event) => {
        console.log(event.target.id);
    }
}

export default ListContainer;