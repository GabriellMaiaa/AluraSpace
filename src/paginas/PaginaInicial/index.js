import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Menu from '../../componentes/Menu'
import Banner from './banner.png'
import styles from './PaginaInicial.module.scss'

const index = () => {
  return (
    <>{/**Ao invés de por uma Div, coloca-se o fragment, que não tem nenhuma função semântica   */}
    <Cabecalho/>
    <main>
      <section  className={styles.principal}>
      <Menu/>
        <div className={styles.principal__imagem}>
          <h1>A galeria mais completa da Galáxia</h1>
          <img src={Banner} alt="img da terra vista do " />
        </div>
      </section>
    </main>
    </>
  )
}

export default index
