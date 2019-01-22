package main 

import "fmt"

var Myvar = 3 

func main(){
	for i:=0;i<=3;i++{
		var Myvar = 2
		fmt.Println(Myvar)
	}

	fmt.Println(Myvar)
}
