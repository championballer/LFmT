package main 

import (
	"fmt"
	"welcome"
	"time"
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

	d,e := 2,3

	fmt.Println(d+e)

	const n = 500000
	fmt.Println(n)

	fmt.Println(time.Now().Weekday())

	switch time.Now().Weekday(){
	case time.Saturday, time.Sunday:
		fmt.Println("It's a weekend")
	default:
		fmt.Println("It's is a weekday")
	}

	/*
	Slices
	*/

	var sample_slice []int

	sample_slice = append(sample_slice,5)
	fmt.Println(sample_slice)
	fmt.Println(append(sample_slice,6))
	sample_slice = append(sample_slice,6)
	fmt.Println(sample_slice)

	/*
	Maps
	*/

	m := make(map[string]int)
	m["Shiv"] = 2
	m["Agrima"] = 1

	fmt.Println(m) 

	// Range

	var arr1 []int
	arr1 = append(arr1,5)
	arr1 = append(arr1,6)
	arr1 = append(arr1,7,8)

	fmt.Println(arr1)

	for _, num := range arr1{
		fmt.Print(num)
	}

}