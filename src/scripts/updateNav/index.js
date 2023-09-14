function updateNav() {
  const authenticated = localStorage.getItem("token")

  const navBar = document.getElementById("navBar")

  if (authenticated) {
    navBar.style.display = "flex"
  } else {
    navBar.style.display = "none"
  }
}

export default updateNav