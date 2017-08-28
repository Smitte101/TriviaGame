$(document).ready(function () {
    var triviaQuestions = $('#triviaQuestions');
    var questionCounter = 0;
    console.log('dom is ready', triviaQuestions);
    var html = '<div><p>Helo World</p></div>'
    var html2 = '<div><p>Hello there</p></div>'
    var questionArray = [
      {
      question: 'How is the weather today',
      answers: ['Good', 'bad', 'horrible', 'ok'],
      answer: 'bad'
    },
    {
      question: 'What day is today',
      answers: [ 'horrible','Good', 'bad', 'ok'],
      answer: 'ok'
    },
    {
      question: 'How old are you',
      answers: ['ok','Good', 'bad', 'horrible'],
      answer: 'horrible'
    }
  ]
  function questionCreater(){
    console.log("question count as we go", questionCounter);
    for (var i = questionCounter; i < questionArray.length; i++) {
    var question = questionArray[i].question;
    var answersArray  = questionArray[i].answers
    var answer
    var answershtml = '';
    for (var j = 0; j < answersArray.length; j++) {
      answersArray[j]
      console.log('conditin check', i, questionCounter);
      if (i === questionCounter){
        

        answer = questionArray[i].answer
        answershtml += '<button class="btn btn-primary buttonAnswer">';
        answershtml += answersArray[j];
        answershtml += '</button>'
      }
    }
    // console.log('answershtml', answershtml);
    triviaQuestions.append(answershtml)
    $('.buttonAnswer').click(function(e){
      e.preventDefault();
      var clickedAnswer = $(this).text()
      if (clickedAnswer === answer) {
        questionCounter += 1;
        console.log(questionCounter,'questionCounter');
        triviaQuestions.html('');
        questionCreater()
      }
      console.log('elementclicked', $(this).text(), answer);
    })

  }}
  questionCreater()
    triviaQuestions.prepend(html)

})
