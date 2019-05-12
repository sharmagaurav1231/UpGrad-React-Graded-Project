import React, { Component } from 'react';

class CommentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
        this.commentBox = [];
        this.nameBox = [];
    }
    render() {
        console.log(this.props.changeFlag,this.props.changeFlags);
       
        // {
        //     this.props.changeFlag && this.props.changeFlags?
        //     this.nameBox = this.nameBox
        //     :
        //     this.nameBox = this.props.nbox

        //     this.props.changeFlag && this.props.changeFlags?
        //     this.commentBox = this.commentBox
        //     :
        //     this.commentBox = this.props.cbox
            
        // }
        console.log(this.commentBox,this.nameBox); 
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
                <div ref="listCommentss" className="listComments">
                    {this.props.changeFlag && this.props.changeFlags?
                        this.nameBox = this.props.nbox
                        :
                        null
                    }
                    {this.props.changeFlag || this.props.changeFlags?
                        null
                        :
                        this.nameBox
                    }
                    {this.props.changeFlag && this.props.changeFlags?
                        this.commentBox = this.props.cbox
                        :
                        null
                    }
                    {this.props.changeFlag || this.props.changeFlags?
                        null
                        :
                        this.commentBox
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
            this.commentBox.push(<span>{this.refs.comment.value}</span>);
            this.nameBox.push(<span>{this.refs.comName.value}</span>);
            //console.log(this.nameBox);
            this.forceUpdate();
        }
        
    }
}

export default CommentContainer;