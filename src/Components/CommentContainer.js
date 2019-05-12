import React, { Component } from 'react';

class CommentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
        this.commentBox = [];
    }
    render() {
        if(!this.props.changeFlags){this.commentBox=this.props.cbox;}
        return(
            <div className="commentSection">
                <div className="commentSection">
                    <form name="commentForm" id="comForm">
                        <span className="comLabel">Comments</span>
                        <div className="comInput">
                             <input type="text" placeholder="Your Name" id="comName" ref="comName"/>                                
                             <textarea id="comment" placeholder="Your Comment" rows="1" ref="comment"></textarea>
                        </div>
                        <div className="comBtn">
                            <button type="button" id="btnCom" onClick={this.addComment}>Comment</button>
                            <button type="reset">Cancel</button>
                        </div>
                    </form>
                </div>
                <div className="iconTitle">
                    <i className="fa fa-user"></i>
                    {this.props.videoObject ?
                        <span className="channelTitled">{this.props.videoObject.snippet.channelTitle}</span>
                        :
                        <span className="channelTitled">{this.props.query.items[0].snippet.channelTitle}</span>
                    }
                </div>
                <div ref="listCommentss" className="listComments">
                    {this.props.changeFlags?
                        this.commentBox
                        :
                        null
                    }
                </div>
            </div>
        );
    }

    addComment = () => {
        if(this.refs.comName.value === '' || this.refs.comment.value === '') {
            this.refs.comName.setAttribute('class','required');
            this.refs.comment.setAttribute('class','required');
        } else {
            this.refs.comName.removeAttribute('class');
            this.refs.comment.removeAttribute('class');
            this.commentBox.push(<div className="singleComment" key={this.refs.comName.value}><p className="nameComment">{this.refs.comName.value}</p><p className="headComment">{this.refs.comment.value}</p></div>);
            this.refs.comName.value = '';
            this.refs.comment.value = '';
            this.props.setCommentFlag();
        }
        
    }
}

export default CommentContainer;