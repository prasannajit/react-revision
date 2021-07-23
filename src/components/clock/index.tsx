import * as React from 'react';
import { AppContext } from '../context';

const Clock = () => {
    const appContext = React.useContext(AppContext);
    const [time, setTime] = React.useState(new Date().toLocaleDateString());

    const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString(appContext.locale));
    }, 1000);

    React.useEffect(()=>{
        return ()=>{
            clearInterval(timer);
        };
    });
    
    return (
        <div>Current time: <span>{time}</span></div>
    )
};

export default Clock;