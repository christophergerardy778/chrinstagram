import { ContainerModule, interfaces } from 'inversify';
import { ConnectionManager } from '../connectionManager';
import { sharedTypes } from './sharedTypes';

const sharedContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<ConnectionManager>(sharedTypes.connection)
    .to(ConnectionManager)
    .inSingletonScope();
});

export {
  sharedContainer,
};
