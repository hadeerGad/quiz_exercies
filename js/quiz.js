export class quiz {
    constructor(data, numberOfQuestions) {
        this.data = data;
        this.numberOfQuestions = numberOfQuestions;
        this.currentQuestionElement = document.getElementById("currentQuestion");
        this.totalQuestions = document.getElementById("totalQuestions");
        this.question = document.getElementById("question");
        this.rowAnswer = document.getElementById("rowAnswer");
        this.currentQuestion = 0;
        this.submitBtn = document.getElementById("next");
        this.submitBtn.addEventListener("click", this.nextQuestion.bind(this))
        this.answerElement = document.getElementsByName("answer")
        this.showQuestion()
        this.tryBtn= document.getElementById("tryBtn");
        this.tryBtn.addEventListener("click", this.tryAgain.bind(this))
        this.scoreElement= document.getElementById("score");
        this.score=0
    }

    showQuestion() {


        this.question.innerHTML = this.data[this.currentQuestion].question;
        this.currentQuestionElement.innerHTML = this.currentQuestion + 1;
        this.totalQuestions.innerHTML = document.getElementById("number").value;
        this.showAnswers(this.currentQuestion)
    }

    showAnswers(currentQuestion) {
        let answers = [
            this.correctAnswer = this.data[currentQuestion].correct_answer,
            ...this.data[currentQuestion].incorrect_answers
        ]
        answers = answers.sort((a, b) => 0.5 - Math.random());

        let catronna = ``
        for (let i = 0; i < answers.length; i++) {
            catronna += `<div class="form-check">
                      <label class="form-check-label">
                      <input type="radio" class="form-check-input" name="answer" id="${i}" value="${answers[i]}">
               ${answers[i]}
           </label>
       </div>`

        }
        this.rowAnswer.innerHTML = catronna;

    }

    nextQuestion() {
        $("#Correct").fadeOut(0)
        $("#inCorrect").fadeOut(0)
        let checkedAnswer = [...this.answerElement].filter(el => el.checked)[0].value
        console.log(checkedAnswer);
        this.checkAnswer(checkedAnswer)
        this.currentQuestion++;
        if(this.currentQuestion < this.numberOfQuestions){
            this.  showQuestion();
        }
        else{
            this.finish()
        }
      
    }



    checkAnswer(checkedAnswer) {
        if (this.data[this.currentQuestion].correct_answer == checkedAnswer) {
            $("#Correct").fadeIn(500)
this.score++
        }
        else {
            $("#inCorrect").fadeIn(500)
        }
    }


    finish(){
        $("#quiz").fadeOut(500, function(){
            $("#finish").fadeIn(500)
        })
        this.scoreElement.innerHTML= this.score +"/"+ this.numberOfQuestions

    }

    tryAgain(){

        this.score=0
        this.currentQuestion=0
        this.numberOfQuestions=0
        $("#Correct").fadeOut(0)
        $("#inCorrect").fadeOut(0)
        $("#finish").fadeOut(500 , function(){
            $("#setting").fadeIn(500)
        })
    }
}