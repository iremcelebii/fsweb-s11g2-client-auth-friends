import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "workintech",
    password: "wecandoit",
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:9000/api/login", formData)
      .then((res) => {
        localStorage.setItem("s11g2", res.data.token);
        history.push("/friends");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <h2 className="text-xl font-bold p-2">Giriş Yap</h2>
      <form className="text-right" onSubmit={handleSubmit}>
        <label>
          USERNAME
          <input
            onChange={handleChange}
            name="username"
            value={formData.username}
            type="text"
          />
        </label>
        <label>
          PASSWORD
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}
