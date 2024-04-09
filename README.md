# nodejs-boilerplate
Nodejs 

# Setting up ESLint and Prettier
```
Installation
npm install eslint eslint-config-prettier prettier –-save

Configuration
eslint --init
Add .eslintrc.json and .prettierrc

Usage

To check if the formatting matches with Prettier’s rules
npm run format:check

Force the formatting 
npm run format:write

Lint your code 
npm run lint:check

To Auto-fix the errors
npm run lint:fix

```

# Environment Variables

This project uses several environment variables to run the application. 

### NODE_ENV

- **Description**: Specifies the Node.js environment.
- **Values**: Either `development` for development environment or `production` for the production environment.