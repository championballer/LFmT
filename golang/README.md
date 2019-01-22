# GOlang

This repository contains code and info about the GOlang.

Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with the added benefits of memory safety, garbage collection, structural typing, and CSP-style concurrency. 

Builds for many langs are really inefficient as some header files get loaded multiple times when building a large program. It is possible for a library to be compiled and to be included in our code even if it is completely un-necessary. Google suffered from these exact problems as builds took half an hour for even minor changes since their source code was so large. So they decided to come up with a new language which some goals in mind like : fast build, fast execution, concurrency and garbage collection. 

## Goals for Go:

* Fast builds
* Fast execution
* Concurrency
* Garbage collection

__Note:__ _A team at Google found that a build of a Go program did 50 times fewer file includes than a comparable C++ program._

## System workspace + Setting up

To work with golang there is a specific workspace that needs to be maintained on the computer and 3 paths need to be maintained in the bashrc files to use go properly everywhere. They are : 

	


To execute go files, we can either build an executable(`go build run.go`) and then run it normally. `./run` or we can go not store any build and run the file straight away(`go run run.go`)(Good for debugging purposes).

## File format

Each file begins with the package declaration to which the current file belongs to. 'main' is the main package and the file starts from there. Then we have import for the packages that will be utilised in the current file. If any package is included and not used, then the program won't compile, so import carefully. 

```golang
package main

// We'll be calling functions from these two packages.
// So we need to import them here.
// Note the parentheses: this syntax lets you import
// multiple packages at once.
import (
    "fmt"
    "math"
)

// Declare a variable that will be accessible throughout
// the current package.
var myNumber = 1.23

func main() {
    // Call the Ceil function from the "math" package.
    // Then, assign it to a variable. This is the "short
    // variable declaration" syntax, which we'll talk
    // about in the "Variables" video.
    roundedUp := math.Ceil(myNumber)
    // Call the Floor function from the "math" package.
    roundedDown := math.Floor(myNumber)
    // Call the Println function from the "fmt" package.
    fmt.Println(roundedUp, roundedDown)
} 
```

The import packages should either be in the standard directory that comes post installation of go. Or should be in the src folder of the workspace to which the GOPATH points to. We need to create separate directories for the files we make to be included in our main file and then accordingly their file path needs to be imported in the main file. The path can be added for after the src file since the compiler looks their by default. The package name acts as the qualifier for the main file and can be used hence. Here math has been imported. math.Ceil(myNumber) sees the math package act as qualifier and Ceil act as the exported function. Methods and variables with Capital letter as the start are the ones exported and the ones with lower case are the ones not exported and hence won't be usable outside their own package.

For packages hosted online, we need to download them first. For that we need to use go get `package name`. This brings them in contention by storing them in src and from there they can be used as stated above.
