import { useAppSelector } from '../hooks/redux';

export const FavouritesPage = () => {

  const {favourites} = useAppSelector(state => state.github)

  if (favourites.length === 0) return <p className='text-center'>No items</p>
  return (
    <div className='flex justify-content pt-10 mx-auto h-screen w-screen'>
      <ul className='list-none text-center'>
        {favourites.map(favourite => (
          <li key={favourite}>
            <a href={favourite} target='_blank'>{favourite}</a>
            <a href={favourite} target='_blank'>{favourite}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
