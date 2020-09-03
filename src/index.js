import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App"
import * as serviceWorker from "./serviceWorker";
import "tachyons"
import {Provider,connect} from "react-redux";
import {createStore} from "redux";
import { searchRobots } from "./reducers";



const store = createStore(searchRobots);  //create store with all the reducers
// ReactDOM.render(
//   <div >
//     <React.StrictMode>
//       <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//       <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
//       <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
//     </React.StrictMode>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     {robots.map((robot) => (
//       <React.StrictMode>
//         <Card id={robot.id} name={robot.nameÎ} email={robot.email} />
//       </React.StrictMode>
//     ))}
//   </div>,

//   document.getElementById("root")
// );

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));//pass store down the line using provider

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
