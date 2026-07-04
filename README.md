# Create modern freelance landing page

This is a code bundle for Create modern freelance landing page. The original project is available at https://www.figma.com/design/MCCNxAAvEnCUZfnEeTNFVn/Create-modern-freelance-landing-page.

## Running the code

Install dependencies:

```bash
npm i
```

Start the backend API in one terminal:

```bash
npm run dev:api
```

Start the Vite development server in another terminal:

```bash
npm run dev
```

The frontend proxies `/api` requests to `http://localhost:4000` during local development.

## Backend API

The backend is a small Express server in `server/index.js`. It stores contact requests and analytics events in `server/data/stats.json` by default.

Environment variables:

- `PORT` - backend port, defaults to `4000`.
- `CORS_ORIGIN` - allowed frontend origin, defaults to `http://localhost:5173`.
- `DATA_DIR` - directory for the JSON data store, defaults to `server/data`.

Endpoints:

- `GET /api/health` - health check.
- `POST /api/events` - records analytics events such as `page_view`, `cta_click`, and `contact_submit`.
- `POST /api/contact` - stores contact form submissions.
- `GET /api/stats?days=30` - returns site statistics, top pages, recent events, and recent contacts.

## Site statistics

The frontend initializes `src/lib/siteAnalytics.ts` on startup. It records:

- page views, including hash navigation;
- clicks on primary CTA links;
- contact form submissions.

A private dashboard can be built on top of `GET /api/stats` when deployment/auth requirements are known.
