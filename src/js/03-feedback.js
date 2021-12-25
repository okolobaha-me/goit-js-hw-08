import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');

const FEEDBACK = 'feedback-form-state';
const feedbackData = {
  email: '',
  message: '',
};

if (localStorage.getItem(FEEDBACK)) {
  const data = JSON.parse(localStorage.getItem(FEEDBACK));

  email.value = data.email;
  message.value = data.message;
}

const saveFormData = () => {
  feedbackData.email = email.value;
  feedbackData.message = message.value;

  localStorage.setItem(FEEDBACK, JSON.stringify(feedbackData));
};

const clearStorage = () => {
  localStorage.removeItem(FEEDBACK);
};

const sendFeedback = e => {
  e.preventDefault();
  form.reset();
  console.log(JSON.parse(localStorage.getItem(FEEDBACK)));
  clearStorage();
};

form.addEventListener('input', throttle(saveFormData, 500));

form.addEventListener('submit', sendFeedback);
