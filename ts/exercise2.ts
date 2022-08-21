export interface User {
  id: number;
  name: string;
  role: 'user' | 'admin'
}

export type GroupUsers = { [key: string]: User[] };

/**
 * Возвращает уникальные id юзеров
 * @param users массив юзеров
 * @returns уникальные id
 */
export function getIds(users: User[]): number[] {
  return [];
}

/**
 * Возвращает юзеров, сгруппированных по значениям поля, переданного в groupBy
 * @param users массив юзеров
 * @param groupBy поле группировки
 * @returns юзеры, сгруппированные по значению поля
 */
export function groupBy(users: User[], groupBy: string): GroupUsers {
  return {};
}
