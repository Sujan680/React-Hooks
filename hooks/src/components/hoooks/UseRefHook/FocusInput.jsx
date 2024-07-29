import { useRef } from "react"


const FocusInput = () => {
    
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

  return (
    <div>
        {/* accessing the DOM elements directly */}
        <input ref={inputRef} type="text" placeholder="Focus me" />
        <button onClick={handleClick}> Focus Me </button>
    </div>
  )
}

export default FocusInput