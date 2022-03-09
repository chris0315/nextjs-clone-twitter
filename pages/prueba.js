import { useState, useEffect } from 'react';


export default function Prueba() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  console.log(post);
  return (
    <>
      <h1>hola data</h1>
      {post.length <= 0 ? (
        <p>cargando...</p>
      ) : (
        post.map((pos) => (
          <div key={pos.id}>
            <p>{pos.title}</p>
          </div>
        ))
      )}
      {/*post.length > 0 &&
        post.map((pos) => (
          <div key={pos.id}>
          <p>asa</p>
          </div>
        ))*/}
      <style jsx>{`
            p{
              color:${Number.parseInt(post.id) % 5 == 0 ? 'blue' : 'red'}
            }
          `}</style>
    </>
  );
}
