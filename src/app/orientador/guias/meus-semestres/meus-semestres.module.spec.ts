import { MeusSemestresModule } from './meus-semestres.module';

describe('MeusSemestresModule', () => {
  let meusSemestresModule: MeusSemestresModule;

  beforeEach(() => {
    meusSemestresModule = new MeusSemestresModule();
  });

  it('should create an instance', () => {
    expect(meusSemestresModule).toBeTruthy();
  });
});
