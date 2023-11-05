

export const Search = () => {
  return (
    <div>
      <>
  <div className="search_wrap search_wrap">
    <div className="search_box">
      <input type="text" id="input" placeholder="Search Anime..." />
      <div className="btn btn_common" id="search-button">
        <i className="fas fa-search" />
      </div>
    </div>
  </div>
  <div id="page-found" style={{ marginTop: 30, fontWeight: "bold" }} />
  <div
    id="loader"
    style={{ marginTop: 20, textAlign: "center", fontWeight: "bold" }}
  >
    {" "}
  </div>
  <div id="anime-wrapper" />
</>
    </div>
  )
}
