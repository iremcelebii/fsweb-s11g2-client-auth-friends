import { useHistory } from "react-router-dom";

export default function Logout() {
  localStorage.removeItem("s11g2");
  const history = useHistory();
  history.push("/login");
  return <div></div>;
}
