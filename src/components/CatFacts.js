import React, { useEffect, useState } from 'react'

import {BiRightArrowAlt} from 'react-icons/bi';
import {TbRefresh} from 'react-icons/tb';
import './CatFacts.scss';

const CatFacts = () => {
  const [catFact, setCatFact] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch a random cat fact
    getCatFact();
  }, [])
  

  const getCatFact = () => {
    setLoading(true);

    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {

      setTimeout(() => {
        setLoading(false);
        setCatFact(data);
        }, 500);     
    })
  }

  return (
    <div className="card">
        <div className="card__catFacts">
          {loading ? "loading..." : catFact.fact}
        </div>
        <div className="card__button" onClick={getCatFact}>
          <span>Get Cat Fact</span>
          {loading ? <TbRefresh /> : <BiRightArrowAlt />}
        </div>
    </div>
  )
}

export default CatFacts;