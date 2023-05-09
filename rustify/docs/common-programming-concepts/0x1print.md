# Must knows Before we start

- Functions are declared with `fn` keyword and the main program must have a `main` function.

`src/main.rs`

```rs
fn main(){
    // code goes here
}
```

- `pub` keyword makes the function public.
- `mod` keyword imports a function from another file .
- Print statements are written using the `println!("hello")` macro (_function_).

- To Call Function From Another File

`src/print.rs`

```rs
pub fn run(){ // function made public
    println!("hello");
}
```

`src/main.rs`

```rs
mod print; // accessing public module

fn main() {
    // To call the function in print.rs
    print::run();
}
```

# Basic Print Formatting In Rust.

- To print an integer or a variable you would have to use `{}` as placeholders.

  `println!("{}",2)`

- To use multiple placeholders.

  `println!("{} is {} ","Collins","Awesome");`

- Use **_positional arguments_** to repeat a single variable multiple times in the string. For instance if i wanted to print _"Kolynz is learning rust, and Kolynz likes rust"_

  `println!("{0} is learning {1}, and {0} likes {1}","kolynz","rust",);`

- Or you can use **_named arguments_**. ( _john likes mangoes_)

  ` println!("{name} likes to eat {food}",name = "john",food = "Mangoes")`

- **_Placeholder traits_** - help when you want to out put something in a particular format. For instance, to output 10 in binary , hexadecimal and octal. ( _Binary: 1010 Hex:a Octal:12_ ).

  `println!("Binary: {:b} Hex:{:x} Octal:{:o}",10,10,10);`

- To perform basic Arithmetic operations.

  `println!("10 + 10 = {}",10 + 10);`

- Placeholder for **_debug traits_**. (_if you wanted to print an array or tuple_)

  `println!("{:?}",(12,true,"hello")); `

- To get user input use **std** module. ( _Make sure the variable that you want to populate with the input is `mutable`_ )

  ```rs
  use std::io //std library import

  fn main() {
    let mut name=String::new();
  }
  ```

### References

- Rust Lang Book

## [Next (_Variables in Rust_) 👉🏿](0x2vars.md)
