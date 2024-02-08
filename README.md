# GDisk - A google drive clone

## [Hosted Link](https://gdisk.vercel.app/)

## Table of Contents

- [GDisk - A google drive clone](#gdisk---a-google-drive-clone)
  - [Hosted Link](#hosted-link)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [File Management](#file-management)
    - [Sharing and Accessibility](#sharing-and-accessibility)
    - [User Experience](#user-experience)
    - [Personalization](#personalization)
    - [Security and Authentication](#security-and-authentication)
  - [Sreenshots](#sreenshots)
  - [Tech Stack](#tech-stack)
  - [Get Started](#get-started)
    - [Install dependencies](#install-dependencies)
    - [Run the App](#run-the-app)
    - [Build for Production](#build-for-production)

## Features

### File Management

-  Upload Files: Easily upload files of various types and sizes to GDisk.
-  Download Files: Download your files whenever you need them, ensuring easy access to your data.
-  Delete Files: Effortlessly manage your storage by deleting files you no longer require.

### Sharing and Accessibility

-  Get Shareable Links: Share your files with others by generating shareable links with customizable access permissions.
-  Search Functionality: Quickly locate your files using the powerful search feature.
-  Sorting Options
   -  Sort by Date Modified: Arrange your files based on their last modification date for better organization.
   -  Sort by Name: Sort files alphabetically for easy navigation.
   -  Ascending and Descending Order: Toggle between ascending and descending order for both date modified and name.

### User Experience

-  Responsive Layout: Enjoy a seamless experience across various devices with GDisk's responsive design.
-  Storage Limit and Live Progress Bar: Keep track of your storage usage with a live progress bar, ensuring you stay within your allocated limit.
-  Help Icon to get a detailed application guide

### Personalization

-  Themes: Customize your GDisk experience by choosing from a variety of themes to suit your preferences.

### Security and Authentication

-  Google Authentication: Enhance the security of your account with Google authentication.
-  Private Files: Keep sensitive files secure by marking them as private, limiting access to only authorized users.

## Sreenshots

![Login Screen](/screenshots/login.png)

Login Screen

![Dashboard Light Mode](/screenshots/dashboard.png)

Dashboard Light Mode

![Dashboard Dark Mode](/screenshots/dashboard-dark.png)

Dashboard Dark Mode

## Tech Stack

-  [Vite](https://vitejs.dev/)
-  [React](https://react.dev/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [TailwindCSS](https://tailwindcss.com/)
-  [Redux Toolkit](https://redux-toolkit.js.org/)
-  [Firebase](https://firebase.google.com/)
-  [shadcn/ui](https://ui.shadcn.com/)
-  [Radix UI](https://www.radix-ui.com/)
-  [Lucide](https://lucide.dev/)
-  [React Toastify](https://www.npmjs.com/package/react-toastify)
-  [React Custom Scrollbars](https://www.npmjs.com/package/react-custom-scrollbars)

## Get Started

You can install GDisk locally using any package manager such as `npm`, `yarn` or `pnpm` in the project root directory.

### Install dependencies

```bash
bun install
```

### Run the App

```bash
bun run dev
```

### Build for Production

```bash
bun run build
```

---

This project was created using bun init in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
