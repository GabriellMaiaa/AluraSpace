import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Menu from '../../componentes/Menu'

const index = () => {
  return (
    <>{/**Ao invés de por uma Div, coloca-se o fragment, que não tem nenhuma função semântica   */}
    <Cabecalho/>
    <Menu/>
    </>
  )
}

export default index
