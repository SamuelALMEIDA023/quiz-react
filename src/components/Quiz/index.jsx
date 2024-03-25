import { QuestionAnswer } from '../QuestionsAnswer'
import S from './styles.module.css'

export function Quiz() {
    return (
        <div className={S.container}>
           <div className={S.card}>
            <div className={S.quiz}>
                <header className={S.quizHeader}>
                <span className={S.questionCount}>PERGUNTA 1/4</span>
                <p className={S.question}>Qual é o seu nome?</p>
                </header>

                <ul className={S.answers}>
                    <li className={S.answerItem}><QuestionAnswer /></li>
                    <li className={S.answerItem}><QuestionAnswer /></li>
                    <li className={S.answerItem}><QuestionAnswer /></li>
                    <li className={S.answerItem}><QuestionAnswer /></li>
                </ul>
            </div>
           </div>
        </div>
    )
}