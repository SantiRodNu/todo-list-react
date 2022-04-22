import { useEffect } from "react";

const First = (props) => {
  const { name } = props;
  const message = `Hey, ${name}!`;

  useEffect(() => {
    document.title = `Hey, ${name}!`;
  }, [name]);

  return <div>{message}</div>;
};

export default First;
