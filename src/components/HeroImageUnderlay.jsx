function HeroImageUnderlay({ src, className }) {
  return (
    <div>
        <img src={src} className={`${className} h-64`}/>
    </div>
  )
}

export default HeroImageUnderlay
