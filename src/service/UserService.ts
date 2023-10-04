import { User } from '../model/User'; // Substitua pelo caminho real para o arquivo User.ts

export async function getUsersFromFile(): Promise<User[]> {
  try {
    const response = await fetch('/users.json');
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Erro ao ler usuários do arquivo:', error);
    return [];
  }
}
