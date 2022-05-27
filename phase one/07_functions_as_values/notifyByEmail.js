const notifyByEmail = (EMAIL) => {
  return `Email sent to: ${EMAIL}`;
}

const notifyByText = (PHONE_NUMBER) => {
  return `Text sent to: ${PHONE_NUMBER}`;
}

const notify = (email_or_phone, method) => {
  return method(email_or_phone);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));