import React from 'react';
import reactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    name="Adi"
                    time="08:00AM"
                    comment="Sexy picture"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    name="Dhru"
                    time="08:00PM"
                    comment="Ugly picture"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    name="AdiDhru"
                    time="02:00PM"
                    comment="Cute picture"
                />
            </ApprovalCard>
        </div>
    )
};

reactDOM.render(<App />, document.querySelector('#root'));