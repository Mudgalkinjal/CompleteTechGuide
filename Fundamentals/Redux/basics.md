# Redux Overview

## What is Redux?
Redux is a state management library that provides a global state accessible from any component in a React app. It helps manage and update shared data efficiently, making state predictable and easier to control across the application.

## Store
The store is the global state in a React application, making data accessible to any component. Redux Toolkit simplifies setting up, connecting, and managing this store efficiently within the app.

The store is usually composed of multiple slices, each managing a specific part of the application's state, making it more organized and maintainable.

## Actions
Actions are used to tell Redux how to update the state. They are objects with a **type** and an optional **payload**, describing what change should happen.

Actions in Redux must have a **type** (required) that describes the action and can have a **payload** (optional) to pass data for the state update.

## Reducers
A reducer takes an action and updates the Redux store based on the action's type, ensuring state changes are predictable and controlled.

A reducer **never directly updates the Redux store** or mutates the state. Instead, it creates a **copy of the state**, applies changes, and replaces the old state with the updated copy.
