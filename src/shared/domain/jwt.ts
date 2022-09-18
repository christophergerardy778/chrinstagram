export interface Jwt {
  generate(payload: { [key: string]: unknown }): Promise<string>;
  verify(token: string): Promise<boolean>;
}
