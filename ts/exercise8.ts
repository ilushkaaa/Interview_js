export interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
  age: number;
}

/**
 * Фильтрует пользователей по заданным полям
 * @param users пользователи
 * @param options условие отбора пользователей
 * @returns отобранные пользователи
 */
export function filterUsers(users: User[], options: Partial<User>): User[] {
  return [];
}