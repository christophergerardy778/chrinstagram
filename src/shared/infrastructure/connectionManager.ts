import { injectable } from 'inversify';
import { DataSource, EntityTarget, Repository } from 'typeorm';

@injectable()
export class ConnectionManager {
  private dbSource!: DataSource;

  constructor() {
    this.dbSource = new DataSource({
      database: 'app',
      password: 'GEO699',
      port: 5432,
      username: 'postgres',
      synchronize: true,
      type: 'postgres',
      entities: [
      ],
    });
  }

  public async open() {
    if (!this.dbSource.isInitialized) {
      await this.dbSource.initialize();
    }
  }

  getRepository<T>(entity: EntityTarget<T>): Repository<T> {
    return this.dbSource.getRepository(entity);
  }

  async close() {
    await this.dbSource.destroy();
  }
}
