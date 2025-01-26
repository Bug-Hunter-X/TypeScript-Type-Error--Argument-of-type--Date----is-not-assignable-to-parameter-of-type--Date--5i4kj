# TypeScript Type Error Bug

This repository demonstrates a common TypeScript type error that arises when working with arrays of objects.  Specifically, it shows how trying to pass an element from a Date array to a function expecting a single Date object results in a type error.

## Bug Description

The core issue is that TypeScript correctly identifies the type of `dates[0]` as `Date`, not `Date[]`. The error arises because TypeScript infers the type of `dates` to be `Date[]` before considering the index access `[0]`. The error suggests a misunderstanding of how TypeScript handles array elements and their types.