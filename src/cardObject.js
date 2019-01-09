class Card {
    constructor(answer, question, color) {
        this.catagory = "personal"
        this.question = question;
        this.answer = answer;
        this.color = color || "#f1652a";
        this.falseQuestion = ["", "", "", "", "", "", "", ""]
    }
}

export default Card;