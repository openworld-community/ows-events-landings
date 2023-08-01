const openModal = () => {
   document.getElementById('modal').classList.add('is-active');
};

document.getElementById('close-modal').addEventListener('click', function () {
   document.getElementById('modal').classList.remove('is-active');
});

document.getElementById('submit').addEventListener('click', function () {
   const tg = document.getElementById('tg').value;
   const email = document.getElementById('email').value;
   if (tg || email) {
      fetch('/add/contact', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            tg,
            email,
         }),
      });

      document.getElementById('modal').classList.remove('is-active');
   } else {
      alert('Заполните хотя бы одно поле');
   }
});
