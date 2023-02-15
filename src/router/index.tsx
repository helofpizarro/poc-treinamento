import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DriveLicence from 'src/pages/drivelicence'

import Home from '../pages'
import Counter from '../pages/counter'
import LightSwitch from '../pages/lightswitch'
import Vote from '../pages/vote'
import Contacts from 'src/pages/contacts'
import Todo from 'src/pages/todo'
import Market from 'src/pages/market'
import Calculator from 'src/pages/calculator'
import List from 'src/pages/List'
import List2 from 'src/pages/List2'
import Challenge1 from 'src/pages/challenge-1'
import Challenge2 from 'src/pages/challenge-2'
import DoceList from 'src/pages/doceList'
import Count from 'src/pages/count'
import Math from 'src/pages/math'
import Text from 'src/pages/text'
import Search  from 'src/pages/search'
import Cadastro from 'src/pages/cadastro'
import Crud from 'src/pages/crud'
import Finance from 'src/pages/finance'
import Nomes from 'src/pages/nomes'
import Filter from 'src/pages/filter'
import Training from 'src/pages/training'
import Gym from 'src/pages/gym'
import Finance2 from 'src/pages/finance2'
import HeloShoes from 'src/pages/helo-shoes'
import Imc from 'src/pages/imc'
import Form from 'src/pages/form'
import Moves from 'src/pages/moves'
import SearchPeople from 'src/pages/search-people'
import HardSkills from 'src/pages/hard-skills'
import MarketCard from 'src/pages/market-card'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  index element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/lightswitch' element={<LightSwitch />} />
        <Route path='/vote' element={<Vote />} />
        <Route path='/drivelicence' element={<DriveLicence/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/todo' element={<Todo/>} />
        <Route path='/market' element={<Market />} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/list2' element={<List2/>} />
        <Route path='/Challenge1' element={<Challenge1/>} />
        <Route path='/Challenge2' element={<Challenge2/>} />
        <Route path='/DoceList' element={<DoceList/>} />
        <Route path='/Count' element={<Count/>} />
        <Route path='/Math' element={<Math/>} />
        <Route path='/Text' element={<Text/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/Cadastro' element={<Cadastro/>} />
        <Route path='/Crud' element={<Crud/>} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/nomes' element={<Nomes />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/training' element={<Training />} />
        <Route path='/gym' element={<Gym />} />
        <Route path='/finance2' element={<Finance2 />} />
        <Route path='/helo-shoes' element={<HeloShoes />} />
        <Route path='/imc' element={<Imc />} />
        <Route path='/form' element={<Form />} />
        <Route path='/moves' element={<Moves />} />
        <Route path='/searchPeople' element={<SearchPeople />} />
        <Route path='/hard-skills' element={<HardSkills />} />
        <Route path='/market-card' element={<MarketCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
