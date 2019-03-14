# Microfront(end)

An ideal solution for a microfrontend architecture should make no differentiation between microfrontend and component, but at the same time should be technology agnostic without compromising on performance. Established best practices for web applications like PWA, caching, offline support, SSR and SSO should not be sacrificed for an architectural pattern that benefits the architects without bringing any benefit to the user of the end product.
The same can be said of the UX aspect that should not be influenced in a bad way by the choice of architecture.

Not all requirements can be achieved by mere solutions in code but by enforcing conventions like a style guide and a design-system.

## Features

- `@microfront/layout-router` loads a layout definition and renders the layout
- `@microfront/layout-router` is initialized by controller and handles route changes and triggers (re)layout and microfrontend loading
- `@microfront/client-controller` initializes `@microfront/layout-router` and loads microfrontends (aka routed applications) in the route-regions defined in layout
- `@microfront/client-controller` and microfrontends/components communicate via events and payloads are formatted in GraphQL as lingua franca
- `@microfront/apollo-client` is initialized by controller and handles GraphQL requests triggered by the events of the microfrontends
- `@microfront/auth` is initialized by controller and handles authentication and session management
- `@microfront/ssr-controller` leverages the `@microfront/layout-router` to request and compose the data, HTML and CSS from the microfrontends own respective ssr microservices

## Principles

- Microfrontends are developed in isolation and define their own interfaces that comply with their own backend and some minimal requirements of the controller
- Microfrontends may use any SPA framework
- Microfrontends are composable
- application state is synchronized/shared across microfrontends
- Microfrontends can be developed and deployed separately
- Microfrontends can define their own data requirements and authorization policies
- routing is implemented framework agnostic and as thin as possible
- Microfrontends are lazy loaded
- the architecture should be pluggable so you possibly could exchange apollo-client with your desired flavour of e.g. relay by implementing the same interface defined by the controller
