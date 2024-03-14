// import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
      {/* Use That DateCounter to understood the UseReducer Hook in React Js */}
      {/* <DateCounter /> */}
    </div>
  );
}
