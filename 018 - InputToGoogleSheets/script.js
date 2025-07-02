  const scriptURL = 'https://script.google.com/macros/s/AKfycbz8KxDp7slj0gJvNcbpSjWUq72rXq1HwbZRlHRxA2-bxc67KqzbiqCVHtR5ZwKwHpqdeg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = " Thank you for subscribing!! "
            setTimeout(function() {
              msg.innerHTML = ""
            }, 4000)

      })
      .catch(error => console.error('Error!', error.message))
  })