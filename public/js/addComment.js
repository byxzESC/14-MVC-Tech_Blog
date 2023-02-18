async function newCommentHandler(event) {
    event.preventDefault();
  
    const comment = document.querySelector('.new-comment > [name="comment"]').value;
    const post_id = document.querySelector('.form-input').getAttribute('data-postId');

    console.log(this);
    console.log('post id is ', post_id);
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        comment,
        post_id
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add comment");
    }
  }
  
  document
    .querySelector(".new-comment")
    .addEventListener("submit", newCommentHandler);