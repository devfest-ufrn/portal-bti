import { OrientadorModule } from './orientador.module';

describe('OrientadorModule', () => {
  let orientadorModule: OrientadorModule;

  beforeEach(() => {
    orientadorModule = new OrientadorModule();
  });

  it('should create an instance', () => {
    expect(orientadorModule).toBeTruthy();
  });
});
