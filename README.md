## Summary

The goal is to build a multi-page application form for tenants registering with a property management company to book apartments. The form should include fields for full name, email, phone number, and salary indication with radio buttons. It should feature a progress indicator and a summary of all entered data on the last page. Stretch goals include animations, responsive design, neat design, state storage, and automated tests.

# Frontend Challenge

This project is a frontend application built with Next.js, TypeScript, and Tailwind CSS. It includes a multi-page form with animations and validation. The project uses Zustand for state management and Framer Motion for animations.

## Project Setup

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

Clone the repository and install the dependencies:

```
git clone https://github.com/Pascha-404/buena-frontend-challenge.git
cd buena-frontend-challenge
npm install
```

### Running the Development Server

To start the development server, run:

```
npm run dev
```

This will start the Next.js development server on `http://localhost:3000`.

### Running Tests

To run the tests, use:

```
npm run test
```

To run the tests in watch mode:

```
npm run test:watch
```

## Key Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Testing

The project uses Jest and React Testing Library for unit and integration tests. Tests are located for each component in the associated components directory.

### Example Test Cases

1. **ProgressBar Component**
   - Renders correctly with default props.
   - Displays the correct number of steps.
   - Highlights the correct step.

2. **TenantForm Component**
     - Renders the form correctly.
     - Calls handleChange and updates state correctly.
     - Navigates to the next page on "Weiter" button click.
     - Navigates to the previous page on "Zurück" button click.
     - Renders the form on the third page with phone number.
     - Renders the form on the fourth page with salary options.
     - Renders the summary page correctly.


  3. **TenantFormPage Component**
     - Renders the component with required props.
     - Renders subheader when provided.
     - Renders fieldset mode with correct data.
     - Calls onChange when input value changes.
     - Applies textTransform function correctly.

## Animation

The project uses Framer Motion to add animations to the form pages. The \`AnimatePresence\` and \`motion\` components are used to animate the mounting and unmounting of form pages.

## License

This project is licensed under the MIT License.
