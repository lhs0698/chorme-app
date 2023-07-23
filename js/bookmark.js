(function () {
  const newBookmarkForm = document.getElementById("bookmark-item-input-form");
  const bookmarkItemList = document.getElementById("bookmark-list");

  // 북마크 리스트 초기 설정
  let bookmarkList = [];
  localStorage.getItem("bookmarkList")
    ? (bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")))
    : localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));

  // 북마크 아이템 추가 버튼 초기 설정

  let isAddBtnClick = false;
  newBookmarkForm.style.display = "none";

  // 북마크 아이템 추가 버튼 Toggle
  const newBookmarkToggle = () => {
    // isAddBtnClick = !isAddBtnClick = false = true
    // newBookmarkToggle 함수가 실행되면 isAddBtnClick이 true로 바뀌고 true이면 display는 block, false면  display = "none"으로 보이지 않게 한다
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick
      ? (newBookmarkForm.style.display = "block")
      : (newBookmarkForm.style.display = "none");
  };

  document
    .getElementById("bookmark-item-add-btn")
    .addEventListener("click", newBookmarkToggle);

  // 북마크 아이템 추가
  const addBookmarkItem = () => {
    let bookmarkList = [];
    if (localStorage.getItem("bookmarkList")) {
      bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    }
    let name = document.getElementById("new-bookmark-url-name-input").value;
    let url = document.getElementById("new-bookmark-url-input").value;
    let createAt = Date.now();
    bookmarkList.push({ name, url, createAt });
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    document.getElementById("new-bookmark-name-input").value = "";
    document.getElementById("new-bookmark-url-input").value = "";
    setBookmarkItem({ name, url, createAt });
    newBookmarkToggle();
  };

  const deleteBookmarkItem = (id) => {
    const isDelete = window.confirm("정말 삭제하시겠습니까?");

    if (isDelete) {
      let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
      let nowBookmarkList = bookmarkList.filter((ele) => {
        ele.createAt != id;
      });
      localStorage.setItem("bookmarkList", JSON.stringify(nowBookmarkList));
      document.getElementById(`bookmark-item-${id}`).remove();
      return;
    }
  };

  const setBookmarkItem = (item) => {
    const bookmarkItem = document.createElement("div");
    bookmarkItem.classList.add("bookmark-item");
    bookmarkItem.id = `bookmark-item-${item.createAt}`;

    const bookmarkInfo = document.createElement("div");
    bookmarkInfo.classList.add("bookmark-info");

    const bookmarkUrl = document.createElement("a");
    bookmarkUrl.classList.add("bookmark-url");

    const urlIcon = document.createElement("div");
    urlIcon.classList.add("url-icon");

    const urlIconImg = document.createElement("img");

    const nameElement = document.createElement("div");
    nameElement.classList.add("url-name");

    const bookmarkDelBtn = document.createElement("div");
    bookmarkDelBtn.addEventListener("click", () => {
      deleteBookmarkItem(item.createAt);
    });
    bookmarkDelBtn.classList.add("del-btn");
    bookmarkDelBtn.textContent = "삭제";

    bookmarkUrl.href = item.url;
    urlIconImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;
    nameElement.textContent = item.name;

    bookmarkItem.appendChild(bookmarkInfo);
    bookmarkItem.appendChild(bookmarkDelBtn);
    bookmarkInfo.appendChild(bookmarkUrl);
    bookmarkUrl.appendChild(urlIcon);
    bookmarkUrl.appendChild(nameElement);
    urlIcon.appendChild(urlIconImg);

    bookmarkItemList.appendChild(bookmarkItem);
  };

  const setBookmarkList = () => {
    bookmarkList.forEach((item) => {
      {
        setBookmarkItem(item);
      }
    });
  };

  document
    .getElementById("bookmark-item-add-btn")
    .addEventListener("click", newBookmarkToggle);
  document.getElementById("add-btn").addEventListener("click", addBookmarkItem);
  document
    .getElementById("cancel-btn")
    .addEventListener("click", newBookmarkToggle);

  setBookmarkList();
})();
