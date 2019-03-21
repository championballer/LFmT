function classRoom(){
	let instructors = ["Elie","Colt"];
	return {
		getInstructors: ()=>{
			return instructors.slice();
		},
		addInstructors: (instructor)=>{
			instructors.push(instructor);
			return instructors.slice(); 
		}
	}
}

let course = classRoom();
console.log(course.getInstructors());
course.addInstructors("Tim");
console.log(course.getInstructors());

let course2 = classRoom();
console.log(course2.getInstructors());