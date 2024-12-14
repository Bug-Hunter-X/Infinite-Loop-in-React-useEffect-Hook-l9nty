# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by directly modifying the state variable within the effect's callback without proper dependency management.

## Bug Description
The `useEffect` hook is intended to perform side effects based on changes in state or props. However, if the callback function modifies the state in a way that triggers the effect again, an infinite loop can occur.

## Solution
The solution involves carefully managing the dependencies passed to the `useEffect` hook to prevent it from running continuously.  Adding a dependency such that the state update doesn't trigger a new useEffect call is required. 