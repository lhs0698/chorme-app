const searchInput = document.getElementById("search-input");

const showSearchResult = () => {
  let searchWord = searchInput.value;

  // 구글 검색
  window.location.href = `https://www.google.com/search?q=${searchWord}`
  
  // 네이버 검색  
  // window.location.href = `https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=${searchWord}`;
  searchWord = "";
};

const enterKey = (event) => {
  if (event.code === "Enter") {
    showSearchResult();
  }
};

searchInput.addEventListener("keypress", (event) => {
  enterKey(event);
});
