


function previewImage(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("preview");
  const text = document.getElementById("upload-text");

  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
    text.style.display = "none";
  }
}