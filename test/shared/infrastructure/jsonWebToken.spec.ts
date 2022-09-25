import { JsonWebToken } from '../../../src/shared/infrastructure/jsonWebToken';

const tokenMinLength = 10;
const wrongToken = 'AB-CD-EF';
const jsonWebToken = new JsonWebToken();
const payload = { id: 2323323, email: 'chris@me.com' };

describe('json web token', () => {
  it('Regresar un JWT valido', async () => {
    const result = await jsonWebToken.generate(payload);
    expect(result.length).toBeGreaterThanOrEqual(tokenMinLength);
  });

  it('Validar si un string es un JWT', async () => {
    const correctToken = await jsonWebToken.generate(payload);
    await expect(jsonWebToken.verify(correctToken)).resolves.toBeTruthy();
    await expect(jsonWebToken.verify(wrongToken)).resolves.toBeFalsy();
  });
});
