import { Filter } from './filter';

export class Filters {
  public readonly filters: Filter[] = [];

  constructor(filters: Filter[]) {
    this.filters = filters;
  }

  public add(filters: Filter): Filters {
    return new Filters(this.filters.concat(filters));
  }

  public static create(filters: Filter[]) {
    return new Filters(filters);
  }

  public count(): number {
    return this.filters.length;
  }

  public isEmpty(): boolean {
    return this.count() === 0;
  }
}
