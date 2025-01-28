# Unhandled Shape in Area Calculation

This repository demonstrates a common error in TypeScript: failing to handle all possible cases within a `switch` statement.

The `calculateArea` function attempts to compute the area of different shapes. However, it lacks a comprehensive handling of all potential `shape` inputs, leading to a default return value of 0 for any shape not explicitly covered in the cases.  This could result in incorrect area calculations and unexpected behavior in an application.

The solution demonstrates the appropriate way to resolve this issue by adding a default case or using exhaustive checks to ensure all possible input cases are accounted for.

## Bug

The `bug.ts` file contains the original code with the error.  The function lacks a proper handling for shapes other than "rectangle" and "triangle".

## Solution

The `bugSolution.ts` file demonstrates the corrected code by adding a `default` case or employing a more robust error handling mechanism.