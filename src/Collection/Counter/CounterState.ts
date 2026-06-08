export type CounterState = {
    count: number;
    step: number;
};

export type CounterAction =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' }
    | { type: 'setStep'; step: number };

export const initialState: CounterState = {
    count: 0,
    step: 1,
};

export function counterReducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + state.step };
        case 'decrement':
            return { ...state, count: state.count - state.step };
        case 'reset':
            return initialState;
        case 'setStep':
            return { ...state, step: action.step };
    }
}
