import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function AddFriend() {
  const history = useHistory();
  let token = localStorage.getItem("s11g2");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    axios
      .post("http://localhost:9000/api/friends", formData, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
        history.push("/friends");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <h2 className="text-xl font-bold p-2">Giriş Yap</h2>
      <form className="text-right" onSubmit={handleSubmit}>
        <label>
          FRIEND NAME
          <input
            onChange={handleChange}
            name="name"
            value={formData.name}
            type="text"
          />
        </label>
        <label>
          FRIEND EMAİL
          <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            type="text"
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}
