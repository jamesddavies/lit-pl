# lit-PL
### Unofficial Premier League Scores & Fixtures

lit-PL is an example single page application built with [lit-html](https://github.com/Polymer/lit-html) and [lit-route](https://github.com/jamesddavies/lit-route), a client-side routing library for building single page applications with lit-html.  
  
View this app on [Github](https://github.com/jamesddavies/lit-pl).  
All data in this app is from [football-data.org](https://www.football-data.org).

---

## Installation

Clone the repository

Install:
```javascript
npm install
```

Make sure you have local-web-server installed:
```javascript
npm install -g local-web-server
```

To run this app locally, you'll need an [API key from football-data.org](https://www.football-data.org/client/register). Alternatively, you can replace the 'http://localhost:3000?url=' in the API calls in the Fixture and Results components with https://cors-anywhere.herokuapp.com/ (this will limit you to 50 API calls a day).

Development/Running the app:
```javascript
npm run dev
```
OR
```javascript
npm run start
```