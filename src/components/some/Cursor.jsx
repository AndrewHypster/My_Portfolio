import { useRef } from "react";
import "../../sass/some/Cursor.sass"

const Cursor = () => {
  const cursorRef = useRef(document.querySelector('.cursor'))

 document.addEventListener("mousemove", e => {
    cursorRef.current = document.querySelector('.cursor')
    const cursor = cursorRef.current
    cursor.style = `transform: translate3d(${e.clientX - 159}px, ${e.clientY + window.pageYOffset - 3}px, 0px);`
    if (e.target.localName !== "html") {
      if (
        (e.target.parentElement.localName === "a") |
        (e.target.localName === "a")
      )
        cursor.style = `
        border: solid 2px #FFFF64;
        transform: translate3d(${e.clientX - 159}px, ${e.clientY + window.pageYOffset - 3}px, 0px);
      `
    } else cursor.style = `display:none;`
  })

  return <div className="cursor"></div>
}

export default Cursor
