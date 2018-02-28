# Vec
A dead simple, low featured vector algebra library, just suited for my simple needs

## Types

* `x`, `y`, `p` are vectors / `Array`s.
* `s` means "scalar", `number`.
* `cs` is an `Array` of `Array`s / `Array` of vectors.

## Prototypes

* `Vec.zero(sz)`: create a vector of `sz` dimensions.
* `Vec.distance(x, y)`: return the _squared_ Euclidean distance between x and
  y.
* `Vec.add(x, y)`: `x += y`, element-wise.
* `Vec.sub(x, y)`: `x -= y`, element-wise.
* `Vec.div(x, s)`: scale `x` by dividing each element by `s`.
* `Vec.mul(x, s)`: scale `x` by multiplying each element by `s`.
* `Vec.dot(x, y)`: return the dot product `x` and `y`.
* `Vec.closest(p, cs)`: return the index of the vector is `cs` closest to `p`.
* `Vec.sum(x)`: sum all the elements in `x`.
* `Vec.randomPositive(sz)`: create a vector of dimension `sz` where all the
  elements are random numbers in [0; 1[.
* `Vec.random(sz)`: create a vector of dimension `sz` where all the elements
  are random numbers in [-1; 1[.
* `Vec.randomUnit(sz)`: create a _unit_ vector of dimension `sz` and where all
  the elements are random numbers in [-1; 1[.
* `Vec.randomUnitPositive(sz)`: create a _unit_ vector of dimension `sz` and
  where all the elements are random numbers in [0; 1[.
