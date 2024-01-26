import React, { useEffect, useState } from "react";

const App = () => {
  const [words, setWords] = useState([]);
  console.log(words ,"words")

  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((words) => {
        setWords(words);
      });
  }, []);

  return (
    <main>
      {/* {words.map((word) => (
        <span className="words" key={words.id}>
          {word.description}
        </span>
      ))} */}
    </main>
  );
};

export default App;
