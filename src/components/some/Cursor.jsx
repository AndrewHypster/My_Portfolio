import { useRef } from "react";
import "../../sass/some/Cursor.sass"

const Cursor = () => {
  const cursorRef = useRef(document.querySelector('.cursor'))

 document.addEventListener("mousemove", e => {
    cursorRef.current = document.querySelector('.cursor')
    const cursor = cursorRef.current
    let mouse_x = window.event.clientX, mouse_y = window.event.clientY

    cursor.style = `transform: translate(${mouse_x - 158}px, ${mouse_y - 3 + window.pageYOffset}px);`
    if (e.target.localName !== "html") {
      if (
        (e.target.parentElement.localName === "a") |
        (e.target.localName === "a")
      )
        cursor.style.border = `solid 2px #FFFF64`
    }
    console.log(mouse_x, mouse_y);
  })

  return <div className="cursor"></div>
}

export default Cursor
