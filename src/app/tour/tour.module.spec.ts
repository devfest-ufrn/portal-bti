import { TourModule } from './tour.module';

describe('TourModule', () => {
  let tourModule: TourModule;

  beforeEach(() => {
    tourModule = new TourModule();
  });

  it('should create an instance', () => {
    expect(tourModule).toBeTruthy();
  });
});
