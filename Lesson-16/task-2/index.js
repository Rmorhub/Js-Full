/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

let arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}

export { arr };

console.log(arr[0]());
console.log(arr[5]());
console.log(arr[7]());
console.log(arr[9]());