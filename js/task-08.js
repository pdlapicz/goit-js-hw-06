// Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie wydarzenia submit
// Podczas przesyłania formularza strona nie powinna się odświeżać.
// Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
      alert('You must fill all of fields!');
      return;
    }

    const formData = {
      email,
      password
    };
    
    console.log(formData);

    form.reset();
  });
});
