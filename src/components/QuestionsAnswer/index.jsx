import S from './styles.module.css'

//recebendo passando dados props
export function QuestionAnswer (props) {
    return (
        <button 
        className= {S.btnAnswer} 
        onClick={(event) => props.handleAnswerQuestion(event, props.question, props.answer)}>
     
         {props.answer}
        </button> 
    )
   
}


/* event: qual botão foi clicado p/ estiliza-lo

   question: pergunta

   answer: resposta
*/
