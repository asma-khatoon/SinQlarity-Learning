import Styles from './Customwrapper.module.css'
function Customwrapper(props){
return <div className={Styles.Customwrapper}>
    {props.children}
</div>
}
export  default Customwrapper;