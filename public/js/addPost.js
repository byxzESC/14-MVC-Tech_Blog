async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post_name").value;
  const content = document.querySelector("#content").value;

  const response = await fetch(`/api/dashboard/new`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      userId
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add post");
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);