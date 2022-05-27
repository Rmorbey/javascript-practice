const lowercaseMessage = (string) => {
  return string.toLowerCase();
}

const transform = (message, method) => {
  return method(message);
}

transform(`WHY ARE YOU SHOUTING?`, lowercaseMessage);