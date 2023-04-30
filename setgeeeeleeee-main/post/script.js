const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert(data.message);
  })
  .catch(error => console.error(error));
});
