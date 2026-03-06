# 🤝 Contributing to PassGen CLI

Thank you for taking the time to contribute! Any help is greatly appreciated — whether it's fixing a bug, adding a feature, or improving documentation.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Branch Naming Convention](#branch-naming-convention)
- [Commit Message Convention](#commit-message-convention)
- [Pull Request Guidelines](#pull-request-guidelines)

---

## Code of Conduct

Please be respectful and constructive in all interactions. We want this project to be a welcoming space for everyone.

---

## Getting Started

1. **Fork** this repository by clicking the "Fork" button on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/your-username/password-generator.git
   cd password-generator
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Link** the CLI globally so you can test it:
   ```bash
   npm link
   ```

---

## How to Contribute

### Reporting Bugs

- Open a [GitHub Issue](https://github.com/aufall02/password-generator/issues)
- Include a clear title and description
- Describe the steps to reproduce the bug
- Mention your OS and Node.js version

### Suggesting Features

- Open a [GitHub Issue](https://github.com/aufall02/password-generator/issues) with the label `enhancement`
- Explain the use case and why it would be useful

### Submitting Code

1. Create a new branch from `main` (see [Branch Naming Convention](#branch-naming-convention))
2. Make your changes
3. Test your changes manually with `passgen`
4. Commit your changes (see [Commit Message Convention](#commit-message-convention))
5. Push to your fork
6. Open a Pull Request to the `main` branch of this repository

---

## Branch Naming Convention

Use clear and descriptive branch names:

| Type | Format | Example |
|---|---|---|
| New feature | `feat/short-description` | `feat/copy-to-clipboard` |
| Bug fix | `fix/short-description` | `fix/save-label-bug` |
| Documentation | `docs/short-description` | `docs/update-readme` |
| Refactor | `refactor/short-description` | `refactor/clean-index` |

---

## Commit Message Convention

Follow this simple format:

```
<type>: <short description>
```

| Type | When to use |
|---|---|
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `docs` | Documentation changes only |
| `refactor` | Code change that doesn't fix a bug or add a feature |
| `chore` | Maintenance tasks (deps update, etc) |

**Examples:**
```
feat: add --copy flag to copy password to clipboard
fix: handle empty label when saving password
docs: add examples to README
```

---

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Make sure your code works before submitting
- Write a clear PR description explaining what you changed and why
- Reference related issues if any (e.g. `Closes #12`)

---

Thank you for contributing! 🙌