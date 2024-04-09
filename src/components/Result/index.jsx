import S from './styles.module.css'
import { Button } from '../Button'

export function Result (props) {
    let quizResult = '';

    if (props.correctAnswerCount >= 3) {
        quizResult = "Parabéns, você conhece bem o Samuel!"
    } else {
        quizResult = "Infelizmente você ainda não conhece bem o Samuel."
    }

    return (
        <div className={S.container}>
            <h1 className={S.title}>{quizResult}</h1>

            <h2 className={S.subtitle}>Você acertou {props.correctAnswerCount} de {props.quizSize} </h2>

            <Button onClick={props.hadleTryAgain}>Tente novamente</Button>
        </div>
    )
}