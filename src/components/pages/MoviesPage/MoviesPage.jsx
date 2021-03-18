import { useState } from "react";

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("must be submited:", searchQuery);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="serach" value={searchQuery} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default MoviesPage;
