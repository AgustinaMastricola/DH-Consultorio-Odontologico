import Form from '../Components/Form'
import { useGlobalStates } from '../Contexts/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {themeState} = useGlobalStates()

  return (
    <div>
      <h1>Quieres saber mas?</h1>
      <p>Envianos tus datos así te contactamos!</p>
      <Form/>
    </div>
  )
}
export default Contact