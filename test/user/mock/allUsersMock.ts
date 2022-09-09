import { AllUsers } from '../../../src/user/domain/allUsers';
import { User } from '../../../src/user/domain/user';

export class AllUsersMock implements AllUsers {
  private readonly mockSave = jest.fn();

  private readonly mockSearchByCriteria = jest.fn();

  private items: User[] = [];

  async save(user: User): Promise<void> {
    this.items.push(user);
    this.mockSave(user);
  }
}
