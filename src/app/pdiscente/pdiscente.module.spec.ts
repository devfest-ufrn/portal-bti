import { PdiscenteModule } from './pdiscente.module';

describe('PdiscenteModule', () => {
  let pdiscenteModule: PdiscenteModule;

  beforeEach(() => {
    pdiscenteModule = new PdiscenteModule();
  });

  it('should create an instance', () => {
    expect(pdiscenteModule).toBeTruthy();
  });
});
