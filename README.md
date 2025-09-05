<p align="left">
  <a href="https://scalekit.com" target="_blank" rel="noopener noreferrer">
    <picture>
      <img src="https://cdn.scalekit.cloud/v1/scalekit-logo-dark.svg" height="64">
    </picture>
  </a>
  <br/>
</p>

# Shared UI Components for Scalekit Examples

[![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A collection of reusable React UI components designed for <a href="https://scalekit.com" target="_blank" rel="noopener noreferrer">Scalekit</a> example applications. These components demonstrate best practices for implementing authentication interfaces in the **auth stack for AI apps**.

## 🎨 What's Included

This shared UI library provides:

- **Login Components**: Pre-built authentication forms
- **SSO Integration UI**: Enterprise login interfaces
- **Profile Management**: User profile and settings components
- **Agent Authorization**: UI for MCP consent flows
- **Token Management**: Interfaces for managing user tokens
- **Modern Design**: Clean, responsive components following design system

## 🚀 Quick Start

### Installation

```bash
# Clone as a Git submodule in your project
git submodule add https://github.com/scalekit-developers/shared-ui-for-examples.git

# Or clone directly
git clone https://github.com/scalekit-developers/shared-ui-for-examples.git
cd shared-ui-for-examples

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 📁 Component Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   ├── profile/        # User profile components
│   ├── tokens/         # Token management UI
│   ├── common/         # Shared UI elements
│   └── layouts/        # Page layouts
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── styles/             # Shared CSS/styling
```

## 🔧 Available Components

| Component | Description | Usage |
|-----------|-------------|-------|
| **LoginForm** | Enterprise SSO login interface | Authentication flows |
| **ProfileCard** | User profile display | User management |
| **TokenManager** | Token vault interface | Agent authorization |
| **ConsentFlow** | MCP consent workflow | Agent permissions |
| **OrgSelector** | Multi-tenant organization picker | Enterprise features |

## 🔗 Integration with Example Apps

This shared UI library is used by:

- [**Express.js Example**](https://github.com/scalekit-developers/scalekit-express-example)
- [**Next.js Demo**](https://github.com/scalekit-developers/scalekit-nextjs-demo)  
- [**FastAPI Example**](https://github.com/scalekit-developers/scalekit-fastapi-example)
- [**Spring Boot Example**](https://github.com/scalekit-developers/scalekit-springboot-example)
- [**Go Example**](https://github.com/scalekit-developers/scalekit-go-example)

## 🎯 Features Demonstrated

- **Responsive Design**: Works across devices and screen sizes
- **Accessibility**: WCAG compliant components
- **Theme Support**: Light/dark mode compatibility
- **TypeScript**: Full type safety and IntelliSense
- **Modern React**: Hooks, Context API, and functional components
- **Performance**: Optimized bundle size and loading

## 🔗 Helpful Links

### 📖 Quickstart Guides
- [**SSO Integration**](https://docs.scalekit.com/sso/quickstart/) - Implement enterprise Single Sign-on
- [**Full Stack Auth**](https://docs.scalekit.com/fsa/quickstart/) - Complete authentication solution
- [**Passwordless Auth**](https://docs.scalekit.com/passwordless/quickstart/) - Modern authentication flows

### 📚 Documentation & Reference
- [**API Reference**](https://docs.scalekit.com/apis) - Complete API documentation
- [**Developer Kit**](https://docs.scalekit.com/dev-kit/) - Tools and utilities

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-component`)
3. Follow the existing component patterns
4. Add tests for new components
5. Submit a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
