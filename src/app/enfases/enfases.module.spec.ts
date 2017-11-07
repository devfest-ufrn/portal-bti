import { EnfasesModule } from './enfases.module';

describe('EnfasesModule', () => {
  let enfasesModule: EnfasesModule;

  beforeEach(() => {
    enfasesModule = new EnfasesModule();
  });

  it('should create an instance', () => {
    expect(enfasesModule).toBeTruthy();
  });
});
