# Rust Guessing Game. Chapter 2

- We’ll implement a classic beginner programming problem: a guessing game. Here’s how it works: the program will generate a random integer between 1 and 100. It will then prompt the player to enter a guess. After a guess is entered, the program will indicate whether the guess is too low or too high. If the guess is correct, the game will print a congratulatory message and exit.

```rs
use std::io;

fn main() {
    println!("Guess the number!");
    println!("Please input your guess.");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess)
    .expect("Failed to read line");
    println!("You guessed: {}", guess);
}

```

- To obtain user input and then print the result as output, we need to bring the io (input/output) library into scope. The io library comes from the
  standard library (which is known as _std_). `use std::io;`
  - By default rust brings in a few values from the prelude.If you need to include something thats not in the prelude import it.
- `fn main()` is the entry point of the program.
- `let mut guess = String::new();` this creates a place to store user input.It creates a mutable variable `guess` and on the other side of the `=` is the value guess is bound to, so by calling `String::new` you create a new instance of a _String_ (_UTF-8 encoded bit text_).
- The `::` syntax in the `::new` line indicates that new is an _associated function_ of the String type. An associated function is implemented on a type, in this case String, rather than on a particular instance of a String. Some languages call this a _static method_.This new function creates a new string (_It is very common on many types,to create new instances_).
- _In summary, the `let mut guess = String::new();` line has created a mutable variable that is currently bound to a new, empty instance of a String_
- Recall that we included input/output functionality by importing the `io` crate from `std`.Now well call the `stdin`.
  `io::stdin().read_line(&mut guess).expect("Failed to read line")`
  - **NOTE** - _If we hadn’t listed the `use std::io` line at the beginning of the program,we could have written this function call as `std::io::stdin`_
- `stdin` is a type that represents a handle
  to the standard input for your terminal.
- On to `read_line`, this gets standard input and places it into a string and takes an argument `&mut guess`(_Which is a reference to the guess variable in memory._) . References in rust are immutable by default thats why we type `&mut guess` rather than `&guess` .

## Handling Potential failure.

- Now let’s discuss what `io::stdin().read_line(&mut guess).expect("Failed to read line")` does.
  As mentioned earlier, read*line puts what the user types into the string
  we’re passing it, but it also returns a value in this case, an `io::Result`. Rust
  has a number of types named \_Result* in its standard library: a generic Result
  as well as specific versions for submodules, such as `io::Result`.
  The Result types are _enums_. An
  enumeration is a type that can have a fixed set of values, and those values are called the _enum’s variants_.
  For Result, the variants are `Ok` or `Err`. The Ok variant indicates operation success, and inside Ok is the successfully generated value. The Err variant means the operation failed, and Err contains information about how or why the operation failed.
  The purpose of these Result types is to encode error-handling information. Values of the Result type, like values of any type, have methods defined on them. An instance of `io::Result` has an `expect` method that you can call.If this instance of `io::Result` is an Err value, expect will cause the program to
  crash and display the message that you passed as an argument to expect. If
  the read_line method returns an Err, it would likely be the result of an error coming from the underlying operating system. If this instance of `io::Result` is an Ok value, expect will take the return value that Ok is holding and return just that value to you so you can use it. In this case, that value is the number of bytes in what the user entered into standard input.

- On to the next line, to learn more about using `println!` with place holders [click me 😭](https://example.com/).

## Generate a secret number.

- To include a random number we need to add a crate for this functionality since rust does not come with it. Get crate [here](https://crates.io/crates/rand/).

### Using Crates to get more functionality

- Remember that a crate is a collection of Rust source code file.The projects we have been building are _binary crates_ which is an executable. THe `rand` crate in a _library crate_ which contains code to be used in other programs. To add rand , add `rand = "0.3.14"` below `[dependencies]` in the [_Cargo.toml_](https://example.com/) file.
- Cargo understands Semantic Versioning
  (sometimes called _SemVer_), which is a standard for writing version numbers.
  The number `0.3.14` is actually shorthand for `^0.3.14`, which means “any version that has a public API compatible with version `0.3.14`.”

- [Cargo.lock](https://example.com/) File Ensuring Reproducible Builds by using the dependencies specified to generate the same artifact.So it basically stores all the versions that are compatible and where used in your program.
- To Update a crate. Run `cargo update`.The next time you run cargo build , Cargo will update the registry of crates available and reevaluate your rand requirements according to the new version you have specified

### Generate Random Numbered

- import rand crate `use rand::Rng;`
  - The Rng trait defines methods
    that random number generators implement, and this trait must be in scope for us to use those method
- `let secret_num = rand::thread_rng().gen_range(1,101);`
  - The `rand::thread_rng` function will give us the particular random number generator that we’re going to use: one that is local to the current thread of execution and seeded by the operating system. Then we call the gen*range method on the random number generator. This method is defined by the Rng trait that we brought into scope with the use rand::Rng statement. The gen_range method takes two numbers as arguments and generates a random number between them. It’s inclusive on the lower bound but exclusive on the upper bound, so we need to specify 1 and 101 to request a number between 1 and 100.(\_Incase you want to go through the documentation use `cargo doc --open` then click rand*)

### Comparing Guess to Secret Number

- Now we have a random number and user input.
- Import `use std::cmp::Ordering;`
- Then to handle the possible values of comparing 2 numbers.

```rs
match guess.cmp(&secret_number) {
Ordering::Less => println!("Too small!"),
Ordering::Greater => println!("Too big!"),
Ordering::Equal => println!("You win!"),
}
```

- Like Result, `Ordering` is another enum, but the variants for Ordering are Less , Greater , and Equal . These are the three outcomes that are possible when you compare two values.We use a match
  expression to decide what to do next based on which variant of Ordering was returned from the call to `cmp` with the values in guess and secret*number.A match expression is made up of arms. \_An arm consists of a pattern and the code that should be run if the value given to the beginning of the match expression fits that arm’s pattern*. Rust takes the value given to match and looks through each arm’s pattern in turn. Rust then lets you express a variety of situations your code might encounter.

- Let’s walk through an example of what would happen with the match expression. Say that the user has guessed 50 and the randomly generated secret number is 38. When the code compares 50 to 38, the cmp method will return `Ordering::Greater`, because 50 is greater than 38. The match expression gets the `Ordering::Greater` value and starts checking each arm’s pattern. It looks at the first arm’s pattern, `Ordering::Less`, and sees that the value `Ordering::Greater` does not match `Ordering::Less`, so it ignores the code in that arm and moves to the next arm. The next arm’s pattern `Ordering::Greater`, does match `Ordering::Greater` ! The associated code in that arm will execute and print Too big! to the screen. The match expression ends because it has no need to look at the last arm in this scenario.
- To parse the string to an unsigned integer bit (\_\_good choice for a positive number) before comparison `let guess:u32 = guess.trim().parse().expect("Please Type a Number")`
- We create a variable named `guess` again because Rust allows us to _shadow_ the previous value of guess with a new one. This feature is often used in situations in which you want to convert a value from one type to another type. **Shadowing** lets us reuse the guess variable name rather than forcing us to create two unique variables, such as `guess_str` and `guess`.

### Allow multiple guesses by looping.

- The `loop` keyword creates an infinite loop. We’ll add that now to give users more chances at guessing the number.

```rs
loop {
  println!("Please input your guess.");

  match guess.cmp(&secret_number) {
  Ordering::Less => println!("Too small!"),
  Ordering::Greater => println!("Too big!"),
  Ordering::Equal => println!("You win!"),
    }
  }
}
```

- To quit after a correct guess add.

```rs
      Ordering::Equal => {
              println!("You win!");
              break;
            }
        }
    }
}
```

- To handle invalid input. We can modify our parse function.This will help us ignore a non-number when the user inputs.

```rs
let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
    Err(_) => continue,
};
```
