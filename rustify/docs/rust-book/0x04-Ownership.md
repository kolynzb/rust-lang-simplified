#  Chtr 4: Ownership in Rust

<iframe width="560" height="315" src="https://www.youtube.com/embed/VFIOSWy93H0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- This is Rust's most unique feature ,and it enables Rust to make memory safety guarantees without needing a garbage collector.
- All programs have to manage the way they use a computer’s memory while running. Some languages have [_garbage collection_](https://www.geeksforgeeks.org/garbage-collection-java/) that constantly looks for no longer used memory as the program runs; in other languages the programmer must explicitly allocate and free the memory. Rust uses a third approach: memory is managed through a system of ownership with a set of rules that the compiler checks at compile time. None of the ownership features slow down your program while it’s running.

## Stack & Heap

<iframe width="560" height="315" src="https://www.youtube.com/embed/_8-ht2AKyH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Both the stack and the heap are parts of memory that are available to your code to use at runtime, but they are structured in different ways. The stack stores values in the order it gets them and removes the values in the opposite order.This is referred to as _last in, first out_. Think of a stack of plates: when you add more plates, you put them on top of the pile, and when you need a plate, you take one off the top. Adding or removing plates from the middle or bottom wouldn’t work as well! Adding data is called _pushing_ onto the stack, and removing data is called _popping_ off the stack.
- All data stored on the stack must have a known, fixed size. Data with an unknown size at compile time or a size that might change must be stored on the heap instead. The heap is less organized: when you put data on the heap, you request a certain amount of space. The operating system finds an empty spot in the heap that is big enough, marks it as being in use, and returns a pointer, which is the address of that location. This process is called _allocating on the heap_ and is sometimes abbreviated as just _allocating_. Pushing values onto the stack is not considered allocating. Because the pointer is a known, fixed size, you can store the pointer on the stack, but when you want the actual data, you must follow the pointer.

  - Think of being seated at a restaurant. When you enter, you state the number of people in your group, and the staff finds an empty table that fits everyone and leads you there. If someone in your group comes late, they can ask where you’ve been seated to find you.

- Pushing to the stack is faster than allocating on the heap because the operating system never has to search for a place to store new data; that location is always at the top of the stack. Comparatively, allocating space on the heap requires more work, because the operating system must first find a big enough space to hold the data and then perform bookkeeping to prepare for the next allocation.
- Accessing data in the heap is slower than accessing data on the stack because you have to follow a pointer to get there. Contemporary processors are faster if they jump around less in memory. Continuing the analogy, consider a server at a restaurant taking orders from many tables. It’s most efficient to get all the orders at one table before moving on to the next table.
  - Taking an order from table A, then an order from table B, then one from A again, and then one from B again would be a much slower process. By the same token, a processor can do its job better if it works on data that’s close to other data (as it is on the stack) rather than farther away (as it can be on the heap). Allocating a large amount of space on the heap can also take time.
- When your code calls a function, the values passed into the function (including, potentially, pointers to data on the heap) and the function’s local variables get pushed onto the stack. When the function is over, those values get popped off the stack.
- Keeping track of what parts of code are using what data on the heap, minimizing the amount of duplicate data on the heap, and cleaning up unused data on the heap so you don’t run out of space are all problems that ownership addresses. Once you understand ownership, you won’t need to think about the stack and the heap very often, but knowing that managing heap data is why ownership exists can help explain why it works the way it does.

|                              | Pros                                                                                                                          | Cons                                                                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Garbage Collection**       | &#183; Error Free\* <br/> &#183; Faster write time                                                                            | &#183; No Control over memory <br/> &#183; Slower and unpredictable runtime performance <br/>&#183; larger Program size |
| **Manual Memory Management** | &#183; Control over memory <br/> &#183; Faster runtime performance <br/>&#183; Smaller Program size                           | &#183; Error Prone <br/> &#183; Slower write time                                                                       |
| **Ownership**                | &#183; Control over memory <br/> &#183; Error Free\* <br/> &#183; Faster runtime performance <br/>&#183; Smaller Program size | &#183; Slower Write Time.Learning Curve (_Fighting with Borrower checker_)                                              |

- So if your writing a high level app(website) it makes sense to sacrifice runtime performance for a lesser size for ease of use and faster write time you get with the _garbage collector_ and manual memory management for high-level components.

## Ownership Rules

1. Each value in Rust has a variable that’s called its _owner_.
2. There can be only one owner at a time.
3. When the owner goes out of scope, the value will be dropped.

## Variable scope

- A _scope_ is the range within a program for which an item is valid.
- A variable is valid from the point its declared to the end of that scope.

  ```rs
  { // s is not valid here; it's not yet declared
  let s = "hello"; // s is valid from this point forward
  // do stuff with s
  } // this scope is now over, and s is no longer valid

  ```

## The String Type

- To illustrate ownership, we need a datatype that is more complex.The types covered previously are all stored on the stack and popped off the stack when their scope is over, but we want to look at data that is stored on the heap and explore how Rust knows when to clean up that data.
- We’ll use String as the example here and concentrate on the parts of String that relate to ownership. These aspects also apply to other complex data types provided by the standard library and that you create.
- String literals are convenient but not suitable for every situation. One reason is that they’re immutable. Another is that not every string value can be known when we write our code: e.g., taking user input and storing it? For these situations, Rust has a second string type, String. This type is allocated on the heap and as such is able to store an amount of text that is unknown to us at compile time.
  `let s = String::from("Hello")`
- The double colon `::` is an operator that allows us to namespace this particular from function under the String type rather than using some sort of name like `string_from`. _More about this in “Method Syntax”_

- This kind of string can be mutated:

  ```rs
  let mut s = String::from("hello");
  s.push_str(", world!"); // push_str() appends a literal to a String
  println!("{}", s); // this will print `hello, world!`
  ```

- **So, what’s the difference here? Why can String be mutated but literals cannot? The difference is how these two types deal with memory**

## Memory and Allocation

- In the case of a string literal, we know the contents at compile time, so the text is hardcoded directly into the final executable. _This is why string literals are fast and efficient_. But these properties only come from the string literal’s immutability. Unfortunately, we can’t put a blob of memory into the binary for each piece of text whose size is unknown at compile time and whose size might change while running the program.
- With the String type, in order to support a mutable, growable piece of text, we need to allocate an amount of memory on the heap, unknown at compile time, to hold the contents. This means

  - The memory must be requested from the operating system at runtime.
  - We need a way of returning this memory to the operating system when we’re done with our `String`.

- First part is done by us when we call `String::from` (_Common for all languages_).However, the second part is different. In languages with a garbage collector (GC), the GC keeps track and cleans up memory that isn’t being used anymore, and we don’t need to think about it. Problem with this is we need to pair exactly one allocate with exactly one free otherwise we get bugs.
- Rust takes a different path: the memory is automatically returned once the variable that owns it goes out of scope and rust calls its `drop` function.

## Ways that Variables and Data Interact:Move

- Multiple variables interact with the same data in different ways.

  ```rs
  let y= 5;
  let x= y;
  ```

- We can probably guess what this is doing: “bind the value 5 to x; then make a copy of the value in x and bind it to y.” We now have two variables, x and y, and both equal 5. This is indeed what is happening, because integers are simple values with a known, fixed size and these two 5 values are pushed onto the stack.
- Lets Consider the String Version;

  ```rs
  let S1 = String::from("string");
  let s2 = s1;
  ```

  - A String is made up of three parts, shown on the left: a pointer to the memory that holds the contents of the string, a length, and a capacity.This group of data is stored on the stack. On the right is the memory on the heap that holds the contents.
  <center>
  ![](/images/string_heap_rep.jpg)
  </center>

  - **_Length_** - Memory in bytes that the contents of the String are currently using.
  - **_Capacity_** - Memory in bytes that String has received from Operating System.
  - When we assign s1 to s2, the String data is copied, meaning we copy the pointer, the length, and the capacity that are on the stack. We do not copy the data on the heap that the pointer refers to. In other words, the data representation in memory looks like _Figure 4-2_
  <center>
  <img src="/images/string_bind.jpg" alt="string_bind drawing" />
  </center>
  - The representation does not look like _Figure 4-3_, which is what memory would look like if Rust instead copied the heap data as well. If Rust did this, the operation `s2 = s1` could be very expensive in terms of runtime performance if the data on the heap were large.
  - Earlier, we said that when a variable goes out of scope, Rust automatically calls the drop function and cleans up the heap memory for that variable.But `Figure 4-2` shows both data pointers pointing to the same location. This is a problem: when s2 and s1 go out of scope, they will both try to free the same memory. This is known as a _double free error_ and is one of the memory safety bugs we mentioned previously. Freeing memory twice can lead to memory corruption, which can potentially lead to security vulnerabilities.

- To ensure memory safety, Rust considers s1 to no longer be valid and, therefore, Rust doesn’t need to free anything when s1 goes out of scope. Check out what happens when you try
  to use s1 after s2 is created; it won’t work.

## Ways That Variables and Data Interact: Clone

- If we do want to [_deeply copy_](https://www.geeksforgeeks.org/difference-between-shallow-and-deep-copy-of-a-class/) the heap data of the String, not just the stack data, we can use a common method called `clone`.Here Heap data is copied

```rs
let s1 = String::from("hello");
let s2 = s1.clone();
println!("s1 = {}, s2 = {}", s1, s2);
```

## Stack-Only Data: Copy

- There’s another wrinkle we haven’t talked about yet. The [code](#ways-that-variables-and-data-interactmove) using integers works and is valid.
- But this code seems to contradict what we just learned: we don’t have a call to `clone`, but x is still valid and wasn’t moved into y.The reason is that types such as integers that have a known size at compile time are stored entirely on the stack, so copies of the actual values are quick to make. That means there’s no reason we would want to prevent x from being valid after we create the variable y. In other words, there’s no difference between deep and shallow copying here, so calling clone wouldn’t do anything different from the usual shallow copying and we can leave it out.Rust has a special annotation called `Copy` trait
- Here are some of the types that are Copy:
  • All the integer types, such as u32.
  • The Boolean type, bool, with values true and false.
  • The character type, char.
  • All the floating point types, such as f64.
  • Tuples, if they only contain types that are also Copy. For example, (i32,
  i32) is Copy, but (i32, String) is not.

## Ownership & Functions.

- The semantics for passing a value to a function are similar to those for assigning a value to a variable. Passing a variable to a function will move or copy, just as assignment does

```rs
fn main() {
let s = String::from("hello"); // s comes into scope
takes_ownership(s); // s's value moves into the function...
// ... and so is no longer valid here
let x = 5; // x comes into scope
makes_copy(x); // x would move into the function,
// but i32 is Copy, so it's okay to
// still use x afterward
} // Here, x goes out of scope, then s. But because s's value was moved,
// nothing special happens.
fn takes_ownership(some_string: String) { // some_string comes into scope
println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
// memory is freed.
fn makes_copy(some_integer: i32) { // some_integer comes into scope
println!("{}", some_integer);
} // Here, some_integer goes out of scope. Nothing special happens.
```

- If we tried to use s after the call to takes_ownership, Rust would throw a compile-time error. These static checks protect us from mistakes. Try adding code to main that uses s and x to see where you can use them and where the ownership rules prevent you from doing so.

## Return Values & Scope

- Return values can also transfer ownership.

```rs
fn main() {
let s1 = gives_ownership(); // gives_ownership moves its return
// value into s1
let s2 = String::from("hello"); // s2 comes into scope
let s3 = takes_and_gives_back(s2); // s2 is moved into
// takes_and_gives_back, which also
// moves its return value into s3
} // Here, s3 goes out of scope and is dropped. s2 goes out of scope but was
// moved, so nothing happens. s1 goes out of scope and is dropped.
fn gives_ownership() -> String { // gives_ownership will move its
// return value into the function
// that calls it
let some_string = String::from("hello"); // some_string comes into scope
some_string // some_string is returned and
// moves out to the calling
// function
}
// takes_and_gives_back will take a String and return one
fn takes_and_gives_back(a_string: String) -> String { // a_string comes into
// scope
a_string // a_string is returned and moves out to the calling function
}
```

- The ownership of a variable follows the same pattern every time: assigning a value to another variable moves it. When a variable that includes data on the heap goes out of scope, the value will be cleaned up by drop unless the data has been moved to be owned by another variable. Taking ownership and then returning ownership with every function is a bit tedious. What if we want to let a function use a value but not take ownership? It’s quite annoying that anything we pass in also needs to be passed back if we want to use it again, in addition to any data resulting from the body of the function that we might want to return as well.
- It’s possible to return multiple values using a tuple.

```rs
fn main() {
  let s1 = String::from("hello");
  let (s2, len) = calculate_length(s1);
  println!("The length of '{}' is {}.", s2, len);
}
fn calculate_length(s: String) -> (String, usize) {
  let length = s.len(); // len() returns the length of a String
  (s, length)
}
```

- But this is too much ceremony and a lot of work for a concept that should be common. Luckily for us, Rust has a feature for this concept, called [_references_](#references-and-borrowing)

## References and Borrowing

- The issue with the tuple code is that we have to return the
  String to the calling function so we can still use the String after the call to calculate_length, because the String was moved into calculate_length.
- Here is how you would define and use a calculate_length function that has a reference to an object as a parameter instead of taking ownership of the value.

```rs
fn main() {
  let s1 = String::from("hello");
  let len = calculate_length(&s1);
  println!("The length of '{}' is {}.", s1, len);
}
fn calculate_length(s: &String) -> usize {
  s.len()
}
```

- These ampersands are references.
<center>
  <img src="/images/ref.jpg" alt="drawing" />
</center>

- The `&s1` syntax lets us create a reference that refers to the value of s1 but does not own it. Because it does not own it, the value it points to will not be dropped when the reference goes out of scope.Likewise, the signature of the function uses `&` to indicate that the type of the parameter s is a reference. Let’s add some explanatory annotations

```rs
fn calculate_length(s: &String) -> usize { // s is a reference to a String
s.len()
} // Here, s goes out of scope. But because it does not have ownership of
// what it refers to, nothing happens
```

- The scope in which the variable s is valid is the same as any function parameter’s scope, but we don’t drop what the reference points to when it goes out of scope because we don’t have ownership. When functions have references as parameters instead of the actual values, we don’t need to return the values in order to give back ownership, because we never had ownership.
- We call having references as function parameters borrowing. As in real life, if a person owns something, you can borrow it from them. When you’re done, you have to give it back
- So if we try to modify what we borrowed we get an error.

```rs
fn main() {
let s = String::from("hello");
change(&s);
}
fn change(some_string: &String) {
some_string.push_str(", world");
}
```

## Mutable References

```rs
fn main() {
let mut s = String::from("hello");
change(&mut s);
}
fn change(some_string: &mut String) {
some_string.push_str(", world");
}
```

- But mutable references have one big restriction: you can have only one mutable reference to a particular piece of data in a particular scope.
- The benefit of having this restriction is that Rust can prevent data races at compile time. A data race is similar to a race condition and happens when these three behaviors occur:
  • Two or more pointers access the same data at the same time.
  • At least one of the pointers is being used to write to the data.
  • There’s no mechanism being used to synchronize access to the data
- A similar rule exists for combining mutable and immutable references

```rs
let mut s = String::from("hello");
let r1 = &s; // no problem
let r2 = &s; // no problem
let r3 = &mut s; // BIG PROBLEM
println!("{}, {}, and {}", r1, r2, r3);
```

## Dangling References

- a pointer that references a location in memory that may have been given to someone else, by freeing some memory while preserving a pointer to that memory.
- the compiler guarantees that references will
  never be dangling references.

## The Rules of References

- Let’s recap what we’ve discussed about references:
  • At any given time, you can have either but not both of the following: one
  mutable reference or any number of immutable references.
  • References must always be valid.
  Next, we’ll look at a different kind of reference: slices

## The Slice Type

- They don't have ownership. Slices let you reference a contiguous sequence of elements in a collection rather than the whole collection.

### String Slices

```rs
let s = String::from("hello world");
let hello = &s[0..5];
u let world = &s[6..11];
```

`[starting _index..ending_index]`
