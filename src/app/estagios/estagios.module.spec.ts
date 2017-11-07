import { EstagiosModule } from './estagios.module';

describe('EstagiosModule', () => {
  let estagiosModule: EstagiosModule;

  beforeEach(() => {
    estagiosModule = new EstagiosModule();
  });

  it('should create an instance', () => {
    expect(estagiosModule).toBeTruthy();
  });
});
