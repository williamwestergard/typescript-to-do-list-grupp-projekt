# Typescript Todo App

## A. Introduction

An Interface is a way to define the shape of an object. It specifies what properties an object should have and what types those properties should be. You can think of it as a blueprint that objects must follow.

Interfaces help make your code less ptone to errors and easier to understand. They allow Typescript to catch errors before your code runs, which makes your program easier to run and easier to debug.

### When/why to use Interface

1. Catch errors early:
   Typescript will warn you if you try to assign an object that doesn't match the interface.
2. Allowing better code understanding:
   Interfaces solely focus on structure and type-checking aspects, allowing the developer to have a deeper understanding of code and validation.
3. Ensuring consistent object structure:
   Interfaces ensure that objects in your program follow a consistent structure.

## B. Common errors and troubleshooting

1. Forgetting _type_ in an import:
   If you have an interface defined in types.ts like this:

   export interface Todo {
   id: number;
   title: string;
   completed: boolean;
   }

   And you try to import it like this into another file:

   import { Todo } from "./types";

   Typescript will give you this error:

   ![type-only import error](<my-todo/src/Screenshot 2025-09-02 102650.png>)

   Why this happens:

   Typescript wants you to explicity mark imports that are only types to avoid potential runtime issues.

   Fixed mistake:

   ![fixed import](<my-todo/src/Screenshot 2025-09-02 103216.png>)

2. Wrong type for a property:

   If our interface is defined like this:

   interface todo {
   id: number;
   title: string;
   completed: boolean;
   }

   And we try to assign a wrong type for a property:

   const task: Todo {
   id: "one", // This is wrong, id is set to have a vanlue of _number_, "one" is a _string_
   title: "Learn Typescript",
   completed: false,
   };

   Typescript will throw an error saying:

   ![error message wnen assigning string value to expected nuumber](image.png)

   Why this happens:

   This happens because we are trying to assign a _String_ value, when we have specified to typescript we will be expecting a number.

   Fixed mistake:

   We fix the mistake by assigning id with the number 1.

3. Forgetting to mark optional properties:

   If we design our interface like this:

   interface Todo {
   id: number; // Required
   title: string; // Required
   completed: boolean; // Required
   description: string; //Required
   }

   Typescript will be expecting all these values to be filled. If we instead want _description_ to be _optinal_, we need to assign it like this:

   interface Todo {
   id: number; // Required
   title: string; // Required
   completed: boolean; // Required
   description?: string; //Optional
   }

   Why this happens:

   This happens because Typescript enforces the shape of an interface strictly.

   Fixed mistake:

   Remember to mark the property as _optional_ with a questionmark.

   --> description?: string;
