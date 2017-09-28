import { PortalDiscenteModule } from './portal-discente.module';

describe('PortalDiscenteModule', () => {
  let portalDiscenteModule: PortalDiscenteModule;

  beforeEach(() => {
    portalDiscenteModule = new PortalDiscenteModule();
  });

  it('should create an instance', () => {
    expect(portalDiscenteModule).toBeTruthy();
  });
});
