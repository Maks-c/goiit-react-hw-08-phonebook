import React from 'react';
import { FilterDiv } from './FilterStyle';
import { addFilter } from '../../../Redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const Filter = () => {
  const dispatch = useDispatch();


  const getFilter = e => {
    dispatch(addFilter(e.target.value));
  };
  const searchDebounced= AwesomeDebouncePromise(getFilter,500)


  return (
    <FilterDiv>
      <input type='text'
             name='filter'
             id='filter'
             onChange={searchDebounced}
      />
    </FilterDiv>
  );
};


export default Filter;
