# pockemon-tgc-pocket-stats

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
bun run build

# Runs the end-to-end tests
bun test:e2e
# Runs the tests only on Chromium
bun test:e2e --project=chromium
# Runs the tests of a specific file
bun test:e2e tests/example.spec.ts
# Runs the tests in debug mode
bun test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```

# clean-architecture-vue-3

```mermaid
graph TB
    User((User))

    subgraph "Frontend Application"
        VueApp["Vue Application<br>(Vue.js)"]

        subgraph "Frontend Components"
            Router["Router<br>(Vue Router)"]
            StateManager["State Management<br>(Pinia)"]
            CardStore["Card Store<br>(Pinia Store)"]
        end
    end

    subgraph "Domain Layer (Business Logic Layer)"
        CardDomain["Card Domain<br>(TypeScript)"]

        subgraph "Card Domain Components"
            CardEntity["Card Entity<br>(TypeScript)"]
            CardRepository["Card Repository Interface<br>(TypeScript)"]
        end
    end

    subgraph "Application Layer"
        subgraph "Card Application Components"
            CardServiceHandler["Card Service Handler<br>(TypeScript)"]
            PersistentCardsMapper["Persistent Cards Mapper<br>(TypeScript)"]
            StorageCardDTO["Storage Card DTO<br>(TypeScript)"]
        end
    end

    subgraph "Infrastructure Layer"
        subgraph "Network Infrastructure"
            HttpService["HTTP Service<br>(Http Client)"]
            NetworkErrorHandler["Network Error Handler<br>(TypeScript)"]
        end

          subgraph "Card Infrastructure"
            HttpService["HTTP Service<br>(Http Client)"]
            NetworkErrorHandler["Network Error Handler<br>(TypeScript)"]
        end

        subgraph "Persistence Infrastructure"
            LocalStorage["Local Storage Manager<br>(Browser Storage)"]
            SessionStorage["Session Storage Manager<br>(Browser Storage)"]
        end

        subgraph "Card Infrastructure"
            CardServiceRepo["Card Service Repository<br>(TypeScript)"]
            CardStorageRepo["Card Storage Repository<br>(TypeScript)"]
        end
    end

    %% Relationships
    User -->|"Interacts with"| VueApp
    VueApp -->|"Uses"| Router
    VueApp -->|"Uses"| StateManager
    StateManager -->|"Manages"| CardStore

    CardStore -->|"Uses"| CardServiceRepo
    CardDomain -->|"Defines"| CardEntity
    CardDomain -->|"Defines"| CardRepository

    CardServiceRepo -->|"Implements"| CardRepository
    CardStorageRepo -->|"Implements"| CardRepository

    CardServiceRepo -->|"Uses"| HttpService
    CardStorageRepo -->|"Uses"| LocalStorage
    CardStorageRepo -->|"Uses"| SessionStorage

    HttpService -->|"Handles Errors via"| NetworkErrorHandler
    CardStorageRepo -->|"Uses"| PersistentCardsMapper
    PersistentCardsMapper -->|"Maps to/from"| StorageCardDTO
    PersistentCardsMapper -->|"Uses"| CardEntity

    VueApp -->|"Use"| PersistentCardsMapper

    CardStore -->|"Implement"| CardEntity

    %% Style
    classDef container fill:#e9e9e9,stroke:#666,stroke-width:2px
    classDef component fill:#fff,stroke:#999,stroke-width:1px
    class VueApp,HttpService,LocalStorage,SessionStorage container
    class Router,StateManager,TCGIcons,CardStore,CardEntity,CardRepository,CardServiceHandler,PersistentCardsMapper,StorageCardDTO,NetworkErrorHandler,CardServiceRepo,CardStorageRepo component
```
