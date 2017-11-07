import { CurriculosModule } from './curriculos.module';

describe('CurriculosModule', () => {
  let curriculosModule: CurriculosModule;

  beforeEach(() => {
    curriculosModule = new CurriculosModule();
  });

  it('should create an instance', () => {
    expect(curriculosModule).toBeTruthy();
  });
});
