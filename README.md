# Cocktail Recipe Finder

## Description and Motivation

- In this app you can put an ingredient or a name of a drink on the input and search on an API database all the recipes related to it.

- This App was created with `React.js` and `TypeScript` to avoid type-related errors at compile time and `React Router` for a multi route app, as well as `Zustand` for sharing data between all components of the app, `ZOD` for make corrects validations schemas when fetching data from the API, and `TailwindCSS` for styling as it is a very fast way to apply styles in code.

## Folder Structure
```bash
───public
│       bg.jpg
│       drinks recipe main.png
│       logo.svg
│
└───src
    │   index.css
    │   main.tsx
    │   router.tsx
    │   vite-env.d.ts
    │
    ├───components
    │       DrinkCard.tsx
    │       Header.tsx
    │       Modal.tsx
    │       Notification.tsx
    │
    ├───layouts
    │       Layout.tsx
    │
    ├───services
    │       recipesServices.ts
    │
    ├───stores
    │       favoritesSlice.ts
    │       notificationSlice.ts
    │       recipeSlice.ts
    │       useAppStore.ts
    │
    ├───types
    │       index.ts
    │
    ├───utils
    │       recipes-schema.ts
    │
    ├───views
    │       FavoritesPage.tsx
    │       Indexpage.tsx
    │
    └───__tests__
            FavoritesPage.unit.test.tsx
            Indexpage.unit.test.tsx
```

## How to Install and Run the Project

- You can clone the repo, make a cd into the project folder and then run `pnpm install` for installing the dependencies, then you can run `pnpm dev` and the project will start on development mode.

- If you want, you can access a project's deployment [here.](https://endearing-donut-70acc7.netlify.app/)

![Cocktail Recipe Finder App Image](./public/drinks%20recipe%20main.png 'Cocktail Recipe Finder App Image')
