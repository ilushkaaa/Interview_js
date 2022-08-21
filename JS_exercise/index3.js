/**
 * Необходимо реализовать функцию getOrDefault, которая отдает значение по вложенности, а если значения нет - возвращает по умолчанию
 */

const testObject = {
    a: {
        b: {
            c: "d"
        },
        e: "f"
    }
};

console.log(getOrDefault(testObject, "a.f", true)); // true
console.log(getOrDefault(testObject, "a.b")); // { c : "d" }
console.log(getOrDefault(testObject, "a.e")); // f