document.getElementById("registration-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;

  const response = await fetch("/api/register", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, address, email }),
  });

  if (response.ok) {
      alert("회원 등록이 완료되었습니다.");
  } else {
      alert("회원 등록에 실패했습니다.");
  }
});
