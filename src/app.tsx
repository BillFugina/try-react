import * as React from "react";
import * as ReactDOM from "react-dom";
import Howdy from 'components/Howdy'

ReactDOM.render(
  <Howdy name="World" enthusiasmLevel={3} />,
  document.getElementById("root")
);