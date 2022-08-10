import post1 from '../../Global/img/post1.jpeg'
import post2 from '../../Global/img/post2.jpeg'

import user1 from '../../Global/img/user1.png'

const Posts = () =>{
    return <div className="posts">
    
        <div class="post">
            <img src={post1}></img>
            <div class="caption">
                <img src={user1} className="userPic"></img>
                <h4 className="userName">Jane</h4>
                <p className="content">Architect & Engineer</p>
            </div>
        </div>

        <div class="post">
            <img src={post2}></img>
            <div class="caption">
                <img src={user1} className="userPic"></img>
                <h4 className="userName">John</h4>
                <p className="content">Architect & Engineer</p>
            </div>
        </div>

        <div class="post">
            <img src={post1}></img>
            <div class="caption">
                <img src={user1} className="userPic"></img>
                <h4 className="userName">Jane</h4>
                <p className="content">Architect & Engineer</p>
            </div>
        </div>

        <div class="post">
            <img src={post2}></img>
            <div class="caption">
                <img src={user1} className="userPic"></img>
                <h4 className="userName">John</h4>
                <p className="content">Architect & Engineer</p>
            </div>
        </div>

    </div>
}

export default Posts