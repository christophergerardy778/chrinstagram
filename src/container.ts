import { Container } from 'inversify';
import { httpContainer } from './example/infrastructure/di/httpContainer';
import { sharedContainer } from './shared/infrastructure/di/sharedContainer';
import { profileContainer } from './profile/infrastructure/di/profileContainer';
import { userContainer } from './user/infrastructure/di/userContainer';

const container = new Container();

container.load(...[
  httpContainer,
  sharedContainer,
  profileContainer,
  userContainer,
]);

export {
  container,
};
