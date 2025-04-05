<div align="center">
  <a href="https://buymeacoffee.com/oscarraygoza">
    <img src="https://media-hosting.imagekit.io/f7637aea93cb4467/bmc-button.png?Expires=1838494865&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2uTrrEPlULK4arPUFfc1O3FsDuQN2CNBpuLWSeHJT0He19CL71oHcEjy-TCz31hUEurYTmXL~V~Vnuom4prgvKOcHQ9jhqPisiUsqvYBu9ZRTYuHcVs~symajmkdnPJtks4Sjs5qBR~bh9xdhvOufXqd67GNVmQr-frG1Ip8p~8-egGP95PT3~oL9SSfQPdfaEwrmpkUF96MH8nZ~WVnNDGLhaTFK42ZR7PyB95bA-gw60yqrztA8RHIfREY~epWy~dEWIo3mxH-Vg3aa6LV-BUvirOZ5QM9Vxr96AbxcdNa8uninlPbfvCJg2D5f7K0f3wxALdzvMu0xmfTJo8fEw__" alt="Logo" width="30%" height="auto">
  </a>

  <h1 align="center">CLEAN ARCHITECTURE FRONTEND</h1>

  <p align="center">
    A practical example implementing Clean Architecture principles in a Vue.js frontend application
    <br />
    <br />
    <a href="https://medium.com/@oscar.eduardo.raygoza/implementando-clean-architecture-en-el-frontend-una-experiencia-pr%C3%A1ctica-68d1dab575eb"><strong>Read the detailed guide »</strong></a>
    <br />
    <br />
    <a href="https://pokemontcgpoket.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Oscar-Raygoza/clean-architecture--vue-3/issues">Report Bug</a>
    ·
    <a href="https://github.com/Oscar-Raygoza/clean-architecture--vue-3/issues">Request Feature</a>
  </p>
</div>

<br />

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🔍 About the Project

This project demonstrates a practical implementation of Clean Architecture principles in a Vue.js frontend application. It showcases how to structure a frontend application with clear separation of concerns across different layers, making the codebase more maintainable, testable, and scalable.

The application uses the Pokémon TCG API to showcase these architectural concepts in a real-world scenario.

## ⚙️ Requirements

> [!IMPORTANT]
> Before starting, make sure you have the following installed to run the project in development mode.

- [Node.js](https://nodejs.org/en/download/package-manager) (v22.14.0 recommended)
- [Bun](https://bun.sh/) package manager

<details>
  <summary><b>Install Node.js on macOS 🍏</b></summary>
  
```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash 

# Download and install Node.js (you may need to restart the terminal)
nvm install 22.14.0

# Verify Node.js installation
node -v # should print `v22.14.0`

# Verify npm installation
npm -v
```
</details>

<details>
  <summary><b>Install Node.js on Windows 🪟</b></summary>
  
```bash
# Install fnm (Fast Node Manager)
winget install Schniz.fnm

# Configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# Download and install Node.js
fnm use --install-if-missing 22.14.0

# Verify Node.js installation
node -v # should print `v22.14.0`
```
</details>

<details>
  <summary><b>Install Bun Package Manager</b></summary>
  
```bash
# For macOS, Linux, and WSL
curl -fsSL https://bun.sh/install | bash

# For Windows (via PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# Verify Bun installation
bun -v
```
</details>

<br />

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Environment Variables

1. Create a `.env.local` file in the root directory based on the provided `.env.example`:

```bash
# .env.local

  ,-.       _,---._ __  / \
 /  )    .-'       `./ /   \      ~~~  Env Init ~~~
(  (   ,'            `/    /|
 \  `-"             \'\   / |     
  `.              ,  \ \ /  |     
   /`*          ,'-`----Y   |     
  (            ; .envs  |   '     
  |  ,-.    ,-'         |  /
  |  | (   |            | /
  )  |  \  `.___________|/
  `--'   `--'


VITE_POKEMONTCG_API_KEY=your_api_key_here
```

2. Generate an API key from [PokemonTCG Developer Portal](https://dev.pokemontcg.io/) and add it to your `.env.local` file.

<br />

### Installation

Install dependencies using Bun:

```bash
bun i
```

<br />

### Available Scripts

The project includes several useful scripts:

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run end-to-end tests
bun run test:e2e

# Type checking
bun run type-check

# Linting
bun run lint         # Run all linters
bun run lint:oxlint  # Run oxlint only
bun run lint:eslint  # Run eslint only

# Code formatting
bun run format
```

After running `bun run dev`, the application will be available at:

```
http://localhost:5173/
```
<br />

## 🏗️ Architecture

This project follows Clean Architecture principles, organized into the following layers:

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
    class Router,StateManager,CardStore,CardEntity,CardRepository,CardServiceHandler,PersistentCardsMapper,StorageCardDTO,NetworkErrorHandler,CardServiceRepo,CardStorageRepo component
```

<br />

## 🛠️ Built With

<div>
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"/>
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun"/>
  <img src="https://img.shields.io/badge/Pinia-yellow?style=for-the-badge&logo=vue.js&logoColor=white" alt="Pinia"/>
</div>

<br />

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br />

## 📄 License

This project is licensed under the MIT License.

<br />

## 📬 Contact

Oscar Raygoza - [@oscar_raygoza](https://twitter.com/oscar_raygoza) - oscar.eduardo.raygoza@gmail.com

Project Link: [https://github.com/Oscar-Raygoza/clean-architecture--vue-3](https://github.com/Oscar-Raygoza/clean-architecture--vue-3)

---

<div align="center">
  <p>If you find this project helpful, please consider supporting:</p>
  <a href="https://buymeacoffee.com/oscarraygoza">
    <img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" height="50" />
  </a>
</div>
