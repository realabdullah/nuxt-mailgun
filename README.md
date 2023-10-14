# Sending Email from Your Nuxt 3 App with Mailgun

## Prerequisites

Before you get started, ensure you have the following:

- [Node.js](https://nodejs.org/) version 16 or newer installed
- A text editor for code editing
- A terminal for running commands

## Getting Started

```markdown
git clone https://github.com/realabdullah/nuxt-mailgun.git

# navigate into the project
cd nuxt-mailgun

# install dependencies
yarn

# open with vscode
code .

# start the server
yarn dev
```

## Creating the Signup Form

We start by creating a simple signup form within the Nuxt 3 app. The form will collect user data, such as name, email, and password. We use Nuxt's reactivity to handle form submission and provide a basic user interaction.

## Setting Up the Mailgun Integration

To send emails from your application, we leverage the Mailgun service. You will need a Mailgun account to proceed. In the tutorial, we use the sandbox domain provided by Mailgun, which has some limitations. If needed, you can upgrade your Mailgun account to use your custom domain.

## Creating the API Endpoint

We set up an API endpoint in Nuxt 3 to handle the email sending process. The endpoint is created within the `server/api` directory and uses the POST method.

## Sending Welcome Emails

Once the signup form is submitted successfully, the user's email is collected, and a welcome email is sent to their address using the configured Mailgun client.

## Configuration

To configure your Mailgun integration, add your domain and API key to the `.env` file in your application. Make sure to replace `your-sandbox-domain` and `your-api-key` with your actual Mailgun sandbox domain and API key.

```dotenv
# Mailgun API settings
MAILGUN_DOMAIN=your-sandbox-domain
MAILGUN_API_KEY=your-api-key
```

## Running the Application

To run your Nuxt 3 app, use the following command:

```bash
yarn dev
```

This will start your application, and you can access it in your web browser at <http://localhost:3000>.
