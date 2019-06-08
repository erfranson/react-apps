import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';

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

            <CommentDetail author={faker.name.firstName()}/>
            <CommentDetail author={faker.name.firstName()}/>
            <CommentDetail author={faker.name.firstName()}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));