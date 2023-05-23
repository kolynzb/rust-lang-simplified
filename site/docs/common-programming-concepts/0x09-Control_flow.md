# Control Flow

- The most common constructs that let you control the flow of execution of Rust code are if expressions and loops.

## If Expressions

```rs
    let number = 3;

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
```

- Blocks of code associated with the conditions in if expressions are sometimes called arms, just like the arms in match expressions.
- **Note** - the condition must be a `bool` otherwise it will return an error unlike languages like ruby and JS.

- You can add multiple conditions using `else if`.

```rs
    fn main() {
    let number = 6;
    if number % 4 == 0 {
        println!("number is divisible by 4")
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
    }
```

## if in let statement.

```rs
fn main() {
    let condition = true;
    let number = if condition {
                          5
                    } else {
                            6
            };
        println!("The value of number is: {}", number);
        }
```

- We’ll get an error. The if and else arms have value types that are incompatible, and Rust indicates exactly where to find the problem in the program.

## Repetition with Loops.

- The `loop` keyword tells Rust to execute a block of code over and over again
  forever or until you explicitly tell it to stop.

```rs
fn main() {
    loop {
        println!("again!");
    }
}
```

- You can use the `break` keyword to break out of the loop.

## Return values from loops.

- One of the uses of a loop is to retry an operation you know might fail, such as checking whether a thread has completed its job. However, you might need to pass the result of that operation to the rest of your code.To do this, you can add the value you want returned after the break expression you use
  to stop the loop; that value will be returned out of the loop so you can use it, as shown here

```rs
fn main() {
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2;
        }
    };
    println!("The result is {}", result);
}
```

## Conditionals with While loop.

```rs
    fn main() {
        let mut number = 3;
        while number != 0 {
            println!("{}!", number);
            number = number - 1;
        }
        println!("LIFTOFF!!!");
    }
```

## Loop Through a Collection

```rs
   // Loop through a collection
    let a = [10, 20, 30, 40, 50];
    let mut index = 0;
    while index < 5 {
        println!("the value is: {}", a[index]);
        index = index + 1;
    }
```

- But this approach is error prone; we could cause the program to panic if the index length is incorrect. It also slow.For a more concise approach use;

```rs
fn main() {
let a = [10, 20, 30, 40, 50];
for element in a.iter() {
    println!("the value is: {}", element);
}
}
```

## For Loop

```rs
fn main() {
    for number in (1..4).rev() {
        println!("{}!", number);
    }
        println!("LIFTOFF!!!");
}
```
