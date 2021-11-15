const API = "https://distinct-vaulted-freesia.glitch.me/image";

fetch(API)
  .then((resp) => resp.json())
  .then(renderImage);

let count;
function renderImage(character) {
  const characterTitleName = getEl("fg-title");
  characterTitleName.textContent = character.title;
  const characterImage = getEl("fg-image");
  characterImage.src = character.image;
  const characterLikeSpan = getEl("fg-likes");
  count = character.likes;
  characterLikeSpan.textContent = `${count} Likes`;
  const commentContainer = getEl("fg-comments");
  commentContainer.innerHTML = "";
  const firstLiComment = createElement("li");
  firstLiComment.textContent = character.comments[0].content;
  const secondLiComment = createElement("li");
  secondLiComment.textContent = character.comments[1].content;
  const thirdLiComment = createElement("li");
  thirdLiComment.textContent = character.comments[2].content;
  commentContainer.append(firstLiComment, secondLiComment, thirdLiComment);
  const likeButton = getEl("like-button");
  likeButton.addEventListener("click", handleLikeButtonClick);

  function handleLikeButtonClick(event) {
    count++;
    characterLikeSpan.textContent = `${count} Likes`;
  }
  const commentButton = document.querySelector(".comment-button");
  commentButton.addEventListener("click",
    handleCommentButtonClick
  );

  function handleCommentButtonClick(event) {
    event.preventDefault();
    const commentTextInput = document.querySelector(".comment-input").value;
    const addingCommentLi = createElement('li')
    addingCommentLi.textContent = commentTextInput
    commentContainer.append(addingCommentLi)
    document.querySelector('.comment-input').value = ''
  }
}

function getEl(id) {
  return document.getElementById(id);
}

function createElement(tagName) {
  return document.createElement(tagName);
}

