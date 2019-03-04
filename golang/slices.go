package main 

import "fmt"

func main(){

	a:=[5]int{0,1,2,3,4}
	s1:=a[0:3]
	s2:=a[2:5]

	fmt.Println(a,s1,s2)
	fmt.Println(len(s1),cap(s1))
	fmt.Println(len(s2),cap(s2))

	s2[0] = 9
	s2 = append(s2,5)
	fmt.Println(a,s1,s2)
	fmt.Println(len(s1),cap(s1))
	fmt.Println(len(s2),cap(s2))

	s2[0] = 1
	fmt.Println(a,s1,s2)
}