# Create modern freelance landing page

A Vite + React landing page for a senior .NET freelance developer, with a small Express backend for contact requests and site statistics.

## Running the code

Install dependencies:

```bash
npm i
```

Create local environment settings:

```bash
cp .env.example .env
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
- `ADMIN_TOKEN` - bearer token required to read private statistics. Local fallback is `dev-admin-token`.
- `DATA_DIR` - directory for the JSON data store, defaults to `server/data`.

Endpoints:

- `GET /api/health` - health check.
- `POST /api/events` - records analytics events such as `page_view`, `cta_click`, and `contact_submit`.
- `POST /api/contact` - stores contact form submissions.
- `GET /api/stats?days=30` - returns site statistics, top pages, recent events, and recent contacts. Requires `Authorization: Bearer <ADMIN_TOKEN>`.

## Admin statistics

Open the private dashboard at:

```text
/admin/stats
```

Enter the same token configured as `ADMIN_TOKEN`. The dashboard shows page views, visitors, CTA clicks, contact requests, top pages, and recent contacts.

## Site statistics

The frontend initializes `src/lib/siteAnalytics.ts` on normal landing pages. It records:

- page views, including hash navigation;
- clicks on primary CTA links;
- contact form submissions.

The admin dashboard is excluded from normal page-view tracking.

## Production notes

- Replace the local JSON store with SQLite or Postgres before serious production traffic.
- Set a strong `ADMIN_TOKEN` in the hosting environment.
- Configure `CORS_ORIGIN` to the deployed frontend URL.
- Add email or Telegram notifications for new contact requests if immediate follow-up matters.
