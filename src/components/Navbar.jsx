import React from 'react';

function Navbar({setPosts, posts, allPosts}) {
  function filterByAuthor(event) {
    const text = event.target.value.trim().toLowerCase()
    if (!text) setPosts(allPosts)
    else setPosts(posts.filter((post) => post.author.toLowerCase().includes(text)));
  }
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid d-flex justify-content-center">
          <form className="d-flex" role="search">
            <input
              onKeyUp={filterByAuthor}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
