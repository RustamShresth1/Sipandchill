# SipAndChill

> Discover the perfect café to study and chill.

## Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 18 + Vite + Tailwind CSS    |
| Backend  | Node.js + Express 4               |
| Database | MongoDB + Mongoose                |

## Project Structure

```
sipandchill/
├── frontend/   # React + Vite app
└── backend/    # Express API server
```

## Getting Started

### Backend

```bash
cd backend
cp .env.example .env   # fill in your values
npm install
npm run dev            # starts on http://localhost:5000
```

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev            # starts on http://localhost:5173
```

### Health Check

```
GET http://localhost:5000/api/health
```

## Environment Variables

See `backend/.env.example` and `frontend/.env.example` for required variables.
