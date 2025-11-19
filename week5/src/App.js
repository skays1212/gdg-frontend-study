 import { useState, useEffect } from 'react';
import Post from './Post';
import EmptyData from './EmptyData';
import Loading from './Loading';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (posts.length === 0) {
    return <EmptyData />;
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default App;
