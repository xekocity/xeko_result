## xeko_result

Result<T> is the type used for returning and propagating errors

What makes this implementation of result different from others is that it does
not wrap the value of the object in a class like this

```typescript
class Result<string, Error> { ...
```

instead it creates a type that can be a value or error

```typescript
type Result<string> = string | Error;
```

Notice that there is no second generic type to this implementation. Instead it
is assumed that every Result has the type Error

### Usage

A function that returns a Result<string>

```typescript
function test_cool(value: string): Result<string> {
    if (value === 'cool' {
        return value
    } else {
        return new Error('this value is not cool ' + value)
    }
}
```

map a return type

```typescript
const r: Result<string> = "test";

const rm = map((f) => f + "123", r);

/// test123
console.log(rm);
```
