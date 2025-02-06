import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchMoviesApp from "./SearchMoviesApp";
import "./styles.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchMoviesApp />
  </StrictMode>
);
