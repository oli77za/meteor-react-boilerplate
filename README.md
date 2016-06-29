# Meteor React bolierplate

## Why we developed this

The meteor react boilerplate project is a simple boilerplate setup for a Meteor project using react.

Often a lot of time in a project is spent setting up the base of the project, and deciding the corrent layout of the directories, and implementing a strategy

The aim of this project is to jumpstart you into coding the specifics of the app, and not to waste time on setting up the environment

## Rationale

The basis of this architecture aims to decouple the UI components from the application logic, and promote re-usable components, and at the same time maintain a project structure where the software components are logically organized

### Application structure and templating

The application uses [React](https://facebook.github.io/react/) for UI Rendering, and [Flow Router](https://github.com/kadirahq/flow-router/) for the routing.
The entry point of the application is the page, and every page should be defined in it's own JSX file together with the definition of the route for that page.
A page should render a layout (or different layouts in case responsivness is defined at this level)

### Responsivness

The application can be responsive on the single page or on the Layout, You could chose different layouts based on the viewport width, or have a responsive layout. This is left to the implementation

### Separation of components and application logic

We believe that UI component should be as loosely coupled to the logic of the applicationas possible, for this reason, all the UI components (such as buttons, input fields, messages etc) should be defined in the `imports/ui/components` directory, and imported where and when needed

## How to use it

Simply clone this repository, and start your new project from there (remove the remote from git, and change it to your github repo, or simply delete the `.git` directory and re-initialize it)

## Contribution

This project is the outcome of some architecture choices made by [Oliver](https://github.com/oli77za/) and [Alessio](https://github.com/cuginoAle/). These are far from perfect, and we welcome comments, enhancements, and pointing out where we got it wrong.

If you want to contribute on this project, please fork this repository and submit PRs
