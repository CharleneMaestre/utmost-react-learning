import { FaCalendarAlt } from "react-icons/fa";

function TextOverline({text}) {
  return (
    <>
      <div className="text-[white] text-xl uppercase font-semibold leading-[60px] mb-6">
          <p className="font-proximaNova">
            <FaCalendarAlt className="inline mr-2"/>
            {text}
          </p>
      </div>
    
    </>

  )
}

export default TextOverline
