import { useState  } from 'react';
import { QuestionAnswer } from '../QuestionsAnswer'
import { Button } from '../Button'
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
        question: 'Qual é a minha idade?',
        answers: ['17', '22', '27', '24'],
        correctAnswer: '24'
    },
    {
        id: 3,
        question: 'Qual comida eu mais gosto?',
        answers: ['Massas', 'Churrasco', 'Japonês', 'Frutos do mar'],
        correctAnswer: 'Churrasco'
    },
    {
        id: 4,
        question: 'Qual a minha profissão?',
        answers: ['Empreendedor', 'Músico', 'Militar', 'Desenvolvedor de Software'],
        correctAnswer: 'Desenvolvedor de Software'
    }
]

export function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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

    const perguntaAtual = QUESTION[currentQuestionIndex]

    const handleNextQuestion = () => {
        if(currentQuestionIndex + 1 < QUESTION.length) {
            //fazendo alteração de estado usando uma função para fazer o incremento do 'index' (posição). Sempre que estiver em um 'setState' como abaixo fazendo uma mutação no valor dele, é recomendado fazer desta forma pegando o valor atual e incrementando.
            setCurrentQuestionIndex(index => index + 1)
        }

        //Funcionalidade de reset, pois a pergunta já foi respondida
        setPerguntaRespondida(false)
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

                {perguntaRespondida && (
                    <Button onClick={handleNextQuestion}>Próxima pergunta</Button>
                )}
            </div>
           </div>
        </div>
    )
}

/* função set - atualiza o valor do estado de uma outra função determinada */