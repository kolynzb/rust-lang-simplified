# Using Struts To Structure Related Data.

- A struct, or structure, is a custom data type that lets you name and package together multiple related values that make up a meaningful group. If you’re familiar with an object-oriented language, a struct is like an object’s data attributes.

## Defining and Instantiating Struts.

- Inside curly brackets, we define the names and types of the pieces of data, which we call fields.

`User Strut definition`

```rs
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}
```

`User Strut instance`

```rs
let user1 = User {
email: String::from("someone@example.com"),
username: String::from("some_username123"),
active: true,
sign_in_count: 1,
};
```

- To get a specific value we use dot notation.
  `user.email = String::from("someone@example.com")`

- Using the field INIT short hand when variables and fields have he same name.

```rs
fn build_user(email: String, username: String) -> User {
    User {
      email: email,
        username: username,
        active: true,
        sign_in_count: 1,
      }
}
```

- A build_user function that uses field init shorthand because the email and username parameters have the same name as struct field
- You can also create instances from other struts.

```rs
let user2 = User {
  email: String::from("another@example.com"),
  username: String::from("another_username567"),
  active: user1.active,
  sign_in_count: user1.sign_in_count,
};
```

- The syntax .. specifies that the remaining fields not
  explicitly set should have the same value as the fields in the given instance.

```rs
let user2 = User {
email: String::from("another@example.com"),
username: String::from("another_username567"),
..user1
};
```

### Using Tuple Struts Without Named Fields to Create Different types

- Tuple structs have the added meaning the struct name provides but don’t have names associated with their fields; rather, they just have the types of the fields. Tuple structs are useful when you want to give the whole tuple a name and make the tuple be a different type from other tuples, and naming each field as in a regular struct would be verbose or redundant

```rs
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);
let black = Color(0, 0, 0);
let origin = Point(0, 0, 0)
```

- Note that the black and origin values are different types, because they’re instances of different tuple structs. Each struct you define is its own type, even though the fields within the struct have the same types. For example, a function that takes a parameter of type Color cannot take a Point as an argument, even though both types are made up of three i32 values.Otherwise, tuple struct instances behave like tuples: you can destructure them into their individual pieces, you can use a . followed by the index to access an individual value, and so on.

## Unit-Like Structs Without Any Fields.

- These are structs without fields. _Unit-like_ structs can be useful in situations in which you need to implement a trait on some type but don’t have any data that you want to store in the type itself.

## Ownership of Strut Data.

- It’s possible for structs to store references to data owned by something else, but to do so requires the use of lifetimes.Lifetimes ensure that the data referenced by a struct is valid for as long as the struct is. Let’s say you try to store a reference in a struct without specifying lifetimes, like this, which won’t work:

```rs
struct User {
  username: &str,
  email: &str,
  sign_in_count: u64,
  active: bool,
}
fn main() {
  let user1 = User {
    email: "someone@example.com",
    username: "some_username123",
    active: true,
    sign_in_count: 1,
  };
}

```

- Rust does include functionality to print debugging information, but we have to explicitly opt in to make that functionality available for our struct. To do that, we add the annotation `#[derive(Debug)]` just before the struct definition.
- note: in format strings you may be able to use `{:?}` (or `{:#?}` for pretty-print) instead
- Putting the specifier `:?` inside the curly brackets tells println! we want to use an output format called Debug. The _Debug trait_ enables us to print our struct in a way that is useful for developers so we can see its value while we’re debugging our code.

## Defining Methods

- Methods are similar to functions: they’re declared with the fn keyword and their name, they can have parameters and a return value, and they contain some code that is run when they’re called from somewhere else
- Methods are different from functions in that they’re defined within the context of a struct.
- Let’s change the [area](/src/struts.rs) function that has a Rectangle instance as a parameter and instead make an area method defined on the `Rectangle` struct.

```rs
#[derive(Debug)]
struct Rectangle {
  width: u32,
  height: u32,
}

impl Rectangle {
  fn area(&self) -> u32 {
    self.width * self.height
  }
}

fn main() {

  let rect1 = Rectangle { width: 30, height:50 };
  println!("The area of the rectangle is {} square pixels.",
  rect1.area());

}
```

<!-- Page 93 -->

- We start an impl (_implementation block_)
