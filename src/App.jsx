import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { data } from "./api/data";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex justify-c
      enter items-center p-3 bg-orange-400 text-white text-2xl "
      >
        Кулинарные рецепты
      </div>
      <div className="flex flex-col gap-4 m-auto items-center">
        {data.map((receipt, index) => (
          <Card key={receipt.name} id={index} text={receipt.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
