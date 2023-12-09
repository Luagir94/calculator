import "./App.css";
import CalculatorBody from "./components/CalculatorBody";

function App() {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center ">
        <CalculatorBody />
      </div>

      <div className="py-1 text-sm mx-auto  text-white text-center">
        {" "}
        ©{new Date().getFullYear()} Luciano Giraudi. All rights reserved.
      </div>
    </>
  );
}

export default App;
