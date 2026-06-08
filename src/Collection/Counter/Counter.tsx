import { useReducer } from 'react';
import { counterReducer, initialState } from './CounterState';

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
            <h1>Counter</h1>

            <p>Count: {state.count}</p>
            <p>Step: {state.step}</p>

            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <input
                type="number"
                value={state.step}
                onChange={(event) =>
                    dispatch({ type: 'setStep', step: Number(event.target.value) })
                }
            />
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    );
}

export default Counter;
