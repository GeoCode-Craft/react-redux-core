import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App=()=>{
    return <div className="ui container comments">
    <ApprovalCard>
       <CommentDetail 
        author="Brian Pondi" 
        timeAgo="Today at 11:00 AM" 
        avatar ={faker.image.avatar()} 
        comment="Awesome content"
        />
    </ApprovalCard>

    <ApprovalCard>
       <CommentDetail 
        author="Faith Muchembi" 
        timeAgo="Today at 10:40 AM" 
        avatar ={faker.image.avatar()} 
        comment="Nice blog" 
        />
    </ApprovalCard>
    
    <ApprovalCard>
       <CommentDetail 
        author="Mohammed Mwinyi" 
        timeAgo="Yesterday at 03:00 PM" 
        avatar ={faker.image.avatar()} 
        comment="I love it"/>
    </ApprovalCard>
    </div>
};

ReactDOM.render(<App />, document.querySelector('#root'))