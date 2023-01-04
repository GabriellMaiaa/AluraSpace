import React from 'react'
import home from '../../assets/icones/home-ativo.png'//Esse ../ serve para voltar duas pastas
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import Novas from '../../assets/icones/novas-inativo.png'
import Surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="home" />
                <a href="">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="curtidas" />
                <a href="">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="vistas" />
                <a href="">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={Novas} alt="novas" />
                <a href="">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={Surpreenda} alt="surpreenda-me" />
                <a href="">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
