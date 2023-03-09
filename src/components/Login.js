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

        console.log("selam1");
        history.push("/friends");
      })
      .catch((error) => console.log(error));

    setFormData({
      username: "",
      password: "",
    });
    console.log("selam2");
  }

  return (
    <div className="inline-block">
      <h2 className="font-black text-5xl mt-16 mb-2">LOGIN</h2>
      <div className="m-auto">
        <form className=" flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username" className="text-left">
            USERNAME
          </label>
          <input
            className="bg-black block text-white m-auto "
            onChange={handleChange}
            name="username"
            id="username"
            value={formData.username}
            type="text"
          />
          <label htmlFor="password" className="text-left">
            PASSWORD
          </label>
          <input
            className="bg-black block text-white m-auto"
            onChange={handleChange}
            name="password"
            id="password"
            value={formData.password}
            type="password"
          />

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
