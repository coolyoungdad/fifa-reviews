import React, {
    useEffect,
    useState
} from 'react';
import Post from './Post';
import Axios from 'axios';

function PostsContainer() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            baseUrl = process.env.baseURL || "http://localhost:3001"

            const result = await Axios.get(baseUrl);
            setPosts(result.data.map((data, i) => {
                console.log(data)
                console.log(result)
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