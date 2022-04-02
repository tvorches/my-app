import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 4, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' },
    ];
    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((counters) => counters.id !== id);
        setCounters(newCounters);
    };
  
    const handleIncrement = (id) => {
        const newCountersIncrement = counters.map((counter) => {
            return counter.id === id ? {...counter, value: counter.value + 1} : counter
        })
        setCounters(newCountersIncrement);
    }

    const handleDecrement = (id) => {
        const newCountersDecrement = counters.map((counter) => {
            return counter.id === id ? {...counter, value: counter.value - 1} : counter
        })
        setCounters(newCountersDecrement);
    };
    const handleReset = () => {
        setCounters(initialState);
    };
    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}>
                Сброс
            </button>
        </>
    );
}
export default CountersList;