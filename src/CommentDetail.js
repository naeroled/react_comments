import React from 'react';


const CommentDetail = (props) => {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.faker.name.firstName()}
                    </a>

                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.faker.lorem.sentence()}</div>
                </div>

            </div>
        </div>
    );
};

export default CommentDetail;