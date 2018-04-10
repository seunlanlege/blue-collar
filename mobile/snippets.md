```sh
babel-node
```

```js
# Signup
var userApi = require('./mobile/src/redux/effects/api/users');
userApi.signup({email: "test@email.com", password: "password"}).then(console.log).catch(console.log);

# Login
var userApi = require('./mobile/src/redux/effects/api/users');
userApi.login({email: "test@email.com", password: "password"}).then(console.log).catch(console.log);

# GET Users
var userApi = require('./mobile/src/redux/effects/api/users');
var user = { id: 2, authHeaders: { 'token-type': 'Bearer', 'access-token': '1h3oThvJzRlsuy8CzljU8w', client: 'lPbEy9gUyyj-hPGxincjCQ', expiry: '1524539477', uid: 'test@email.com' } };
userApi.show({ user }).then(console.log).catch(console.log);

# PUT Users
var userApi = require('./mobile/src/redux/effects/api/users');
var user = { id: 2, authHeaders: { 'token-type': 'Bearer', 'access-token': '1h3oThvJzRlsuy8CzljU8w', client: 'lPbEy9gUyyj-hPGxincjCQ', expiry: '1524539477', uid: 'test@email.com' } };
var userForm = { user: { firstName: "Micheal", lastName: "Jordan", trade: 3, contactable: true, jobPosition: 1 }, place: { googleId: "google-id-1", name: "Some Place Co.", vicinity: "123 Fake St.", category: 1 } };
userApi.update({ user, userForm }).then(console.log).catch(console.log);
```
