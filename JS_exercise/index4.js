// Написать функцию findCommandByName, которая находит команду по имени.
// Если команда не найдена, то вернуть похожие по имени команды.
// По возможности реализовать на TypeScript

const commands = {
    copy: {copy_index: 1},
    delete: {delete_index: 2},
    ocpy: {ocpy_name: 3}
}

console.log(findCommandByName(commands, "copy")); // {copy: {copy_index: 1}}
console.log(findCommandByName(commands, "ocpy")); // {ocpy: {ocpy_name: 3}}
console.log(findCommandByName(commands, "opcy")); // {copy: {copy_index: 1},  ocpy: {ocpy_name: 3}}