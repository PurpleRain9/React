import { useState } from "react";
import PropTypes from 'prop-types';
function StateChild (props) {

    const [counter, setCounter] = useState(props.counter);

    // Setting Initial State from Props or Functions
    const initialValue = () => {
        // perform some expensive calculation;
        return props.someState * 3;
    };
    const [result , setResult] = useState(initialValue);


    // Multiple State Variables;
    const [name , setName] = useState('Alice');
    const [age, setAge] = useState(20);
    const multipleState = () => {
        setName('Hein');
        setAge(30);
    }

    // Updating State Based on Previous State;
    const [count , setCount] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);

    };
    const decreaseCounter = () => {
        setCounter(counter - 1);
    }
    const resetCounter = () => {
        setCounter(0);
    }
    return (<>
       <div className="flex flex-col items-center border mb-6">
        <h3 className="text-center mb-4 font-bold text-xl">{counter}</h3>
            <div className="py-2">
       <button onClick={increaseCounter} className="bg-blue-400 py-2 px-2 border rounded-md text-white">Increase Counter</button>
       <button onClick={decreaseCounter} className="bg-blue-400 py-2 px-2 border rounded-md text-white">Decrease Counter</button>
       <button onClick={resetCounter} className="bg-blue-400 py-2 px-2 border rounded-md text-white">Reset Counter</button>
       </div>
       </div>

        <div className="border flex flex-col items-center justify-center mb-6">
            <p>Setting Initial State from Props or Functions</p>
            <h3 className="text-2xl font-bold">Result: {result}</h3>
            <button onClick={() => setResult(result * 2)} className="bg-blue-400 py-2 px-2 border rounded-md text-white">Reset Counter</button>

        </div>

        <div className="border flex flex-col items-center justify-center mb-6">
            <p>Multiple State Variables</p>
            <h3 className="text-2xl font-bold">Name: {name}</h3>
            <h3 className="text-2xl font-bold">Age: {age}</h3>
            <button onClick={() => multipleState()} className="bg-blue-400 py-2 px-2 border rounded-md text-white">Reset Counter</button>

        </div>

        <div className="border flex flex-col items-center justify-center mb-6">
            <p>Updating State Based on Provious State</p>
            <h3 className="text-2xl font-bold">Count: {count}</h3>
            <button onClick={() => setCount(incCount => incCount + 1)} className="bg-blue-400 py-2 px-2 border rounded-md text-white">Reset Counter</button>

        </div>


    </>)

    
}

// StateChild.propTypes = {
//     counter: PropTypes.number,
// };
StateChild.propTypes = {
    counter: PropTypes.number,
    someState: PropTypes.number,
    
};

export default StateChild;