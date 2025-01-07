import { contents } from "./assets/data/contents";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Tab from "./components/Tab";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-[80px_1fr] grid-rows-
    [80px 40px 1fr w-screen] h-screen">
      <Header />
      <Nav />
      <Tab />
      <main className="w-full p-[20px] flex flex-wrap
      items-start">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </main>
    </div>
  );
}

export default App;
