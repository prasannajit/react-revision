import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from './components/app';
import Count from './profiler';
import Welcome from './reference';
import ToDoList from './windowing';
import Bank from './bank';

ReactDOM.render(<Bank/>, document.getElementById("root"));