import React from "react";
import { createRoot } from "react-dom/client";
import Table from "./components/Table";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="bg-neutral-200 sm:p-10 w-full h-full">
      <CustomCursor />
      <Table />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
