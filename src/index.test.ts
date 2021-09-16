describe('foo', () => {
  it('basic', () => {
    expect(1).toBe(1);
  });
  it('works', () => {
    expect('bar').toBe('bar');
    expect({ a: 'a', b: 1, c: true, d: new Date(2020, 0, 2), e: null, f: undefined, g: 10 }).toMatchSnapshot();
  });

  it('snapshot', () => {
    expect('foo bar baz').toMatchSnapshot();
  });

  it('matchers', async () => {
    expect(() => {
      throw new Error('foo');
    }).toThrowError(Error('foo'));

    const result = await Promise.resolve(1);
    expect(result).toBe(1);

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

  describe('same elements', () => {
    it('true', () => {
      const arr1 = [1, 1, 2, 3];
      const arr2 = [3, 2, 2, 1];

      expect(arr1).toEqual(expect.arrayContaining(arr2));
      expect(arr2).toEqual(expect.arrayContaining(arr1));
      // expect(arr1).toContain(arr1);
    });
  });
});
