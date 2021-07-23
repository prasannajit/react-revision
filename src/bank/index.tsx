import React, { ChangeEvent, useReducer, useState } from 'react';

enum BANK_OPERATIONS { DEPOSIT = "deposit", WITHDRAW = "withdraw" };
interface Action {
    type: string;
    payload?: { [key: string]: any }
}

const Bank = () => {
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [depositAmount, setDepositAmount] = useState(0);

    const bankReducer = (state: number, action: Action) => {
        if (action.type === BANK_OPERATIONS.DEPOSIT) {
            return state + depositAmount;
        }
        if (action.type === BANK_OPERATIONS.WITHDRAW) {
            return state - withdrawAmount;
        }
        return state;
    };

    const [totalMoney, dispatch] = useReducer(bankReducer, 0);

    const handleChange = (name: string, event: ChangeEvent<HTMLInputElement>) => {
        console.log(name);
        if (name === BANK_OPERATIONS.DEPOSIT) {
            setDepositAmount(parseInt(event.target.value) || 0);
        } else {
            setWithdrawAmount(parseInt(event.target.value) || 0);
        }
    };

    return (
        <section>
            <h2>Your current money is {totalMoney}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="text" value={depositAmount} onChange={handleChange.bind(null, BANK_OPERATIONS.DEPOSIT)}></input>
                    <button onClick={() => dispatch({ type: BANK_OPERATIONS.DEPOSIT })}>Deposit</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input type="text" value={withdrawAmount} onChange={handleChange.bind(null, BANK_OPERATIONS.WITHDRAW)}></input>
                    <button onClick={() => dispatch({ type: BANK_OPERATIONS.WITHDRAW })}>Withdraw</button>
                </div>
            </div>
        </section>
    )
};

export default Bank;