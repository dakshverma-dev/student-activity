# Student Activities · IIT Madras BS

**A single place to explore student life beyond coursework.**

A public frontend for the IIT Madras BS student ecosystem: houses, societies, events, festivals, positions of responsibility, and practical resources.

[Open demo](https://student-activity-seven.vercel.app) · [Run locally](#run-locally) · [Pages](#pages)

## What visitors can explore

| Area | Purpose |
| --- | --- |
| Houses and societies | Browse communities and their detail pages |
| Events and calendar | Discover activities and event information |
| Paradox | Explore the student festival |
| Student life and resources | Find information, support, and useful links |
| POR, FAQ, and verification | Explore leadership information and related frontend flows |

The application uses reusable navigation, cards, section headings, and a shared visual system across its routes.

## Run locally

Use Node.js 20 or later and npm.

```bash
git clone https://github.com/dakshverma-dev/student-activity.git
cd student-activity
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). This repository has no required provider keys or database configuration.

## Pages

```text
src/app/
  page.jsx              Homepage
  houses/               House index and detail routes
  societies/            Society index and detail routes
  events/               Event index and detail routes
  calendar/             Activity calendar
  paradox/              Festival information
  student-life/         Community overview
  resources/            Resources
  por/                  Positions of responsibility
  faq/                  Questions and answers
  verify/               Verification interface
src/components/         Shared navigation and UI components
public/                 Images and logo assets
```

**Stack:** Next.js 14, React 18, JavaScript, custom CSS, and Lucide icons.

## Current scope

This is the public frontend snapshot. Content includes hardcoded and sample records; this checkout has no backend for live event updates, authentication, or authoritative verification. Its demo and source should be read as the frontend implementation, rather than evidence of current institution-wide usage.

## Build

```bash
npm run build
npm run start
```

`npm run lint` runs the configured Next.js lint command.
