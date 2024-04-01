import { useState  } from 'react';
import { QuestionAnswer } from '../QuestionsAnswer'
import S from './styles.module.css'

//array fake com a lista de info 
const QUESTION = [
    {
        id: 1,
        question: 'Qual é o meu nome?',
        answers: ['Guilherme', 'Gabriel', 'Samuel', 'Fernando'],
        correctAnswer: 'Samuel'
    },
    {
        id: 2,
        question: 'Qual é o meu nome?',
        answers: ['Guilherme', 'Gabriel', 'Samuel', 'Fernando'],
        correctAnswer: 'Samuel'
    },
    {
        id: 3,
        question: 'Qual é o meu nome?',
        answers: ['Guilherme', 'Gabriel', 'Samuel', 'Fernando'],
        correctAnswer: 'Samuel'
    },
    {
        id: 4,
        question: 'Qual é o meu nome?',
        answers: ['Guilherme', 'Gabriel', 'Samuel', 'Fernando'],
        correctAnswer: 'Fernando'
    }
]

export function Quiz() {
    const perguntaAtual = QUESTION[0];
                              // atualiza a função correctAnswerCount
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [perguntaRespondida, setPerguntaRespondida] = useState(false);

    const handleAnswerQuestion = (event, question, answer) => {
        if (perguntaRespondida) {
            return
        }

        const isCorrectAnswer = question.correctAnswer === answer;

        //vai averigual se a classe é correta ou não e vai aplaicar o estilo na resposta
        const resultClassName = isCorrectAnswer ? S.correct : S.incorrect;
        //usa-se o event.currentTarget para pegar onde está acontecendo o evento de clique - passnado a classe 'resultClassName para o 'button'
        event.currentTarget.classList.toggle(resultClassName);

        if(isCorrectAnswer) {
            setCorrectAnswerCount(correctAnswerCount + 1);
        }

        setPerguntaRespondida(true)
    }

    return (
        <div className={S.container}>
           <div className={S.card}>
            <div className={S.quiz}>
                <header className={S.quizHeader}>
                <span className={S.questionCount}>PERGUNTA 1/4</span>
                <p className={S.question}>
                    {perguntaAtual.question}
                </p>
                </header>

                <ul className={S.answers}>
                    {perguntaAtual.answers.map(answer => (
                        <li key={answer} className={S.answerItem}>
                            <QuestionAnswer 
                            answer={answer} 
                            question={perguntaAtual}
                            handleAnswerQuestion={handleAnswerQuestion} 
                            />
                        </li>
                    ))}
                </ul>
            </div>
           </div>
        </div>
    )
}

/* função set - atualiza o valor do estado de uma outra função determinada */