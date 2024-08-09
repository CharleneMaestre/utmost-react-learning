function BackdropImage({children, imageSource}) {
    const backgroundStyle = {
        backgroundImage: `url(${imageSource})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '670px',
        width: '100%',
    };

  return (
    <div style={backgroundStyle}>
        {children}
    </div>

  )
}

export default BackdropImage
