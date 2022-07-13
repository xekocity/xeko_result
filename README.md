## xeko_result

A utility for Deno that helps code fail gracefully.

What makes this implementation of result different from others is that it does
not wrap the value of the object in a class like this

```
class Result<string, Error> { ...
```

instead it creates a type that can be a value or error

```
type Result<string> = string | Error
```

Notice that there is no second generic type to this implementation. Instead it
is assumed that every Result has the type Error
