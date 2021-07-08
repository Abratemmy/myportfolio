import React,  {useState, useEffect} from 'react';
import project from './data/data.js';


const Learnmore = (props) =>{
    const [post, setPost] = useState({
        id :"",
        dataImage: "",
        temmy: "",
        code: " "
    });

    const[postId, setPostId] = useState('');

    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = project.data.find(post=>post.id == postId);
        setPost(post);
        setPostId(postId)
    },[post,props.match.params.postId]);

    if (post.dataImage===""){
        return null;
    }


    return (
        <div>
            {post.temmy}
        </div>
    )
}

export default Learnmore
