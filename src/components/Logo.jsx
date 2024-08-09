function Logo({className, imgSource}) {
  return (
    <div className={className}>
        <img src={imgSource}/>
    </div>
    //   <div className="w-[84px]">
    //     <img src="https://utmost.org/wp-content/uploads/logo-my-utmost-for-his-highest-badge.svg"/>
    // </div>
  )
}

export default Logo
