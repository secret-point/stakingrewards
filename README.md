# Stakingrewards

This project created in next.js using dockerized api service

https://github.com/secret-point/stakingrewards

## Getting Started

## How to Use

**Step 1:**

Download or clone this repo by using the link below:

```
https://github.com/secret-point/stakingrewards.git
```

**Step 2:**

Go to project root and execute the following command in console to install the required dependencies:

```
npm install
```

**Step 3:**

To run the project, execute the following command to generate files:

```
npm run dev
```

### Libraries & Tools Used

- [Next.js]
- [Typescript]
- [axios]
- [currency.js]
- [eslint]
- [hot-formular-parse]
- [Tailwindcss]
- [Redux toolkit]

### Folder Structure

Here is the folder structure we have been using in this project

```
src/
|- app
|- components
|- constants
|- pages
|- styles
|- types
|- utils
```

Now, lets dive into the src folder which has the main code for the application.

```
1- app - Redux resource folder which contains store and slices.
2- components - Contains the commonly used components.
3- constants - All the application level constants are defined in this directory with-in their respective files.
4- pages — This directory works alongside the pages directory to support incremental adoption and provide other new features like server-side rendering and static-site generation.
5- styles - Contains the basic styles of the tailwincss
6- types — Contains the common types used in the application.
7- utils - Contains basic configurations and functions which are globally used in the project
```

### constants

All the application level constants are defined in this directory with-in their respective files.

```
constants/
|- common.ts
```

### components

This directory contains all the compontnets in the project.

```
components/
|- SearchInput/
    |- index.tsx/

|- Spreadsheet/
    |- AddRow.tsx
    |- Cell.tsx
    |- Header.tsx
    |- Row.tsx
    |- Spreadsheet.tsx
    |- index.tsx

|- Typography
    |- index.tsx/

```

### app

This directory is Redux resource folder which contains store and slices.

```
app/
|- slices/
    |- sheetSlice.ts
|- store.ts
```

### types

This directory contains all the common types used in the project

```
types/
|- common.ts
```

### Utils

Contains the common file(s) and utilities used in a project. The folder structure is as follows:

```
utils/
|- axiosConfig.ts
|- common.ts
|- mosterrat.ts
```

## Conclusion

Thanks for viewing my application. 🙏 I'd be happy to hear your thoughts and feedback. 🙂
