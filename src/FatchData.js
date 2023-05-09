import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FetchData() {
  const [records, setRecord] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {" "}
            {list.id} . {list.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
