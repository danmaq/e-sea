import { useEslint } from '@kurone-kito/lint-staged-config';

export default {
  '*': useEslint['*'].map((cmd) =>
    cmd.replace(
      /^oxlint --fix$/,
      'oxlint --fix --no-error-on-unmatched-pattern'
    )
  ),
};
