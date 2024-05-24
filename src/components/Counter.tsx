import { useCounterStore } from "../app/counterStore";

const Counter = () => {
    const { count } = useCounterStore((state) => state);
    return <OtherComponent count={count} />
};

const OtherComponent = ({ count }: { count: number }) => {
    const { incrementAsync, decrement, increment } = useCounterStore((state) => state);

    return <div className="container">
        <button className="counter_btn" onClick={incrementAsync}>+ (Async)</button>
        <button className="counter_btn" onClick={increment}>+</button>
        <span className="counter_txt">{count}</span>
        <button className="counter_btn" onClick={decrement}>-</button>
    </div>
};

export default Counter;