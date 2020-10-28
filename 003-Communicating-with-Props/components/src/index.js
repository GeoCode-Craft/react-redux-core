import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const App=()=>{
    return <div className="ui container comments">
       <CommentDetail author="Brian Pondi" timeAgo="Today at 11:00 AM" avatar ={faker.image.avatar()} comment="Awesome content"/>
       <CommentDetail author="Faith Muchembi" timeAgo="Today at 10:40 AM" avatar ={faker.image.avatar()} comment="Nice blog" />
       <CommentDetail author="Mohammed Mwinyi" timeAgo="Yesterday at 03:00 PM" avatar ={faker.image.avatar()} comment="I love it"/>
    </div>
};

ReactDOM.render(<App />, document.querySelector('#root'))