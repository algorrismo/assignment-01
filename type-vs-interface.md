# Type vs Interface in TypeScript

## Basic difference


```ts
type User = {
  name: string;
  age: number;
};

interface Student {
  name: string;
  age: number;
}
```

Interfaces with the same name can join their properties together. Type aliases cannot do this. To build on an object type, an interface can use `extends`, and a type alias can use `&`.

## When to choose which

I Use `interface` for an object like a user or product, especially when I want to add more properties using `extends`.

I Use `type` for choices like `"success" | "error"` or when a value can be more than one type, like `string | number`.


