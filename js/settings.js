 import { quiz } from "./quiz.js";

export class settings{
    constructor(){
this.categoryElement= document.getElementById("category");
this.difficultyElement= document.getElementsByName("difficulty");
this.numberOfQuestionElements= document.getElementById("number");
this.startBtn= document.getElementById("strtBtn")
this.startBtn.addEventListener("click",this.startQuiz.bind(this))
    }


    async startQuiz(){
        let category= this.categoryElement.value
        let difficuty= [...this.difficultyElement].filter(element=>element.checked)[0].id
        let numberOfQuestions= this.numberOfQuestionElements.value;
        
        let url= `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficuty}`
       let data=await this.fetchURL(url)
       console.log(data);
       if(data.length>0){
           
           $("#setting").fadeOut(700,()=>{
               $("#quiz").fadeIn(700)
           })

           new quiz(data ,numberOfQuestions );
       }
        
    }

    async fetchURL(url){
        let response= await fetch(url)
        let data= await response.json()
        return data.results

    }
}