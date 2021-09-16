describe('foo', () => {
  it('works', () => {
    expect('bar').toBe('bar');
    expect({ a: 'a', b: 1, c: true, d: new Date(2020, 0, 2), e: null, f: undefined, g: 10 }).toMatchSnapshot();
  });

  it('matchers', () => {
    expect(() => {
      throw new Error('foo');
    }).toThrowError(Error('foo'));

    expect(Promise.resolve(1)).resolves.toBe(1);
    const mock = jest.fn();
    mock('mo');
    expect(mock).toBeCalledWith('mo');
  });

  describe('loads', () => {
    afterEach(() => {
      jest.resetModules();
    });
    it('add 1', () => {
      const { add } = require('./module1');

      expect(add(1)).toBe(1);
    });
    it('add 2', () => {
      const { add } = require('./module1');

      expect(add(2)).toBe(2);
    });
  });
});
