const formRef = document.querySelector('.login-form');
const hadleSubmit = e => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '') {
    return alert('Please, fill field "Email"');
  } else if (password.value === '') {
    return alert('Please, fill field "Password"');
  }

  console.log({ email: email.value, password: password.value });
  e.currentTarget.reset();
};

formRef.addEventListener('submit', hadleSubmit);
