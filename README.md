<h1 align="center">🤖 Slackbot Starter</h1>
<h3 align="center">A starter for a Slackbot built in TypeScript and node</h3>

<br/>

[](#table-of-contents)

## Table of Contents

1. [Development Environment Setup](#development-environment-setup)
   - [Dependencies](#dependencies)
   - [Installation](#installation)
   - [Configuration](#configuration)
2. [Running the Script](#running-the-script)
   - [Development](#development)
   - [Production](#production)

<br/>

[](#development-environment-setup)

# Development Environment Setup

[](#dependencies)

## Dependencies

- node: 14.x.x
- yarn: 1.x.x

[](#installation)

## Installation

To clone the repo:

```
git clone https://github.com/charlesdobson/slackbot-starter.git
```

To install all dependencies:

```
cd slackbot-starter
yarn
```

[](#configuration)

## Configuration

1. Create a `.env` file at the root
2. Copy the contents of the [.env.example](.env.example) to the new `.env` file
3. Generate a Slack webhook string from https://api.slack.com/messaging/webhooks and add it as the `SLACK_WEBHOOK` environment variable
4. Determine the Slack token type using https://api.slack.com/authentication/token-types and add it as the `SLACK_TOKEN_TYPE` environment variable

<br/>

[](#running-the-script)

# Running the Script

[](#development)

## Development

To run the script and watch for changes:

```
yarn serve
```

[](#production)

## Production

To run the script only once:

```
yarn start
```
