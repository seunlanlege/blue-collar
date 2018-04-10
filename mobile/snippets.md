```sh
babel-node
```

```js
# NOTE: Change your authHeaders

// Signup
var userApi = require('./mobile/src/redux/effects/api/users');
userApi.signup({email: "test@email.com", password: "password"}).then(console.log).catch(console.log);

// Login
var userApi = require('./mobile/src/redux/effects/api/users');
userApi.login({email: "test@email.com", password: "password"}).then(console.log).catch(console.log);

// GET Users
var userApi = require('./mobile/src/redux/effects/api/users');
var user = { id: 2, authHeaders: { 'token-type': 'Bearer', 'access-token': '1h3oThvJzRlsuy8CzljU8w', client: 'lPbEy9gUyyj-hPGxincjCQ', expiry: '1524539477', uid: 'test@email.com' } };
userApi.show({ user }).then(console.log).catch(console.log);

// PUT Users
var userApi = require('./mobile/src/redux/effects/api/users');
var user = { id: 2, authHeaders: { 'token-type': 'Bearer', 'access-token': '1h3oThvJzRlsuy8CzljU8w', client: 'lPbEy9gUyyj-hPGxincjCQ', expiry: '1524539477', uid: 'test@email.com' } };
var userForm = { user: { firstName: "Micheal", lastName: "Jordan", trade: 3, contactable: true, jobPosition: 1 }, place: { googleId: "google-id-1", name: "Some Place Co.", vicinity: "123 Fake St.", category: 1 } };
userApi.update({ user, userForm }).then(console.log).catch(console.log);

// GET Place
var placesApi = require('./mobile/src/redux/effects/api/places');
var user = { id: 2, authHeaders: { 'token-type': 'Bearer', 'access-token': '1h3oThvJzRlsuy8CzljU8w', client: 'lPbEy9gUyyj-hPGxincjCQ', expiry: '1524539477', uid: 'test@email.com' } };
var place = { id: 1, googleId: "google-id-1", name: "Some Place Co.", vicinity: "123 Fake St.", category: 1 };
placesApi.show({ user, place }).then(console.log).catch(console.log);

// POST Bid
var placesApi = require('./mobile/src/redux/effects/api/places');
var user = { id: 2, authHeaders: { 'token-type': 'Bearer', 'access-token': '1h3oThvJzRlsuy8CzljU8w', client: 'lPbEy9gUyyj-hPGxincjCQ', expiry: '1524539477', uid: 'test@email.com' } };
var place = { googleId: "google-id-1", name: "Some Place Co.", vicinity: "123 Fake St.", category: 1 };
placesApi.createBid({ user, place }).then(console.log).catch(console.log);

// POST Review
var placesApi = require('./mobile/src/redux/effects/api/places');
var user = { id: 2, authHeaders: { 'token-type': 'Bearer', 'access-token': '1h3oThvJzRlsuy8CzljU8w', client: 'lPbEy9gUyyj-hPGxincjCQ', expiry: '1524539477', uid: 'test@email.com' } };
var place = { googleId: "google-id-1", name: "Some Place Co.", vicinity: "123 Fake St.", category: 1 };
var reviewForm = { pocName: "Cardi B", pocType: 1, starBidProcess: 1, starChangeOrdersAccepted: 2, starTimeRespected: 3, starJobCompleted: 4, starPaymentsSatisfaction: 5, starWorkWithAgain: 3, starOverall: 3, comments: "Lil bitch, you can't fuck with me if you wanted to. These expensive, these is red bottoms, these is bloody shoes.", boughtMaterials: true, otherPartyInvolved: false, dollarsLost: 3.50 }
placesApi.createReview({ user, place, reviewForm }).then(console.log).catch(console.log);
```
