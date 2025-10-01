# github copilot

## .github/copilot-instructions.md

> copilot-instruction을 통해 미리 정의된 지침을 제공하여 일관된 코드 작성을 지원합니다.

```txt
# Repository-wide Instructions for GitHub Copilot

## General Conventions

- **Indentation:** Use 2 spaces for indentation in all code files.
- **Naming Conventions:** Follow camelCase for JavaScript variables and functions, and PascalCase for React components.
- **Error Handling:** Always include try-catch blocks for asynchronous operations and handle potential errors gracefully.
- **Logging:** Use the `console.log` for debugging purposes only; for production logging, use a dedicated logging library like Winston or Pino.

## Technology-Specific Guidelines

### JavaScript/TypeScript

- **Quotes:** Use double quotes for all string literals.
- **Imports:** Prefer named imports over default imports when possible.
- **React Components:** Use functional components with hooks instead of class components.

### Java

- **Dependency Management:** Use Bazel for managing Java dependencies, not Maven.
- **Return Types:** Return `Optional` instead of `null` for methods that might not return a value.
- **Logging:** Integrate SLF4J for all logging within Java services.

## Architectural and Security Guidelines

- **Secrets Management:** Never hardcode secrets or sensitive values; always reference them from secure sources like Azure Key Vault or GitHub Secrets.
- **Resource Deployment (Terraform/Infrastructure as Code):** Prefer `for_each` over `count` for deploying multiple similar resources.
- **Code Reviews:** When reviewing pull requests, ensure adherence to the above conventions and security best practices.
```
