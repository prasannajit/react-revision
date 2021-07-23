import * as React from "react";
import { nameModifier } from './helper';

interface GreetingsProps {
  userName: string;
}
const Greetings = (props: GreetingsProps) => {
  const handleClick = (event: any) => {
    alert(`Hello ${nameModifier.getUpdatedName(props.userName)}`);
  };
  return (<div>
    <h1>
      Hello {nameModifier.getUpdatedName(props.userName)}
    </h1>
    <button onClick={handleClick}>Click me for greetings</button>
  </div>
  );
}

export default Greetings;