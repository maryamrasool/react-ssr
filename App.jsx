import React, { useState, useEffect } from "react";

const App = () => {
  const [people, setPeople] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    fetch("https://adventuretimeapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <h1>Adventure Time</h1>
      {/* {people.map((person) => (
        <div>{person.fullname}</div>
      ))} */}
      {isMounted ? "Hello" : null}
    </div>
  );
};

export default App;
