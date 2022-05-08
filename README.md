# AuthWithJWT
A simple project to login and create an user using JWT.

### AuthServer
only for login, logout and refresh tokens

## How it works
There are two servers: index.js(npm start) and authServer(npm run startAuth).
AuthServer is only for authentication.

Using insomnia, I created 4 main routes: signup and restrict (port 3000(index)), login and token (port 4000(authServer)).
Login route checks if there is a valid user, if true, give them an access token and a refresh token.
We copy the access token and paste into the header "authorization" (restrict route port 3000). Enventually, the access will expires, because it is only availible for a few minutes or seconds. Then, we take the refresh token generated in login, copy it and paste into a json (in the token route port 4000). This route, will provides a new access token, that we copy and paste into the restrict route.

It's a kind of cicle between token and restrict route.

#### Logout route
When we want to leave, copy the refresh token generated in token route and paste into the logout route,
so the current user id will be deleted from the arrey refreshTokens in authController. This way, 
we can no longer generate tokens in token route. 
