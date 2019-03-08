package main 

import (
	"fmt"
	"welcome"
)

var name string 

func main(){
	fmt.Println("Main package")
	welcome.Helper()
	name = "Shiv"
	fmt.Println(name)

	var str = "Hello"
	fmt.Println(str)
	// str[3] = 'a'
	// fmt.Println(str)
	str = "Shivam"
	fmt.Println(str)

	var a = "Siddhu"

	var b = "Jain"
	c := a+" "+b
	fmt.Println(c)

	c,d := 2,3

	fmt.Println(d+c)
}