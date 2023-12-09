import CalculatorKey from "../CalculatorKey";
import { useCalculator } from "../../hooks/useCalculator.tsx";

const CalculatorBody = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();
  return (
    <div className="w-[300px] h-[500px] bg-opacity-10  bg-gray-100 rounded-xl backdrop-filter backdrop-blur-lg p-5  mx-auto text-center text-gray-900">
      <div className="h-1/4 bg-gray-100 bg-opacity-10 px-4  rounded-xl text-left ">
        <div>
          <div className="text-gray-200 text-4xl mb-1 ">{formula}</div>
          {formula === prevNumber ? (
            <div> </div>
          ) : (
            <div className="text-gray-500 text-2xl mb-1 ">{prevNumber}</div>
          )}
          <div className="text-gray-500 text-lg mb-1">{prevNumber}</div>
        </div>
      </div>
      <div className=" h-3/4 grid grid-flow-row auto-rows-auto  items-center grid-cols-4  ">
        <CalculatorKey type={"gray"} value={"C"} onClick={clean} />
        <CalculatorKey type={"gray"} value={"del"} onClick={deleteOperation} />
        <CalculatorKey
          type={"gray"}
          value={"%"}
          onClick={() => console.log("!")}
        />
        <CalculatorKey type={"blue"} value={"÷"} onClick={divideOperation} />

        <CalculatorKey value={"7"} onClick={() => buildNumber("7")} />
        <CalculatorKey value={"8"} onClick={() => buildNumber("8")} />
        <CalculatorKey value={"9"} onClick={() => buildNumber("9")} />
        <CalculatorKey type={"blue"} value={"x"} onClick={multiplyOperation} />

        <CalculatorKey value={"4"} onClick={() => buildNumber("4")} />
        <CalculatorKey value={"5"} onClick={() => buildNumber("5")} />
        <CalculatorKey value={"6"} onClick={() => buildNumber("6")} />
        <CalculatorKey value={"-"} type={"blue"} onClick={subtractOperation} />

        <CalculatorKey value={"1"} onClick={() => buildNumber("1")} />
        <CalculatorKey value={"2"} onClick={() => buildNumber("2")} />
        <CalculatorKey value={"3"} onClick={() => buildNumber("3")} />
        <CalculatorKey value={"+"} type={"blue"} onClick={addOperation} />

        <CalculatorKey value={"-/+"} type={"gray"} onClick={toggleSign} />
        <CalculatorKey value={"0"} onClick={() => console.log("!")} />
        <CalculatorKey
          value={"="}
          doubleSize
          onClick={calculateResult}
          type={"blue"}
        />
      </div>
    </div>
  );
};

export default CalculatorBody;
