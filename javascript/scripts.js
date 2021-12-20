const getYear = () => {
  return document.getElementById("footer").innerHTML = `<p> Copyright ${new Date().getFullYear()} </p>`
}

getYear()
