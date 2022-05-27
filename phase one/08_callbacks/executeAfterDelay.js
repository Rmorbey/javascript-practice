const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (time, method) => {
  setTimeout(method, time * 1000);
}

executeAfterDelay(5, printHello);