import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function FriendsList() {
  const history = useHistory();
  const [friends, setFriends] = useState([]);
  let token = localStorage.getItem("s11g2");
  //   useEffect(() => {
  //     if (token) {
  //       axios
  //         .get("http://localhost:9000/api/friends", {
  //           headers: { Authorization: token },
  //         })
  //         .then((res) => {
  //           console.log(res.data);
  //           setFriends(res.data);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     } else {
  //       history.push("/login");
  //     }
  //   }, []);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold p-2">FRIENDS LIST</h2>

      <div className="py-6">
        {friends.map((u) => (
          <div key={u.id}>
            <div>
              -{u.name}-{u.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
