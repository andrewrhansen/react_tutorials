import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return ( 
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    profilePic={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    text="Nice post!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    profilePic={faker.image.avatar()}
                    author="Alex"
                    timeAgo="Today at 5:50AM"
                    text="Very funny!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    profilePic={faker.image.avatar()}
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    text="Great to see you!"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));