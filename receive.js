function decode() {
  const string = document.getElementById("paste-input").value;

  document.getElementById("paste-card").classList.remove("card-flat-bottom");
  document.getElementById("paste-card").classList.add("card-success-flat-bottom");
  
  document.getElementById("paste-input").classList.add("input-success");

  download(string);
}

function download(string) {
  let stringParts = string.split("name://");
  const URI = stringParts[0];
  const fileName = stringParts[1];

  document.getElementById("download-card").classList.remove("card-subtle-flat-top");
  document.getElementById("download-card").classList.add("card-flat-top");

  document.getElementById("download-button").classList.remove("button-subtle");
  document.getElementById("download-button").removeAttribute("inert");

  document.getElementById("download-button").onclick = () => {
    const link = document.createElement("a");
    link.download = fileName;
    link.href = URI;
    link.click();

    document.getElementById("download-card").classList.remove("card-flat-top");
    document.getElementById("download-card").classList.add("card-warning-flat-top");

    document.getElementById("download-button").classList.add("button-warning");
    document.getElementById("download-button").inert = "true";

    document.getElementById("download-icon").innerText = "downloading";
    document.getElementById("download-text").innerText = "Downloading...";
    
    location.href = '.';
  }
}