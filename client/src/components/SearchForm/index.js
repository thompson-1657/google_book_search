import React from "react";

function SearchForm() {
  return (
  
    <form>
    <div class="form-group">
      <label for="bookSearch">Book Search</label>
      <input type="bookSearch" class="form-control" id="bookSearch" aria-describedby="bookSearchHelp" placeholder="Search for a Book"></input>
    </div>
   <button type="submit" class="btn btn-primary">Search</button>
   </form>
  
  );
}

export default SearchForm;