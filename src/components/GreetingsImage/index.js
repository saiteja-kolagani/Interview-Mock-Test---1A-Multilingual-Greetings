import './index.css'

const GreetingsImage = ({lang, details}) => {
  const image = details.filter(each => each.id === lang)
  return (
    <img
      src={image[0].imageUrl}
      alt={image[0].imageAltText}
      className="image"
    />
  )
}
export default GreetingsImage
