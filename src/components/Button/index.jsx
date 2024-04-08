import S from './styles.module.css'

export function Button (props) {
    return (
        //Children vai guardar o que botarmos na tag
    <button className={S.btnNext} onClick={props.onClick}>{props.children}</button>
    )
}