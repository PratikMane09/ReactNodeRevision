// import { msg,add,student} from "./f1.js";
import * as x from "./f1.js"
import abc from "./f1.js"
document.getElementById("para").innerHTML=x.msg
document.getElementById("para1").innerHTML=x.add()

let stud1=new x.student(2,"pratik")
document.getElementById("h1").innerHTML=stud1.display()
document.getElementById("h2").innerHTML=abc()


