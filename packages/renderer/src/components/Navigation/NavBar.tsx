import React from 'react'
import style from './navigation.module.css'
import viteLogo from '/vite.svg'
import { isLinux } from '../../App'
import { Close, Dash, MaximizeLeft, MaximizeRight } from '../../assets/icons'

const NavBar: React.FC = (): JSX.Element => {
  /** @description you should ask me if you can close the window */
  const handleClose = (): void => {
    const closed = confirm('Are you sure you want to close the app?')
    closed && window.close()
  }

  return (
    <nav className={style.navigation}>
      <div className={style.navLeft}>
        {isLinux ? (
          <div className={style.trafficLight}>
            <div className={style.red}>
              <Close />
            </div>
            <div className={style.orange}>
              <Dash />
            </div>
            <div className={style.green}>
              <MaximizeLeft />
              <MaximizeRight />
            </div>
          </div>
        ) : (
          <figure className={style.logo}>
            <img src={viteLogo} alt="" />
          </figure>
        )}
        <ul>
          <li>readme.md</li>
        </ul>
      </div>
      <section className={style.navActions}>
        <button>+</button>
      </section>
    </nav>
  )
}

export default NavBar
