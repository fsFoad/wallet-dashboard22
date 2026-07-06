import { localEnvironment } from './environment.local';

export const environment = {
  production: false,
  apiUrl: '/api',
  /**
   * منو mock + بقیه از سرویس:
   *   apiIsMock: false, menuMock: true
   *
   * همه mock (بدون backend):
   *   apiIsMock: true, menuMock: true
   */
  apiIsMock: false,
  menuMock: true,
  primeUiLicense: localEnvironment.primeUiLicense,
};
