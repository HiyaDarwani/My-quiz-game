class Question{
    constructor(){
    this.input = createInput("Enter Your Name Here....");
    this.title = createElement('h2');
    this.question = createElement('h4')
    this.option = createElement('h4')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.Submit = createButton("Submit Your Answer")
    this.answer = createInput("Your Answer Type Here")
    

    }

    hide(){
        this.input.hide();
        this.title.hide();
      }
      
    display(){
        this.title.html(" My Quiz Game");
        this.title.position(350, 0);
        this.input.position(200, 300)
        this.Submit.position(400, 300)
        this.answer.position(300, 250)

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter?")
        this.question.position(150, 80)
        this.option.html("1: Everyone")
        this.option.position(150, 100)
        this.option1.html("2: Envelope")
        this.option1.position(150, 120)
        this.option2.html("3: Estimate")
        this.option2.position(150, 140)
        this.option3.html("4: Example")
        this.option3.position(150, 160)
        

    }
}