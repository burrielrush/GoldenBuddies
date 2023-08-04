const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req, res, next }) {
    // allows token to be sent via headers
    const token = req.headers.authorization || '';

    // Extract the token from the "Bearer <tokenvalue>" format
    const extractedToken = token.replace('Bearer ', '');

    if (!extractedToken) {
      return res.status(401).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(extractedToken, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.log('Invalid token:', err);
      return res.status(401).json({ message: 'Invalid token!' });
    }

    // send to next endpoint (in GraphQL, res and next are not used)
    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

