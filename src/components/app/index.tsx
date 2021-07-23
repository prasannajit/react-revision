import * as React from 'react';
import Greetings from "../greetings";
import Clock from "../clock";
import { Users } from '../users';
import { AddressForm } from '../addressForm';
import { AppContext } from '../context';

export const App = () => {
    // const [locale,setLocale]=React.useState('en-IE');
    // const handleChange = (event:any)=>{
    //     setLocale(event.target.value);
    // };
    // return (
    //     <div>
    //         <AppContext.Provider value={{ locale }}>
    //             <Greetings userName="Prasan" />
    //             <Clock></Clock>
    //             <Users users={["john", "jack", "jill", "raj"]}></Users>
    //             <AddressForm></AddressForm>
    //             <select value={locale} onChange={handleChange}>
    //                 <option value="en-IE">Ireland</option>
    //                 <option value="en-GB">UK</option>
    //                 <option value="pl-PL">Poland</option>
    //             </select>
    //         </AppContext.Provider>
    //     </div>
    // )

    // const [count,setCount] = React.useState(0);
    // if(count===0){
    //     setCount((prevState)=>{
    //         console.log(`prevState1 is ${prevState}`);
    //         return prevState+1;
    //     });
    //     console.log(`State count is ${count}`);
    //     setCount((prevState)=>{
    //         console.log(`prevState2 is ${prevState}`);
    //         return prevState+1;
    //     });
    //     console.log(`State count is ${count}`);
    //     setCount((prevState)=>{
    //         console.log(`prevState3 is ${prevState}`);
    //         return prevState+1;
    //     });
    //     console.log(`State count is ${count}`);
    // }
    // console.log(`outside State count is ${count}`);
    // return (
    //     <div>
    //         Hello World
    //     </div>
    // )
};