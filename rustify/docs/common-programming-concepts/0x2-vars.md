# Variables In Rust.

- _Real Quick though_. In rust, variables are immutable by default. (_when defined they cannot be reassigned a new value_)
- And the variable naming convention in rust is **_snake case_** (`variable_name`) like python.
- They hold primitive data or references to data.
- Rust is a **_block-scoped_**.
- We use `let` keyword to initialize a variable.

  `let name= "Kolynz";`

- To make a variable mutable you add `mut` key word.

  `let mut name= "Benda";`

## Define a constant.

- We use the `const` keyword.
- For constants , you must explicitly define a type and the name must be uppercase.

  `const SCHOOL_ID:i32 =001;`

- This is simply a constant called "SCHOOL_ID" with a type of integer 32bit.
- Constants may be set only to a constant expression, not to the result of a function call or any other value that could only be computed at runtime.

## Assigning multiple variables.

- _Multiple variable assignment_

```rs
 let (school,year)=("kyu",1);
 println!("am at {} in year {}",school,year);

```

### References

- [Rust lang Book](https://example.com/)

