import { HeadTitle, HeadWrapper, MoviePoster, Wrapper } from './MovieInfoHead.styled';

const PATH = 'https://image.tmdb.org/t/p/w500'

export const MovieInfoHead = ({poster, title, avg, text}) => {
  return <HeadWrapper>
    <Wrapper>
      <MoviePoster src={PATH + poster} alt={title} />
    </Wrapper>
    <div>
      <HeadTitle>
        <h1>{title}</h1>
        <span>{avg}</span>
      </HeadTitle>
      <p>{text}</p>
    </div>
  </HeadWrapper>
}
