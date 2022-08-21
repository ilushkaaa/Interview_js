// Исправить ошибки в коде, рассказать про конструкции typescript, которые применены ниже

class Account {
  login: string;
  password: string;
}

interface Updatable {
  onUpdate: () => void;
}

class User extends Account implements Updatable {
  name: string = 'test';
  surname: string;
  displayName?: string;

  get fullName() {
    return `${this.name} ${surname}`;
  }
}

const user = User();

console.log(user.fullName());