import { CastItemImage, CastItemImageWrapper } from './CastItem.styled';

const PATH = 'https://image.tmdb.org/t/p/w500'
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
export const CastItem = ({name, img, character}) => {
  const photo = img?PATH+img:defaultImg;
  return <>
    <CastItemImageWrapper>
      <CastItemImage src={photo} alt={name} />
    </CastItemImageWrapper>
    <h3>{name}</h3>
    <p>{character}</p>
  </>
}
