import "./Button.css";

const Button = (props) => {
  return <button onClick={props.callAPI}>Generate Joke</button>;
};

export default Button;
