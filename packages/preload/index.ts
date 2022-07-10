function domReady(
  condition: DocumentReadyState[] = ['complete', 'interactive']
) {
  return new Promise(resolve => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find(e => e === child)) {
      return parent.appendChild(child)
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find(e => e === child)) {
      return parent.removeChild(child)
    }
  }
}

/**
 * https://tobiasahlin.com/spinkit
 * https://connoratherton.com/loaders
 * https://projects.lukehaas.me/css-loaders
 * https://matejkustec.github.io/SpinThatShit
 */
function useLoading() {
  const className = 'loader12'
  const styleContent = `
  /*
  .app-logo {
    width: 100px;
    position: absolute;
    inset: 0;
    line-height: 0.5;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    place-content: center;
    padding-bottom: 50px;
    color: #fff;
  }
  h2 {
    width: 100%;
    white-space: nowrap;
    font-size: 1.5rem;
  }
  span {
    white-space: nowrap;
    font-size: 0.8em;
    opacity: 0.5;
  }
  */
  .loader12 {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: loader12-u6338d783 1s linear alternate infinite;
    top: 50%;
    margin: -65px 0 0 -75px;
  }

  :root {
    --bg-load: rgb(74, 76, 87);
  }

  @keyframes loader12-u6338d783 {
    0% {
      box-shadow: -50px 40px 0 2px #282c33,
       -25px 40px 0 0 var(--bg-load),
        0 40px 0 0 var(--bg-load),
        25px 40px 0 0 var(--bg-load),
        50px 40px 0 0 var(--bg-load),
        75px 40px 0 0 var(--bg-load),
        100px 40px 0 0 var(--bg-load),
        125px 40px 0 0 var(--bg-load);
    }
    14% {
        box-shadow: -50px 40px 0 0 var(--bg-load),
        -25px 40px 0 2px #e06b74,
        0 40px 0 0 var(--bg-load),
        25px 40px 0 0 var(--bg-load),
        50px 40px 0 0 var(--bg-load),
        75px 40px 0 0 var(--bg-load),
        100px 40px 0 0 var(--bg-load),
        125px 40px 0 0 var(--bg-load);
    }
    28% {
        box-shadow: -50px 40px 0 0 var(--bg-load),
        -25px 40px 0 0 var(--bg-load),
        0 40px 0 2px #98C379,
        25px 40px 0 0 var(--bg-load),
        50px 40px 0 0 var(--bg-load),
        75px 40px 0 0 var(--bg-load),
        100px 40px 0 0 var(--bg-load),
        125px 40px 0 0 var(--bg-load);
    }
    42% {
        box-shadow: -50px 40px 0 0 var(--bg-load),
        -25px 40px 0 0 var(--bg-load),
        0 40px 0 0 var(--bg-load),
        25px 40px 0 2px #e5c07a,
        50px 40px 0 0 var(--bg-load),
        75px 40px 0 0 var(--bg-load),
        100px 40px 0 0 var(--bg-load),
        125px 40px 0 0 var(--bg-load);
    }
    56% {
        box-shadow: -50px 40px 0 0 var(--bg-load),
        -25px 40px 0 0 var(--bg-load),
        0 40px 0 0 var(--bg-load),
        25px 40px 0 0 var(--bg-load),
        50px 40px 0 2px #62aeef,
        75px 40px 0 0 var(--bg-load),
        100px 40px 0 0 var(--bg-load),
        125px 40px 0 0 var(--bg-load);
    }
    70% {
        box-shadow: -50px 40px 0 0 var(--bg-load),
        -25px 40px 0 0 var(--bg-load),
        0 40px 0 0 var(--bg-load),
        25px 40px 0 0 var(--bg-load),
        50px 40px 0 0 var(--bg-load),
        75px 40px 0 2px #c678dd,
        100px 40px 0 0 var(--bg-load),
        125px 40px 0 0 var(--bg-load);
    }
    84% {
        box-shadow: -50px 40px 0 0 var(--bg-load),
        -25px 40px 0 0 var(--bg-load),
        0 40px 0 0 var(--bg-load),
        25px 40px 0 0 var(--bg-load),
        50px 40px 0 0 var(--bg-load),
        75px 40px 0 0 var(--bg-load),
        100px 40px 0 2px #56B6C2,
        125px 40px 0 0 var(--bg-load);
    }
    100% {
        box-shadow: -50px 40px 0 0 var(--bg-load),
        -25px 40px 0 0 var(--bg-load),
        0 40px 0 0 var(--bg-load),
        25px 40px 0 0 var(--bg-load),
        50px 40px 0 0 var(--bg-load),
        75px 40px 0 0 var(--bg-load),
        100px 40px 0 0 var(--bg-load),
        125px 40px 0 2px #ABB2BF;
    }
  }
.app-loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2b2d38;
  color: #fff;
  z-index: 9;
}
    `
  const oStyle = document.createElement('style')
  const oDiv = document.createElement('div')

  oStyle.id = 'app-loading-style'
  oStyle.innerHTML = styleContent
  oDiv.className = 'app-loading-wrap'
  oDiv.innerHTML = `<div class="${className}"></div>`
  // oDiv.innerHTML += `<div class='app-logo'>
  //   <h2>Markdown Preview</h2>
  //   <span>created by Luis Gabriel Janco A.</span>
  // </div>`

  return {
    appendLoading() {
      safeDOM.append(document.head, oStyle)
      safeDOM.append(document.body, oDiv)
    },
    removeLoading() {
      safeDOM.remove(document.head, oStyle)
      safeDOM.remove(document.body, oDiv)
    }
  }
}

// ----------------------------------------------------------------------

const { appendLoading, removeLoading } = useLoading()
domReady().then(appendLoading)

window.onmessage = ev => {
  ev.data.payload === 'removeLoading' && removeLoading()
}

setTimeout(removeLoading, 500)
