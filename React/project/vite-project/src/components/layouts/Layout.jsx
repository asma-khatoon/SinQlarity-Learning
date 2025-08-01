import Styles from './Layout.module.css'
import Menu from './MainMenu'
function Layout(props){
return <div className={Styles.Main}> 
   <main><Menu/></main>
    {props.children}
</div>
}
export default Layout;