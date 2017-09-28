import { PapresentationModule } from './papresentation.module';

describe('PapresentationModule', () => {
  let papresentationModule: PapresentationModule;

  beforeEach(() => {
    papresentationModule = new PapresentationModule();
  });

  it('should create an instance', () => {
    expect(papresentationModule).toBeTruthy();
  });
});
