import "./App.css";
import { Post } from "./components/Post/Post.tsx";
import { useFetch } from "./components/useFetch.ts";

const postsUrl =
  "https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10";

const postsArrayUrl = [
  "https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10",
  "https://jsonplaceholder.typicode.com/posts?_start=20&_limit=10",
  "https://jsonplaceholder.typicode.com/posts?_start=30&_limit=10",
];

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const App = () => {
  const { data: posts, isLoading, error } = useFetch<Post>(postsArrayUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="post-container">
      {posts?.map(({ title, body, id }: Post) => (
        <Post body={body} title={title} key={id} />
      ))}
    </div>
  );
};

/*
Нужно дописать useFetch таким образом, чтобы он мог принимать url в виде строки или в виде массива строк.
Если URL это массив строк, то кидаем запрос через Promise.all на все сразу, возвращаться должен одинаковый контракт всегда - объект, где есть поля: data, isLoading, error
Task* типизировать useFetch, когда он возвращает data надо понять что он возвращает через дженерики
 */
