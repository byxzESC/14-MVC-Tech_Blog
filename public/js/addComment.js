async function newCommentHandler(event) {
    event.preventDefault();
  
    const comment = document.querySelector('#new-comment > [name="comment"]').value;
    const time = new Date().toLocaleString('MM-DD-YYYY', { timeZone: 'UTC'});
    const userId = document.querySelector('.form-input > data-user').value
    const postId = document.querySelector('.form-input > data-postId').value

    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        comment,
        time,
        userId,
        postId
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
    .querySelector(".comment-form")
    .addEventListener("submit", newCommentHandler);