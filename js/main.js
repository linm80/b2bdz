var signin = document.getElementById('signin');
var signup = document.getElementById('signup');

document.getElementById('sign-in').addEventListener('click', function () {
  signin.classList.add('show-sign');
});
document.getElementById('close-signin').addEventListener('click', function () {
  signin.classList.remove('show-sign');
});

document.getElementById('sign-up').addEventListener('click', function () {
  signin.classList.remove('show-signin');
  signup.classList.add('show-sign');

});
document.getElementById('close-signup').addEventListener('click', function () {
  signup.classList.remove('show-sign');
});