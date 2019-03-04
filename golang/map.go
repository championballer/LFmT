package main 

import "fmt"

func main(){
	ages := map[string]float64{}

	var points map[string]float64
	points = make(map[string]float64)
	points["Shiv"]=200
	points["Agrima"]=201
	ages["Shiv"] = 21
	ages["Agrima"] = 22

	fmt.Println(ages)
	fmt.Println(points)

}