# Finance Plugin

A finance-focused AI plugin starter built with Next.js and the OpenAI plugin ecosystem. This project is designed to expose financial data and insights through a clean API that can be plugged into AI assistants, dashboards, or internal tools.

## Overview

This repository provides a foundation for building a finance plugin with:

- Next.js 13 app router
- Edge-ready API routes
- OpenAPI schema support
- AI plugin metadata and integration points
- Responsive front-end for data display

It is intended as a starter project for integrating financial data workflows into AI-powered experiences.

## Features

- Financial data API endpoints
- OpenAPI-compatible plugin definition
- Edge runtime support for fast responses
- Next.js app-based front end
- Vercel-ready deployment configuration
- TypeScript setup for maintainable code

## Tech Stack

- Next.js 13
- TypeScript
- React
- Vercel
- OpenAPI / plugin metadata

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Environment Variables

Create a `.env.local` file and add any required API keys or configuration values for your data provider:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

If your finance integration uses a provider such as Alpha Vantage, Finnhub, Yahoo Finance, or a custom API, add those credentials here as needed.

## Project Structure

```bash
.
├── app/
│   ├── api/
│   ├── components/
│   ├── fonts/
│   ├── lib/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── opengraph-image.png
├── public/
│   ├── openapi.json
│   └── ...
├── .eslintrc.json
├── .gitignore
├── package.json
├── tsconfig.json
├── vercel.json
├── README.md
└── server.js
```

## OpenAPI

The project includes an OpenAPI definition under `public/openapi.json` for plugin discovery and integration with AI tooling.

## Deployment

This app is ready to deploy to Vercel:

```bash
npm run build
```

Then follow the standard Vercel deployment flow for your repository.

## Usage

The plugin can be adapted to provide endpoints such as:

- stock quotes
- market summaries
- company profile data
- portfolio metrics
- financial news and insights

Example request pattern:

```bash
curl "http://localhost:3000/api/finance?symbol=AAPL"
```

## License

This project is licensed under the terms of the repository license.

## Notes

This starter is built to help you quickly scaffold a finance plugin with modern web tooling and AI plugin conventions. You can extend the included API and UI to match your specific data sources and product requirements.
