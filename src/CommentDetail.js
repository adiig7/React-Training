import React from 'react'

const CommentDetail = (props) => {
    return (
         <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src='https://source.unsplash.com/random' />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at {props.time}</span>
                    </div>
                <div className="text">{ props.comment}</div>
                </div>
            </div>
    )
}

export default CommentDetail;
