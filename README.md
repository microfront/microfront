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

- the talk about microfrontend architectures by Manfred Steyer [@manfredsteyer on gh](https://github.com/manfredsteyer) [@manfredsteyer on twitter](https://twitter.com/ManfredSteyer) at JS-Kongress in Munich 2019.
- the talk about independent deployment of the frontend by Monica Lent [@mlent on gh](https://github.com/mlent) [@monicalent on twitter](https://twitter.com/monicalent) at JS-Kongress in Munich 2019.

### The following resources helped me greatly:

- Setting up this monorepo [Monorepo setup with Lerna and Yarn workspaces](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91)
