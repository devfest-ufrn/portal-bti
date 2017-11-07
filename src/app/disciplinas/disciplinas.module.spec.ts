import { DisciplinasModule } from './disciplinas.module';

describe('DisciplinasModule', () => {
  let disciplinasModule: DisciplinasModule;

  beforeEach(() => {
    disciplinasModule = new DisciplinasModule();
  });

  it('should create an instance', () => {
    expect(disciplinasModule).toBeTruthy();
  });
});
