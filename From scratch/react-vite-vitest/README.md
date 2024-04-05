Project Setup
This project uses Vite, a modern build tool for React. To run the project, you will need to install the dependencies. In a terminal in the root of the project, run:
1. git clone https://github.com/your-username/react-vite-vitest.git
2. cd react-vite-vitest
3. npm install
4. npm run dev

Available Scripts
In the project directory, you can run the following scripts:

1. npm run dev: Runs the development server using Vite.
2. npm run build: Builds the production-ready code using Vite.
3. npm run lint: Lints the code using ESLint with React rules.
4. npm run preview: Builds and previews the production-ready code.
5. npm test: Runs tests using Vitest.

Dependencies
React and React-DOM: Core libraries for building user interfaces.
@testing-library/jest-dom and @testing-library/react: Testing utilities for React applications.
@types/react and @types/react-dom: TypeScript types for React and React-DOM.
@vitejs/plugin-react-swc: Vite plugin for React with SWC transformation.
eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh: ESLint and plugins for React linting.
jsdom: JavaScript implementation of the DOM for testing.
vite: Next-generation frontend tooling.
vitest: Testing framework for Vite applications.

Notes
This project is set to use React version 18.2.0 and Vite version 5.2.0, ensure compatibility when upgrading dependencies.
Make sure to update the name field in package.json with your project's name.
Adjust the linting rules in .eslintrc.js to match your coding style preferences.