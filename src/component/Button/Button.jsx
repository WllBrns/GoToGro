import "./Button.css";

export const Button  = ({label, onClick, className}) => {

  return (
      <button onClick={onClick} className={className} type="button">{label}</button>
  );
}
