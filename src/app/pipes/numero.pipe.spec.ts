import { NumeroPipe } from './numero.pipe';

xdescribe('NumeroPipe', () => {
  it('create an instance', () => {
    const pipe = new NumeroPipe();
    expect(pipe).toBeTruthy();
  });
});
