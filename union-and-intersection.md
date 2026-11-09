# Union and Intersection Types

Union (`|`) lets us use different types. Intersection (`&`) combines types.

For example, a user needs a name and an ID. The ID can be a number or a string.

```ts
type Person = {
  name: string;
};

type User = Person & {
  id: number | string;
};

const user1: User = { name: "Fahim", id: 1 };
const user2: User = { name: "Ismail", id: "U2" };
```

Here, `number | string` means the ID can be a number or a string. The `&` combines `Person` with the ID property, so a user needs both a name and an ID.
