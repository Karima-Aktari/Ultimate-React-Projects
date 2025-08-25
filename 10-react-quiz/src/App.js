import { useEffect } from "react";
import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "Loading",
};

function reducer(state, action) {}

function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  }, []);
  return (
    <div className="App">
      <DateCounter />

      {/* <Header />
      <Main /> */}
    </div>
  );
}

export default App;
