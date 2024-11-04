import React from "react";
import { createRoot } from "react-dom/client";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="bg-neutral-200 p-10 w-full h-full">
      <Table />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
