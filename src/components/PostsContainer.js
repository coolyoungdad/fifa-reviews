import React, {
    useEffect,
    useState
} from 'react';
import Post from './Post';
import Axios from 'axios';
require('dotenv').config()


function PostsContainer() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const APP_HOST = process.env.REACT_APP_APP_HOST;
            console.log(APP_HOST)

            const result = await Axios.get('/api/');
            console.log(result);
            setPosts(result.data.map((data, i) => {
                console.log(data)
                return <Post {...data} key={i} />
                
            }));
        }
        fetchData()
    }, []);
    return <div > {
        posts
    } < /div>
}

export default PostsContainer