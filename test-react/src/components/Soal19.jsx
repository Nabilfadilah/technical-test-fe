// Soal 19: Fetch API
// Soal:
// Ambil data dari API https://jsonplaceholder.typicode.com/posts dan tampilkan title-nya.

import {useEffect, useState} from "react";

const Soal19 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Soal19;
