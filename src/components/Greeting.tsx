import * as React from "react";

interface GreetingsProps {
  userName: string;
}
const Greetings = (props: GreetingsProps) => (
  <div>
    <h1>
      Hello {props.userName}
    </h1>
  </div>
);

export default Greetings;