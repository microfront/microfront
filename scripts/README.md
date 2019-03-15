# Scripts

curtesy of [Monorepo setup with Lerna and Yarn workspaces](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91)

## The publish script

To publish the packages we rely on our CI server. Using a custom script we’ll check each publishable package looking for the current version in the registry. If we pushed a new version to the repo, the module will be published.

## The task script

The task script does two things:

- Defines the set of common tasks: `clean`, `compile`, `test` and `lint`. Each task uses the required tool forcing it to use the current package’s folder config files. It also fixes the base dir if needed (for example, jest needs this).
- Allows execution of any node_modules binary, in case the common tasks are not enough. For example a custom command could be: `./task prettier --write`
