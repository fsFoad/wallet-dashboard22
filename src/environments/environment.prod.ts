import { localEnvironment } from './environment.local';

export const environment = {
  production: true,
  apiUrl: '/api',
  apiIsMock: false,
  menuMock: false,
  primeUiLicense: localEnvironment.primeUiLicense,
};
