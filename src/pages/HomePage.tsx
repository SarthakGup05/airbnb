import React from 'react';
import { Categories } from '../components/home/Categories';
import { ListingsGrid } from '../components/home/ListingsGrid';

export function HomePage() {
  return (
    <>
      <Categories />
      <ListingsGrid />
    </>
  );
}