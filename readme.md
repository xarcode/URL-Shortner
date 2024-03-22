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
- **Path:** `/api/shorten`
- **Description:** Generates a new short URL for a given long URL.
- **Request Body:**
  - `longUrl` (string): The long URL to be shortened.
- **Response:**
  - `shortUrl` (string): The generated short URL.

### Generate Short URL with custom url

- **Method:** POST
- **Path:** `/api/shorten/custom`
- **Description:** Generates a new short URL for a given long URL.
- **Request Body:**
  - `longUrl` (string): The long URL to be shortened.
  - `customurl` (string): The custom url to be shown and shared
- **Response:**
  - `shortUrl` (string): The generated short URL.


## Dependencies

- express

