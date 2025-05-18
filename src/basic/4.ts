function showMessage(message: any): void {
  console.log(message);
}

function calc(num1: any, num2: any) {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}