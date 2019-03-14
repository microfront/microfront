# Microfront(end)

An ideal solution for a microfrontend architecture should make no differentiation between microfrontend and component, but at the same time should be technology agnostic without compromising on performance. Established best practices for web applications like PWA, caching, offline support, SSR and SSO should not be sacrificed for an architectural pattern that benefits the architects without bringing any benefit to the user of the end product.
The same can be said of the UX aspect that should not be influenced in a bad way by the choice of architecture.

Not all requirements can be achieved by mere solutions in code but by enforcing conventions like a (code) style guide and a design-system.

`define MFC = Microfrontend/Component`

## Features (WIP)

- `@microfront/layout-router` loads a layout definition and renders the layout
- `@microfront/layout-router` is initialized by controller and handles route changes and triggers (re)layout and MFC loading
- `@microfront/client-controller` initializes `@microfront/layout-router` and loads MFCs (aka routed applications) in the route-regions defined in layout
- `@microfront/client-controller` and MFCs communicate via events and payloads are formatted in GraphQL as lingua franca
- `@microfront/apollo-client` is initialized by controller and handles GraphQL requests triggered by the events of the MFCs
- `@microfront/auth` is initialized by controller and handles authentication and session management
- `@microfront/ssr-controller` leverages the `@microfront/layout-router` to request and compose the data, HTML and CSS from the MFCs own respective ssr microservices

## Principles

- MFCs are developed in isolation and define their own interfaces that comply with their own backend and some minimal requirements of the controller
- MFCs may use any SPA framework
- MFCs are composable
- application state is synchronized/shared across microfrontends
- MFCs can be developed and deployed separately
- MFCs can define their own data requirements and authorization policies
- routing is implemented framework agnostic and as thin as possible
- MFCs are lazy loaded
- the architecture should be pluggable so you possibly could exchange apollo-client with your desired flavour of e.g. relay by implementing the same interface defined by the controller

## Special Thanks

### This project was inspired by:

- the talk about microfrontend architectures by Manfred Steyer at JS-Kongress in Munich 2019. <a href="https://github.com/manfredsteyer"><svg height="16" class="octicon octicon-mark-github d-block" alt="GitHub" viewBox="0 0 16 16" version="1.1" width="20" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a> <a href="https://twitter.com/ManfredSteyer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" class="d-block" height="16"><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg></a>
- the talk about independent deployment of the frontend by [@monicalent](https://github.com/mlent) at JS-Kongress in Munich 2019. <a href="https://github.com/mlent"><svg height="16" class="octicon octicon-mark-github d-block" alt="GitHub" viewBox="0 0 16 16" version="1.1" width="20" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a> <a href="https://twitter.com/monicalent"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" class="d-block" height="16"><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg></a>

### The following resources helped me greatly:

- Setting up this monorepo [Monorepo setup with Lerna and Yarn workspaces](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91)
