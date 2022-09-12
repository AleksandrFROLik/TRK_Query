import React, { useState } from 'react';
import { IRepo } from '../models/models';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

export const RepoCard = ({repo}: { repo: IRepo }) => {

  const {addFavourite, removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const [isFavourite, setIsFavourite] = useState(favourites.includes(repo.html_url))

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsFavourite(true)
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsFavourite(false)
  };

  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
      <a href={repo.html_url} target='_blank'><h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className='text-sm'>
          Forks: <span className='font-bold mr-2'>{repo.forks}</span>
          Watchers: <span className='font-bold mr-2'>{repo.watchers}</span>
        </p>
        <p className='text-sm font-thin'>{repo?.description}</p>

        {!isFavourite && <button className=' py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all '
                                 onClick={addToFavourite}
        >ADD
        </button>}

        {isFavourite && <button className=' py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all '
                                onClick={removeFromFavourite}
        >REMOVE
        </button>}
      </a>
    </div>
  );
};

