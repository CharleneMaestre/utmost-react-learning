function HeroTitle({title, className}) {
  return (
    <div className={`font-semibold text-5xl ${className}`}>
        {title}
    </div>
  )
}

export default HeroTitle
