# Common Programming Concepts In Rust

- Specifically, you’ll learn about variables, basic types, functions, comments, and control flow.

## Variables and mutability

- By default variables in rust are immutable.To read more [Click Me 😥](https://example.com/).

## Shadowing

- This is declaring a new variable with the same name as the previous one(_and the new variable shadows the previous variable_).
- EX 1

```rs
fn main() {
    // Bind x to 5
    let x = 5;
    // Shadowing x
    let x = x + 1;
    let x = x * 2;
    println!("The value of x is: {}", x);
}
```

- Shadowing is different from marking a variable as `mut`, because we’ll get a compile-time error if we accidentally try to reassign to this variable without using the `let` keyword. By using let, we can perform a few transformations on a value but have the variable be immutable after those transformations are complete.
- Shadowing creates a new variable when we reuse the `let` keyword, we can change the type of the value with the same name.

```rs
let spaces = " ";
let spaces = spaces.len();
```

- If you try to use `mut` for this it will result in an error

## Data types

- Every value in Rust is of a certain data type, which tells Rust what kind of data is being specified so it knows how to work with that data.
- Keep in mind that rust is a _statically typed_ language (_knows the types of all variables at compile time_)
- The compiler can usually infer what type we want to use based on the value and how we use it.We must annotate types whenever we intend to convert them to other types later.
- For more on Data types [click me 💀](https://example.com/)

## Functions

- Functions are pervasive in Rust. [👉Click for more info 👈](https://example.com/)

## Comments

- Comments in rust are prefixed with `//`.
  `// this is a comment`

## Control Flow

- Deciding whether code should run based on certain conditions.To read more [😖 click me](https://example.com/)
