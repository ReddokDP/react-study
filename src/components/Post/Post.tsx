import "./index.css";

interface PostProps {
  title: string;
  body: string;
}

export const Post = ({ title, body }: PostProps) => {
  return (
      <div >
        <h4 className={'title'}>{title}</h4>
        <div>{body}</div>
      </div>
  );
};
