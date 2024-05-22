import toast from "react-hot-toast";
import { useState } from "react";
import style from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Sorry, input is emty. Please tru again!");
      return;
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        value={query}
        onChange={handleInputChange}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
      />
      <button className={style.button} type="submit">
        Search
      </button>
    </form>
  );
};

