# 🔐 PassGen CLI

A simple and lightweight CLI tool to generate secure random passwords right from your terminal.

## Features

- Generate random passwords with custom length
- Include/exclude numbers and symbols
- Save passwords with a label to a local file
- View all saved passwords
- Search password by label
- Remove all saved passwords

## Installation

### Option 1 — Install globally via npm (recommended)

```bash
npm install -g https://github.com/aufall02/password-generator
```

### Option 2 — Clone & link manually

```bash
git clone https://github.com/aufall02/password-generator.git
cd password-generator
npm install
npm link
```

After either option, the `passgen` command will be available globally from anywhere in your terminal.

## Usage

```bash
passgen [options]
```

### Options

| Option | Description | Default |
|---|---|---|
| `-l, --length <number>` | Password length | `10` |
| `-s, --save [label]` | Save password with optional label | - |
| `-f, --find <label>` | Search saved password by label | - |
| `-n, --no-numbers` | Exclude numbers | - |
| `-S, --no-symbols` | Exclude symbols | - |
| `-v, --view` | View all saved passwords | - |
| `-r, --remove` | Delete all saved passwords | - |
| `-V, --version` | Show version number | - |
| `-h, --help` | Show help | - |

### Examples

Generate a default 10-character password:
```bash
passgen
```

Generate a 20-character password:
```bash
passgen -l 20
```

Generate a password without symbols:
```bash
passgen -S
```

Generate a password without numbers:
```bash
passgen -n
```

Generate a password and save it with a label:
```bash
passgen -s facebook
```

Generate and save without a label:
```bash
passgen -s
```

Search a saved password by label:
```bash
passgen -f facebook
```

View all saved passwords:
```bash
passgen -v
```

Delete all saved passwords:
```bash
passgen -r
```

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Commander.js](https://github.com/tj/commander.js/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.