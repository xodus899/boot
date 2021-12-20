const getYear = () => {
  return document.getElementById("footer").innerHTML = `<p> Copyright C.Justice ${new Date().getFullYear()} </p>`
}

getYear()
