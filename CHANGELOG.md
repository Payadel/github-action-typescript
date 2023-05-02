# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.8](https://github.com/Payadel/github-action-typescript/compare/v0.2.7...v0.2.8) (2023-05-02)


### Fixes

* minor updates ([d2b7547](https://github.com/Payadel/github-action-typescript/commit/d2b754773223bd908b4bddd8b4671c2ad62d2c08))


### Development: CI/CD, Build, etc

* fix `Payadel/release-sv-action` version ([a05cd11](https://github.com/Payadel/github-action-typescript/commit/a05cd11182d4a36541ab2a4de443729f5378784f))
* remove excess actions ([aaa92ac](https://github.com/Payadel/github-action-typescript/commit/aaa92ac2ab26ae2e39937b29e499ed6136049292))
* update build-test.yml ([4fc5155](https://github.com/Payadel/github-action-typescript/commit/4fc51557dfe6af784ae699e2709ef7c286cc6885))
* update release.yaml ([7d6f6bd](https://github.com/Payadel/github-action-typescript/commit/7d6f6bdffb4889406e491dce4877898605c3132b))

### [0.2.6](https://github.com/Payadel/github-action-typescript/compare/v0.2.5...v0.2.6) (2023-04-29)


### Features

* add `execCommand` and `execBashCommand` ([2c43dfd](https://github.com/Payadel/github-action-typescript/commit/2c43dfd3e56e2100bd7149e7061dcda9572c37cf))
* add `mockGetExecOutput` ([dc0197b](https://github.com/Payadel/github-action-typescript/commit/dc0197b628ea030231c015ffb470e0c673344f90))
* add configs.ts and `DEFAULT_INPUTS` in it ([eb10719](https://github.com/Payadel/github-action-typescript/commit/eb1071914eda96245b6fb1d7563b0d1fdd88c435))
* add tests for utility.ts ([3860029](https://github.com/Payadel/github-action-typescript/commit/3860029fcea8a27590ad6a4e4709f084b3c7f8dd))


### Refactors

* reformat ([f08b9fd](https://github.com/Payadel/github-action-typescript/commit/f08b9fd5f966a93c0772e1598332b3185e2496dc))


### Fixes

* create utility.ts ([945f5f1](https://github.com/Payadel/github-action-typescript/commit/945f5f1b3b800664a06a287a93605b9161986bf2))
* fix deps conflict in package.json ([f144bcd](https://github.com/Payadel/github-action-typescript/commit/f144bcd068bac3332153700249443ffd3f0ba5ef))
* update action events ([4b4e377](https://github.com/Payadel/github-action-typescript/commit/4b4e377bb8106a8c90bb7d8213fba2eff3b7d9cd))


### Development: CI/CD, Build, etc

* update build-test.yml ([48d4e7d](https://github.com/Payadel/github-action-typescript/commit/48d4e7d9be2a44c20db8d81d6025753849bd5feb))
* update payadel/changelog-sv-action ([8897b8f](https://github.com/Payadel/github-action-typescript/commit/8897b8fd292cd52e40f30739ac4f37f2c25a0e7f))

### [0.2.5](https://github.com/Payadel/github-action-typescript/compare/v0.2.4...v0.2.5) (2023-04-27)


### Features

* add outputs.ts ([547b281](https://github.com/Payadel/github-action-typescript/commit/547b281bc58ffa426920a47772c03434a5249e62))

### [0.2.4](https://github.com/Payadel/github-action-typescript/compare/v0.2.3...v0.2.4) (2023-04-27)


### Fixes

* fix run.test.ts ([1a1628c](https://github.com/Payadel/github-action-typescript/commit/1a1628c7674afadb1a5bc4566ae8ed0ea2e05b89))

### [0.2.3](https://github.com/Payadel/github-action-typescript/compare/v0.2.2...v0.2.3) (2023-04-27)


### Fixes

* update inputs.test.ts ([3cc583d](https://github.com/Payadel/github-action-typescript/commit/3cc583df53a92ba72142bca7bab94ce70569417a))

### [0.2.1](https://github.com/Payadel/github-action-typescript/compare/v0.2.0...v0.2.1) (2023-04-26)


### Important Fix

* fix release file

### Development: CI/CD, Build, etc

* remove excess inputs from release.yaml to prevent mistakes ([b241576](https://github.com/Payadel/github-action-typescript/commit/b24157658178747801b5e48065f05a16cf4555ad))

## [0.2.0](https://github.com/Payadel/github-action-typescript/compare/v0.1.1...v0.2.0) (2023-04-26)


### ⚠ BREAKING CHANGES

* update .prettierrc.json
* update src template

### Features

* add `npm install` to `all` script in package.json ([dd121b6](https://github.com/Payadel/github-action-typescript/commit/dd121b680333dfaf03020c538b8b4e89e4c81d65))
* add tests for src template ([59152bd](https://github.com/Payadel/github-action-typescript/commit/59152bd024515188f2c30b5ba726a28c12520077))
* check jest before push ([c40d337](https://github.com/Payadel/github-action-typescript/commit/c40d337e604c714a42ea34ee3aaf9e88bb34d240))
* update src template ([c7d571d](https://github.com/Payadel/github-action-typescript/commit/c7d571d301a5de4a31696e5ed8d262a61ac656cb))


### Fixes

* fix .pre-commit-config.yaml ([ccf7a31](https://github.com/Payadel/github-action-typescript/commit/ccf7a315907b8c578146d906e56210e48345e49f))
* fix git hook scripts ([ec040e3](https://github.com/Payadel/github-action-typescript/commit/ec040e3765764842f3b989f1c3f050bf9116b0d6))
* fix lint errors and format ([abdf242](https://github.com/Payadel/github-action-typescript/commit/abdf242d147741049eab5727671e6914c21775a5))
* fix package.json bug ([0fdda18](https://github.com/Payadel/github-action-typescript/commit/0fdda18b144218cce353a23cc2e5a577dab68704))
* update .prettierrc.json ([95c1ae2](https://github.com/Payadel/github-action-typescript/commit/95c1ae2baa8ffb77c3af4e802831ec55d185ffcc))
* update Payadel/pre-commit-hooks version ([f664bdd](https://github.com/Payadel/github-action-typescript/commit/f664bdddfc936ef7f8783f6726e7f062b92fab6a))
* use `Payadel/assert` for asserts ([3e8c26d](https://github.com/Payadel/github-action-typescript/commit/3e8c26da54b0060e29f6d853d071b16bc6b67cba))


### Development: CI/CD, Build, etc

* add Makefile ([3135507](https://github.com/Payadel/github-action-typescript/commit/313550777461193c8684899ce9e09e8d49b6e640))
* **deps:** bump peter-evans/create-pull-request from 4 to 5 ([03811f0](https://github.com/Payadel/github-action-typescript/commit/03811f020cca8f7059b23a7dc485c932e3b72e50))
* **lock:** update `dessant/lock-threads` ([7bcec68](https://github.com/Payadel/github-action-typescript/commit/7bcec68a794a7f3bd06649d058a54c4f17ec5cf0))
* minor updates ([77d89af](https://github.com/Payadel/github-action-typescript/commit/77d89af47a3449998dfb6b899744a963fefcb401))

### [0.1.1](https://github.com/Payadel/github-action-typescript/compare/v0.1.0...v0.1.1) (2023-04-04)


### Fixes

* **package:** update packages ([8fbab60](https://github.com/Payadel/github-action-typescript/commit/8fbab60713dbb5078c4d19812a78e0671b75c38a))

### Development: CI/CD, Build, etc

* add build-test.yml ([4be8e65](https://github.com/Payadel/github-action-typescript/commit/4be8e652f79986d801e56f542302b6da0afee362))
* **release:** update release.yaml ([d19645f](https://github.com/Payadel/github-action-typescript/commit/d19645f12fc2967c18b7e3632ba50a94df7fbb7f))
* use Payadel actions in release.yaml ([f8af640](https://github.com/Payadel/github-action-typescript/commit/f8af6401ce4b7b6d089b164977c3ec48515de45f))
* **lock:** fix default inputs when action execute on `schedule` and fix `Print & Validate inputs` section bug

## [0.1.0](https://github.com/Payadel/github-action-typescript/compare/v0.0.2...v0.1.0) (2023-03-21)

### ⚠ BREAKING CHANGES

* rename test.yml to build-test.yml
* add `--passWithNoTests` to test script

### Features

* add `assert.sh` utility for test action in
  build-test.yml ([5fa9606](https://github.com/Payadel/github-action-typescript/commit/5fa96065304c4e2b5b55a891526d382312541957))
* add sample function for execute bash
  commands ([337a987](https://github.com/Payadel/github-action-typescript/commit/337a9877bb18d94c33da74e4ca272a60ad5bd8da))
* update
  run-all-before-push.sh ([df0962b](https://github.com/Payadel/github-action-typescript/commit/df0962bfeeffae35676fecfc73182db102ef8b2e))

### Fixes

* **eslintrc:** update
  rules ([0e39902](https://github.com/Payadel/github-action-typescript/commit/0e39902e3665d5fbb221229f08bcbbe3b5dcd3b7))
* **package:** add --passWithNoTests to test
  script ([3ad6535](https://github.com/Payadel/github-action-typescript/commit/3ad6535ec067c8e9dc242d957df7868e8b3fd1e1))
* rename test.yml to
  build-test.yml ([e50a2be](https://github.com/Payadel/github-action-typescript/commit/e50a2be8240db68f2a8eee863a8d7e28912fedbd))

### [0.0.2](https://github.com/Payadel/github-action-typescript/compare/v0.0.1...v0.0.2) (2023-03-20)

### Features

* **action:** add output sample to
  action.yml ([ad397ea](https://github.com/Payadel/github-action-typescript/commit/ad397eac6592471fb45b6a49b4929f094db8e2cc))
* **pre-commit:** add custom hooks for
  pre-commit ([09fc57f](https://github.com/Payadel/github-action-typescript/commit/09fc57f9c5475858db90e99733923efeb72a8ce0))

### Fixes

* **pre-commit:** use Payadel `pre-commit-hooks` in
  .pre-commit-config.yaml ([9d64457](https://github.com/Payadel/github-action-typescript/commit/9d644575d89c714d22b4caa21bb00606080433cb))

### Development: CI/CD, Build, etc

* **changelog:** add payadel/changelog-sv to
  changelog.yaml ([12dccc1](https://github.com/Payadel/github-action-typescript/commit/12dccc1383ef0b75f500bd89825d05ffb955d978))

### Refactors

* minor
  updates ([c85e717](https://github.com/Payadel/github-action-typescript/commit/c85e717f8161256f0376db081e3423fbcfa5c50c))

### 0.0.1 (2023-03-17)

### Features

* add base
  template ([690d2e0](https://github.com/Payadel/github-action-typescript/commit/690d2e0e01c7b140842e5c80e3c3e117d7f220a0))
* add
  codeql.yml ([00cc365](https://github.com/Payadel/github-action-typescript/commit/00cc365301eee897156aa05c43aff9cd9db46568))

### Documents

* add Payadel readme
  template ([407982f](https://github.com/Payadel/github-action-typescript/commit/407982fed08150cee0f34ba44fa173f98358c100))
* update Payadel readme to v
  0.2.3 ([178f075](https://github.com/Payadel/github-action-typescript/commit/178f075bc14d501bd4cc08468791feacc29ce5f4))

### Development: CI/CD, Build, etc

* **changelog:** makes commands independent from
  package.json ([7bacce7](https://github.com/Payadel/github-action-typescript/commit/7bacce763b18bf81df691e6b660f11ac404bd6c8))
* **deps:** bump actions/checkout from 2 to
  3 ([3e93163](https://github.com/Payadel/github-action-typescript/commit/3e9316373b14cb313478da214dd7dba7933d41ea))
* **deps:** bump actions/setup-python from 3 to
  4 ([c36526d](https://github.com/Payadel/github-action-typescript/commit/c36526ddea1c4ce689be35c1fc71fa94432dd920))
* **deps:** bump dessant/lock-threads from 2.0.3 to
  4.0.0 ([1ea1d4f](https://github.com/Payadel/github-action-typescript/commit/1ea1d4f151eb5dfd2330db620ee8aca7fb429852))
* **deps:** bump github/codeql-action from 1 to
  2 ([4aef50f](https://github.com/Payadel/github-action-typescript/commit/4aef50f59b963068ea9d7a31d7e8b707d32bf320))
* **release:** update
  release.yaml ([35b84c1](https://github.com/Payadel/github-action-typescript/commit/35b84c10e7c785f4be46d65633e952ee3ff032b8))
* remove standard-version package from
  package.json ([20e27a6](https://github.com/Payadel/github-action-typescript/commit/20e27a6934f8cf163932ab9ebbc76e5838ac1dad))
