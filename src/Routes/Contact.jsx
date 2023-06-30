import Form from '../Components/Form'
import { useGlobalStates } from '../Contexts/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {themeState} = useGlobalStates()

  return (
    <div className={themeState? 'dark': ''}>
      <h1>Contáctanos</h1>
      <p>Si tienes alguna consulta, dejanos tus datos para que nos comuniquemos de inmediato</p>
      <Form/>
    </div>
  )
}
export default Contact