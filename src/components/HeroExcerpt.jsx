function HeroExcerpt({excerpt, className}) {
  return (
    <div className={`text-lg font-normal leading-8 w-[800px] mx-[auto] my-[0] mt-6 mb-[60px] ${className}`}>
      <p className="font-proximaNova">{excerpt}</p>
    </div>
  )
}

export default HeroExcerpt
