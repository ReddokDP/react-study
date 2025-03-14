import "./App.css";
import { Post } from "./components/Post/Post.tsx";
import { useFetch } from "./components/useFetch.ts";

const postsUrl =
    "https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const App = () => {
  const { posts, isLoading, error } = useFetch(postsUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="post-container">
      {posts.map(({ title, body, id }: Post) => (
        <Post body={body} title={title} key={id} />
      ))}
    </div>
  );
};


/*



 */