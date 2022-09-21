const input = document.querySelector(".input");
const downloadbtn = document.querySelector(".download");

downloadbtn.addEventListener("click", (e) => {
    e.preventDefault();
    downloadbtn.innerText = "Downloading file...";
  fetchfile(input.value);
});

function fetchfile(url) {
  fetch(url)
    .then((res) => res.blob())
      .then((file) => {
          let tempurl = URL.createObjectURL(file);
          let atag = document.createElement("a");

          atag.href = tempurl;
          atag.download = url.replace(/^.^[\\\/]/, '');
          document.body.appendChild(atag);
          atag.click();
          atag.remove();
          URL.revokeObjectURL(tempurl);
          downloadbtn.innerText = "Download";
          input.value = " ";
      }).catch(() => {
          downloadbtn.innerText = "Download";
          alert("Failed to download file!")
      })
}
