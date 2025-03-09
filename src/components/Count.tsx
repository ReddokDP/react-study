interface CountProps {
  count: number;
}
const Count = ({ count }: CountProps) => {
  return <h1> {count} </h1>;
};

export default Count;
