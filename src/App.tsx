import { useState } from 'react'
import electron from '/electron.png'
import react from '/react.svg'
import vite from '/vite.svg'
import styles from 'styles/app.module.scss'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <div className={styles.logos}>
          <div className={styles.imgBox}>
            <img
              src={electron}
              style={{ height: '24vw' }}
              className={styles.appLogo}
              alt="electron"
            />
          </div>
          <div className={styles.imgBox}>
            <img src={vite} style={{ height: '19vw' }} alt="vite" />
          </div>
          <div className={styles.imgBox}>
            <img
              src={react}
              style={{ maxWidth: '100%' }}
              className={styles.appLogo}
              alt="logo"
            />
          </div>
        </div>
        <p>Develop in React typescript on the Electron framework with the vite engine</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
