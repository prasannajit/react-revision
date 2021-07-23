import * as React from 'react';

type Callback = () => void;
const Display = ({ message }: { message: string }) => {
    return (<section>
        <article>
            <p>
                {message}
            </p>
        </article>
    </section>);
};

const Button = React.memo(({ label, onClickHandler }: { label: string, onClickHandler: Callback }) => {
    return (
        <button onClick={onClickHandler}>{label}</button>
    )
});

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = React.useCallback(() => {
        setCounter((prevCount) => prevCount + 1);
    }, []);
    const decrement = React.useCallback(() => {
        setCounter((prevCount) => prevCount - 1);
    }, []);
    const onRenderCb = (id:string,phase:string,actDuration:number,baseDuration:number,startTime:number,commitTime:number,interactions:any) => {
        console.log(`${id} ${phase} ${actDuration} ${baseDuration} ${startTime}`);
    };
    return (<section>
        <header>
            <h1>Your personal counter</h1>
        </header>
        <article>
            <React.Profiler id="Counter" onRender={onRenderCb}>
                <Display message={`The current value is ${counter}`} />
                <div style={{display:'flex',flexDirection:"column",width:"200px"}}>
                    <Button onClickHandler={increment} label="increment" />
                    <Button onClickHandler={decrement} label="decrement" />
                </div>
            </React.Profiler>
        </article>
    </section>)
};

export default Counter;