async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post_name").value;
  const content = document.querySelector("#content").value;
  // const guest_name = document.querySelector("#guest_name").value;

  const response = await fetch(`/api/dashboard/new`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add post");
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);