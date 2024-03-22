# URL Shortener Application

This is a URL shortener application built with Express.js. It allows users to generate short URLs for long URLs and get analytics for those short URLs.

## Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

## Routes

### Generate Short URL

- **Method:** POST
- **Path:** `/`
- **Description:** Generates a new short URL for a given long URL.
- **Request Body:**
  - `longUrl` (string): The long URL to be shortened.
- **Response:**
  - `shortUrl` (string): The generated short URL.

Example:

```
curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"longUrl": "https://example.com"}'
```

### Get Analytics for Short URL

- **Method:** GET
- **Path:** `/analytics/:shortId`
- **Description:** Retrieves analytics data for a given short URL.
- **Parameters:**
  - `shortId` (string): The unique identifier of the short URL.
- **Response:**
  - Analytics data including total visits, unique visits, etc.

Example:

```
curl http://localhost:3000/analytics/abc123
```

## Dependencies

- express

```

Make sure to replace `<repository-url>` with the actual URL of your Git repository. You can expand this README further by adding information about the application's architecture, configuration, deployment instructions, etc., as needed.
```
