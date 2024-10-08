const clientForm = document.getElementById('client-form');

clientForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;

  fetch('/add-client', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, surname, email })
  })
  .then(response => {
    if (response.ok) {
      console.log('Клиент добавлен!');
    } else {
      console.error('Ошибка добавления клиента!');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
});

