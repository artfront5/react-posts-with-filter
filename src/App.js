import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

let allPosts = null;
function App(props) {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    async function fetchAll() {
      let response = await fetch('http://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Не удалось доставить данные о пользователях');
      const users = await response.json();

      response = await fetch('http://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Не удалось доставить данные о статьях');
      let posts = await response.json();
      posts = posts.map((post) => {
        const userArr = users.filter((user) => user.id === post.userId); // находим автора
        post.author = userArr.length ? userArr[0].name : 'Автор неизвестен';
        return post;
      });
      allPosts = posts;
      setPosts(posts);
    }
    fetchAll();
  }, []);
  return (
    <>
      <Navbar setPosts={setPosts} posts={posts} allPosts={allPosts} />
      <main className="container d-flex justify-content-between flex-wrap mt-5 ">
        {posts.map((el) => (
          <Card {...el} />
        ))}
      </main>
    </>
  );
}

export default App;
