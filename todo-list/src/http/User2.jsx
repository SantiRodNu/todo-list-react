import "./style.css";
import { useEffect, useState } from "react";

const User2 = () => {
  const [user2, setUser2] = useState(null);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const getData2 = async () => {
      try {
        const response2 = await fetch(
          `https://randomuser.me/api/?results=15`
        );

        console.log(response2);

        if (!response2.ok) {
          throw new Error(`Hubo un error en el servidor`);
        }

        const data2 = await response2.json();
        setUser2(data2);

      } catch (error) {
        console.log(error);
        
      } finally {
        setLoading2(false);
      }
    };
    getData2();
  }, []);

  return (
    <div className="App">
      <h1>API Get</h1>
      {loading2 && <div>A moment please...</div>}
      <ul>
        {user2 &&
          user2.map((item, index) => (
            <li key={index}>
              <h3>{item.gender}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default User2;
