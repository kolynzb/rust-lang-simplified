# Vectors In Rust

- Vectors are resizable arrays.
  `let mut numbers:Vec<i32>= vec![1,2,3,4,5];`

- To get a single value we can use square bracket notation with the index of the element.
  ` println!("{}", numbers[0]);`

- To change an element make sure the array is mutable
  ` let mut numbers:[i32;5]=[1,2,3,4,5];`
- Reassign values to arrays
  `numbers[2]=20;`

- Add On to vectors

```rs
   numbers.push(5);
   numbers.push(6);
```

- Pop off last value
  ` numbers.pop();`
- Get Length
  `println!("array length {}", numbers.len())`

- To get memory taken by Vector in bytes.import the `mem` module from the `std` library
  `use std::mem`

  ```rs
  println!("Vector occupies {} bytes",mem::size_of_val(&numbers));
  ```

- Get Slice from one to three

```rs
  let slice: &[i32] = &numbers[1..3];
  println!("Slice: {:?}",slice);
```
