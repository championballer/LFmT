package main 

import (
	"fmt"
	"math"
)

var Num = 1.2

func main(){
	roundedUp := math.Ceil(Num)
	roundDown := math.Floor(Num)
	fmt.Println(roundedUp,roundDown)
}