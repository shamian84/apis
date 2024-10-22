import { useEffect, useState } from "react";

function App() {
  const [userData, setUserdata] = useState([]);
  async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setUserdata(json);
      // console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <span className="text-black text-4xl font-bold">APIs</span>
      {/* <button onClick={getData}>submit</button> */}

      {userData.map((value) => {
        console.log(value);
        return <div>{value.name}</div>;
      })}
    </>
  );
}

export default App;
