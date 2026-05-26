import React from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <>
    <p>
      This is the starting template for the second assessment in the Web
      Application Development course
    </p>
  </>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
