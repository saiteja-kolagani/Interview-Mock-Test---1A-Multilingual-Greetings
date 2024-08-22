import React, {useState} from 'react'

import Button from '../Button'
import GreetingsImage from '../GreetingsImage'

import {MainContainer, UnorderedListContainer} from './styledComponents'

import './index.css'

const Greetings = ({languageGreetingsList}) => {
  const [lang, setLang] = useState(languageGreetingsList[0].id)

  return (
    <MainContainer>
      <h1 className="heading">Multilingual Greetings</h1>
      <UnorderedListContainer>
        {languageGreetingsList.map(each => (
          <Button
            activeLang={lang}
            setLang={setLang}
            each={each}
            key={each.id}
          />
        ))}
      </UnorderedListContainer>
      <GreetingsImage lang={lang} details={languageGreetingsList} />
    </MainContainer>
  )
}

export default Greetings
