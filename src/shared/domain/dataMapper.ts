export interface DataMapper<T, U> {
  to(entity: T): U;
  from(entity: U): T;
}
