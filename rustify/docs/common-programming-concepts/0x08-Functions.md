# Functions in Rust

- Function definitions are declared using `fn` keyword.

```rs
fn main() {
    println!("Hello, world!");
    another_function();
}

fn another_function() {
    println!("Another function.");
}
```

## Function Parameters / Arguments

- In function signatures, you must declare the type of each parameter.

```rs
fn main() {
    another_function(5);
}
fn another_function(x: i32) {
    println!("The value of x is: {}", x);
}
```

## Statements & Expressions

- Function bodies are made up of a series of statements optionally ending in an expression.
- Because Rust is an expression-based language, this is an important distinction to understand. Other languages don’t have the same distinctions, so let’s look at what statements and expressions are and how their differences affect the
  bodies of functions.
- **Statements** are instructions that perform some action and do not return a value.For Instance creating a variable and assigning a value. `let y = 2`,function definitions are also statements
  - Statements don't return values.Therefore you cant assign a let statement to another variable. `let x = (let y = 6)`.This is different for C and Ruby where assignment returns a value.
- **Expressions** evaluate to a resulting value.

  - Expressions evaluate to something and make up most of the rest of the code that you’ll write. Consider an operation, such as `5 + 6`, which is an expression that evaluates to the value `11`.

    - Expressions can be part of statements: in the example below, the 6 in the statement let y = 6; is
      an expression that evaluates to the value 6.

    ```rs
    fn main() {
        let y = 6;
    }
    ```

    - Calling a function is an expression.
    - Calling a macro is an expression.
    - The block that we use to create new scopes, {}, is an expression, for example:

    ```rs
    fn main() {
        let x = 5;
        let y = {
        let x = 3;
        x + 1 // without colon
        };
    println!("The value of y is: {}", y);

    }
    ```

    - The expression in the block evaluates to `4` which gets bound to y as part of the let statement . **Note** the line without a semicolon at the end , which is unlike most of lines you’ve seen so far. Expressions do not include ending semicolons. If you add a semicolon to the end of an expression, you turn it into a statement, which will then not return a value.

## Functions With Return Values.

- Functions can return values to the code that calls them. We don’t name return values, but we do declare their type after an arrow `->`.
- In Rust, the return value of the function is synonymous with the value of the final expression in the block of the body of a function. You can return early from a function by using the `return` keyword and specifying a value, but most functions return the last expression implicitly.

```rs
fn five() -> i32 {
    5 // function's return value
}

fn main() {
    let x = five();
    println!("The value of x is: {}", x);
}
```
