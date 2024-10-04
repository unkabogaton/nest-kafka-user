import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    { id: 1, name: 'User1' },
    { id: 2, name: 'User2' },
    { id: 3, name: 'User3' },
  ];
  getAllTasks() {
    return this.users;
  }
}
