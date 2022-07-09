let password = prompt('Введите пароль');

let isPwdCorrect = true;

// check condition 1 (password length between 3 and 20 symbols included)
isPwdCorrect &&= (3 <= password.length && password.length <= 20);

// check condition 2 (password must contains at least one capital char)
isPwdCorrect &&= (password.toLowerCase() > password);

// check condition 3 (password must contains at least one digit)
password.match(/\d/g) ?? (isPwdCorrect &&= false);

if (isPwdCorrect)
  alert('Пароль валидный. Добро пожаловать в аккаунт!');
else
  alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');