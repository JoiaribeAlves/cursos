type TestA = "text";
type CustomType = `some ${TestA}`;

const testing: CustomType = "some text";
// const testing2: CustomType = "some text 2"; error

type A1 = "Union";
type A2 = "Types";
type A3 = `${A1}` | `${A2}`;
