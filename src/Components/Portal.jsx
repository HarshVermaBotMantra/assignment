import ReactDOM from "react-dom";

export const Portal = ({ children }) => {
  const domNode = document.getElementById("portal");
  return ReactDOM.createPortal(children, domNode);
};
