# Emuu Landing Page

AI Voice Assistant landing page for Australian tradies.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Umami Analytics

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

This app is configured for Docker deployment on Coolify.

```bash
docker build -t emuu-landing .
docker run -p 3000:3000 emuu-landing
```

## Configuration Required

Before deployment, update these placeholders:

1. **Umami Analytics**: In `src/app/layout.tsx`, replace `UMAMI_WEBSITE_ID` with actual ID from analytics.coreaspectai.com

2. **Demo Form Webhook**: Already configured to POST to `https://n8n-server.coreaspectai.com/webhook/demo-booking`

## Webhook Integration

The demo form sends this payload to n8n:

```json
{
  "company_name": "string",
  "contact_name": "string",
  "email": "string",
  "phone": "string",
  "employee_count": "string",
  "trade_type": "string",
  "source": "website",
  "submitted_at": "ISO timestamp"
}
```
