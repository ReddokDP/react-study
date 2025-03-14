interface CountProps {
  count: number;
}
export const Count = ({ count }: CountProps) => {
  return <h1> {count} </h1>;
};
