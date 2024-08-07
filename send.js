function openFile() {
  let input = document.createElement('input');
  input.type = 'file';

  input.onchange = () => {
    const file = input.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const string = `${reader.result}name://${file.name}`;
      success(string);
    }
    reader.readAsDataURL(file);
  }

  input.click();
}

function success(string) {
  document.getElementById("open-card").classList.remove("card-flat-bottom");
  document.getElementById("open-card").classList.add("card-success-flat-bottom");

  document.getElementById("open-button").classList.add("button-success");
  document.getElementById("open-button").inert = "true";

  document.getElementById("open-icon").innerText = "check";
  document.getElementById("open-text").innerText = "File opened";

  document.getElementById("copy-card").classList.remove("card-subtle-flat-top");
  document.getElementById("copy-card").classList.add("card-flat-top");

  document.getElementById("copy-button").classList.remove("button-subtle");
  document.getElementById("copy-button").removeAttribute("inert");

  document.getElementById("copy-button").onclick = () => {
    copy(string);
  }
}

function copy(string) {
  navigator.clipboard.writeText(string);

  document.getElementById("copy-card").classList.remove("card-flat-top");
  document.getElementById("copy-card").classList.add("card-success-flat-top");

  document.getElementById("copy-button").classList.add("button-success");
  document.getElementById("copy-button").inert = "true";

  document.getElementById("copy-icon").innerText = "check";
  document.getElementById("copy-text").innerText = "Text copied";

  setTimeout(() => {
    location.href = ".";
  }, 500);
}