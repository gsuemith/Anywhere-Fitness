import React from 'react'
import ClassOffering from './ClassOffering'

const classes = [
  {
    image: "images/pic01.jpg", 
    title: "Yoga", 
    text: "Ipsum dolor sit amet"
  },
  {
    image: "images/pic02.jpg", 
    title: "Calisthenics", 
    text: "feugiat amet tempus"
  },
  {
    image: "images/pic03.jpg", 
    title: "Zumba", 
    text: "Lorem etiam nullam"
  },
  {
    image: "images/pic04.jpg", 
    title: "Strength", 
    text: "Nisl sed aliquam"
  },
  {
    image: "images/pic05.jpg", 
    title: "Spin", 
    text: "Ipsum dolor sit amet"
  },
  {
    image: "images/pic06.jpg", 
    title: "Boxing", 
    text: "Feugiat amet tempus"
  },
]

const Tiles = () => {
  return (
    /* <!-- One --> */
  <section id="one" className="tiles">
    {
      classes.map(fitClass => (
        <ClassOffering fitClass={fitClass} key={fitClass.image}/>
      ))
    }
  </section>

  )
}

export default Tiles
