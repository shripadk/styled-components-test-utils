import init from './init';
import * as matchers from './';

init();

export default function injectStyledUtils(expect) {
  const extension = {};
  Object.keys(matchers).forEach((x) => {
    extension[x] = function matcher(...params) {
      const test = matchers[x](this.actual, ...params);

      return { message: test.message, pass: test.pass };
    };
  });

  expect.extend(extension);
}
