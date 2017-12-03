import { MuralModule } from './mural.module';

describe('MuralModule', () => {
  let muralModule: MuralModule;

  beforeEach(() => {
    muralModule = new MuralModule();
  });

  it('should create an instance', () => {
    expect(muralModule).toBeTruthy();
  });
});
