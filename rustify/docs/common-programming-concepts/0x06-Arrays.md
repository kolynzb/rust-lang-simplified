# Arrays in Rust

- Arrays in rust have a fixed number of elements of the same datatype.

`syntax`

```rs
 let a = [1, 2, 3, 4];
// initialization
 let array_name:[datatype;length]=[element1,element2];

// Example
 let numbers:[i32;5]=[1,2,3,4,5];

//  To  print we use the debug trait
 println!("{:?}", numbers);

```

- Arrays are useful when you want your data allocated on the stack rather than the heap or when you want to ensure you always have a fixed number of element.

## Accessing Elements

- To get a single value we can use square bracket notation with the index of the element.
  ` println!("{}", numbers[0]);`

- To change an element make sure the array is mutable
  ` let mut numbers:[i32;5]=[1,2,3,4,5];`
- Reassign values to arrays
  `numbers[2]=20;`

## Operations on Arrays

- Get Array Length
  `println!("array length {}", numbers.len())`
- **Note that** Arrays are stack allocated.
- To get memory taken by array in bytes
  ```rs
  println!("Array occupies {} bytes",std::mem::size_of_val(&numbers));
  ```
- Get Slice from one to three

```rs
  let slice: &[i32] = &numbers[1..3];
  println!("Slice: {:?}",slice);
```
