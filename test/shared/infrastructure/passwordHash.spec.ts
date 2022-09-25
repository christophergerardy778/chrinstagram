import 'reflect-metadata';
import { PasswordHash } from '../../../src/shared/infrastructure/passwordHash';

const minLength = 10;
const wrongPassword = 'HALLOWEEN';
const rawPassword = 'FELIZ NAVIDAD';
const passwordHash = new PasswordHash();

describe('Hash de contraseñas', () => {
  it('Encriptar un string con una longitud minima de longitud de 10', async () => {
    const result = await passwordHash.hash(rawPassword);
    expect(result).not.toEqual(rawPassword);
    expect(result.length).toBeGreaterThanOrEqual(minLength);
  });

  it('Comparar 2 contraseñas y regresar si es correcta o no', async () => {
    const hashedPassword = await passwordHash.hash(rawPassword);

    await expect(
      passwordHash.compare(rawPassword, hashedPassword),
    ).resolves.toBeTruthy();

    await expect(
      passwordHash.compare(wrongPassword, hashedPassword),
    );
  });
});
