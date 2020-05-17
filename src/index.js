import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail.js'
import faker from 'faker';
import ApprovalCard from './ApprovalCard.js';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    faker={faker} 
                    timeAgo={'Today at 7:00PM'}  
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    faker={faker} 
                    timeAgo={'Today at 8:00PM'}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    faker={faker} 
                    timeAgo={'Today at 9:00PM'} 
                />
            </ApprovalCard>
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'));