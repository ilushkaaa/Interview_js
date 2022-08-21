/**
 * Реализовать метод get, который возвращает значение по полному пути в объекте. Если путь неверный, то вернуть null
 */
const testObject = {
    user: {
        name: "Bob"
    }
}

// Должны успешно выполниться
console.log(get(testObject, "user.name")); // Bob
console.log(get(testObject, "user.surname")); // null