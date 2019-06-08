import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from "./approvalCard";

const App = () => {

    return (


        <div className="ui container comments">
            {/*the Naive with components approach*/}
            {/*<div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00PM
                        </span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>

                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00PM
                        </span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>*/}
            {/*better approach*/}
            <ApprovalCard>
                <h4>Warning!</h4>
                <p>Are you sure you want to do this.</p>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    timeAgo="Today at 4:45 PM"
                    userPost="Nice blog post!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    timeAgo="Yesterday at 5:45 PM"
                    userPost="Yo this didn't help me at all!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    timeAgo="Today at 7:00 AM"
                    userPost="Unfollowed!"
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));