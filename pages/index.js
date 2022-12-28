import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from "next/image";
import mypicture from '../public/mypicture.jpg';
import compiler from '../public/compiler.png';
import powerplantgraph from '../public/powerplantgraph.png';
import sleepingBarber from '../public/sleepingBarber.png';
import MarkovProsesser from '../public/Markov-Prosesser.png';
import BergenBysykkel from '../public/bergenbysykkel.png';
import BlobWars from '../public/BlobWars.jpg';
import Tetris from '../public/tetris.jpg';
import StepCounter from '../public/Step-counter.png';
import Other from '../public/other.png';
import Gui from '../public/gui.png';

import {useState} from "react";
import {useRef} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const kompetanse = useRef(null);

  const Python = useRef(null);
  const Java = useRef(null)
  const Haskell = useRef(null)
  const C = useRef(null)
  const SQLPHP = useRef(null)
  const portfolio = useRef("https://github.com/oskarhogseth/portfolio")


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 75,
      behavior: 'smooth',
    });
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Min Student Portefølje</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center bg-white dark:bg-gray-900 w-screen'>
        <div>
          <section>
            <div className='border dark:border-t-0 dark:border-r-0 dark:border-l-0 dark:border-b-1 border-gray-200 fixed top-0 inset-x-0 z-100'>
              <div className='flex justify-between mx-auto max-w-screen-max text-md bg-white px-6 w-full dark:bg-gray-900'>
                  <h1 className='md:text-xl flex items-center text-lg dark:text-white font-thin'>Portefølje</h1>
                  <ul className='flex items-center p-3'>
                    <li><a onClick={() => scrollToSection(kompetanse)} className= "text-white text-md md:text-lg font-thin hover:bg-slate-400 dark:hover:bg-slate-500 ml-4 bg-gradient-to-r px-4 py-1 md:py-2 bg-slate-800 dark:bg-slate-700 rounded-md">Prosjekter</a></li>
                    <li><a onClick={() => window.open("https://linkedin.com/in/oskar-høgseth-935b5522b", '_blank')} className='text-white text-md md:text-lg font-thin hover:bg-slate-400 dark:hover:bg-slate-500 ml-2 bg-gradient-to-r px-4 py-1 md:ml-4 md:py-2 bg-slate-800 rounded-md dark:bg-slate-700'>LinkedIn</a></li>
                    <li> 
                      <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className= 'cursor-pointer text-4xl p-2 ml-1 md:ml-2 dark:text-white'
                    /></li>
                  </ul>
              </div>
            </div>
        
            <div className='text-center pt-20 pb-10 font-thin'>
              <h2 className='text-4xl pt-10 text-black md:text-5xl dark:text-white'>Oskar Høgseth</h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Student, Bergen</h3>
            </div>
          </section>

          <section className='px-10 md:px-20 lg:px-30'>
            <div className='grid place-items-center '>
              <div className="rounded-lg bg-slate-800 dark:bg-slate-700 md:flex max-w-4xl">
                <Image className="w-24 h-24 rounded-full mt-4 md:mt-0 mx-auto sm:w-32 sm:h-32 md:mx-0 md:w-72 md:h-auto md:rounded-lg" src={mypicture} alt="my picture"/>
                <div className="p-8 text-center md:text-left space-y-4">
                  
                  <p className="text-white text-lg text-md font-thin">
                    Mitt navn er Oskar og jeg er en 21 år gammel gutt fra Porsgrunn.
                    Foreløpende er jeg student ved universitet i Bergen og tar en bachelor
                    innefor informatikk - DataTeknologi.
                  </p>
                  
                  <div className="text-left font-thin">
                    <div className="text-sky-500 dark:text-sky-400">Oskar Høgseth</div>
                    <div className="text-slate-500 dark:text-slate-400">Student - DataTeknologi, UiB</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='px-10 md:px-20 lg:px-30'>
            <div className='bg-white dark:bg-gray-900'>
            <h3  className="text-2xl mt-10 text-md md:text-3xl dark:text-white font-thin">Min kompetanse</h3>
              <p className="text-lg font-thin py-2 text-gray-800 md:text-lg dark:text-white">
                Jeg går andre året på universitet i Bergen. <br/>
                Så langt har jeg fått erfaring innenfor disse rammeverkene:
              </p>
            </div>
          </section>

          <section className='px-10 md:px-20 lg:px-30'>
            <div className='max-w-xl lg:max-w-4x pt-0'>
              <div className=' bg-white dark:bg-gray-900'>
                <div className ="shadow-lg bg-slate-200 mt-3 text-lg text-center rounded-lg p-8 text-black mb-2 max-w-xl dark:text-white dark:bg-slate-700">

                  <Image className="flex w-16 h-16 mx-auto" src={compiler}/>
                  
                  <ul>
                    <li onClick={() => scrollToSection(Python)} className='py-1 hover:font-normal font-thin'>Python</li>
                    <li onClick={() => scrollToSection(Java)} className='py-1 hover:font-normal font-thin'>Java</li>
                    <li onClick={() => scrollToSection(Haskell)}className='py-1 hover:font-normal font-thin'>Haskell</li>
                    <li onClick={() => scrollToSection(C)} className='py-1 hover:font-normal font-thin'>C</li>
                    <li onClick={() => scrollToSection(SQLPHP)} className='py-1 hover:font-normal font-thin'>SQL</li>
                    <li onClick={() => scrollToSection(SQLPHP)} className='py-1 hover:font-normal font-thin'>PHP</li>
                    <li onClick={() => window.open("https://github.com/oskarhogseth/portfolio", '_blank')} className='py-1 hover:font-normal font-thin'>Next.js & Tailwind</li>
                  </ul>
                </div>
              </div>  
            </div>  
          </section>

          <section className='px-10 md:px-20 lg:px-30'>
            <div className='bg-white dark:bg-gray-900 font-thin'>
              <h3 className="text-2xl py-1 mt-10 text-md md:text-3xl dark:text-white">Mine mål</h3>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-lg dark:text-white">
                Etter min bachelor i Bergen, vil jeg gjerne gå videre med utdanningen min. <br/>
                Jeg er svært interessert i dette studiet, og ser et stort potensiale i å gå videre. <br/>
                Målet mitt er å komme inn på en master i enten 

                <a onClick={() => window.open("https://www.ntnu.no/studier/oamlt", '_blank')} className='text-sky-400'> ledelse av teknologi </a>
                eller 
                <a onClick={() => window.open("https://www.uib.no/studier/MAMN-PROG", '_blank')} className='text-sky-400'> programutvikling.</a>
              </p>
            </div>
          </section>

          <section className='px-10 md:px-20 lg:px-30' ref={kompetanse}>
            <div className='bg-white dark:bg-gray-900 font-thin'>
              <h3 className="text-2xl py-1 mt-10 md:text-3xl dark:text-white flex">Prosjekter</h3>
              <p className="text-md font-thin py-2 leading-8 text-gray-800 md:text-lg dark:text-white">
                Gjennom studiet har vi hatt mange prosjekter. <br/>
                Her er noen av de jeg er mest fornøyd med i de forskjellige programmeringsspråkene.
              </p>
            </div>
          </section>

          <section className='px-10 md:px-20 lg:px-30 font-thin'>
            <div className='bg-slate-200 rounded-lg mt-0 mb-8 py-12 dark:bg-slate-700'>
              <div className='max-w-xl lg:max-w-4xl mx-auto pt-0 px-4'>
                <div className='mt-4 pt-6 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12'>

                  <div ref={Java} className='bg-white py-0 pb-2 px-0 rounded-lg shadow-md break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {powerplantgraph} alt="Project photo"/>
                
                    
                    <p className='text-sm text-blue-800 dark:text-sky-400 mb-1 px-2'>Algoritmer</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>Power Plant Graph</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      Dette prosjektet handlet om algoritmer og hvor effektivt vi kan løse forskjellige
                      problemer gitt ved et power grid outage. <br/>
                      Målet er å gjøre gridet minst kostlig, mens det også er effektivt
                      
                    </p>
                    <div className='mb-6 flex items-center'>
                      <div className='space-y-1 px-2'>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Java</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Datastrukturer</span> <br/>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Algoritmer</span>
                      </div>
                    </div>
                  </div>
                
                  <div ref={C} className='bg-white py-0 pb-2 px-0 rounded-lg shadow-lg break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {sleepingBarber} alt="Project photo"/>
                  
                    <p className='text-sm text-blue-800 dark:text-sky-400 font-medium mb-1 px-2'>Semaphores and thread states</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>Ice Cream Station</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      I dette prosjektet tok vi i bruk et kjent problem innenfor C kode - the sleeping barber. <br/>
                      Her blir semaforer brukt for å kontrollere flere threads samtidig, uten at de kræsjer eller overkjører hverandre.
                    </p>
                    <div className='mb-6 flex items-center'>
                      <div className='space-y-1 px-2'>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>C</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Semaforer</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Threads</span> <br/>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>mutex-locks</span>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Critical sections</span>
                      </div>
                    </div>
                  </div>

                  <div ref={Haskell} className='bg-white py-0 pb-2 px-0 rounded-lg shadow-lg break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {MarkovProsesser} alt="Project photo"/>
              
                    <p className='text-sm text-blue-800 dark:text-sky-400 font-medium mb-1 px-2'>Markov prosesser og n-gram modeller</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>Text generator</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      Tekst generering prosjektet gikk ut på å bruke en Markov prosess og n-gram for å kunne genere ny tekst,
                      utifra en allerede gitt tekst. <br/>
                      Programmet analyserer og lager en grafbasert sannsynlighetsmodell, deretter blir modellen brukt
                      til å generere ny, tilfeldig tekst.
                    </p>
                    <div className='mb-6 flex items-center'>
                      <div className='space-y-1 px-2'>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Haskell</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Markov prosess</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Serialisering</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Komprimering</span>
                      </div>
                    </div>
                  </div>

                  <div ref={SQLPHP} className='bg-white py-0 pb-2 px-0 rounded-lg shadow-lg break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {BergenBysykkel} alt="Project photo"/>
              
                    <div className='dark:bg-slate-600'>
                    <p className='text-sm text-blue-800 dark:text-sky-400 font-medium mb-1 px-2'>PHP management</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>Bergen Bysykkel</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      I dette prosjektet slo vi sammen PHP og en SQL database. <br/>
                      Ved å bruke XAMPP Apache server skal PHP og databasen kunne oppdatere og fjerne
                      person som er registert i databasen. <br/>
                      Dette prosjektet var en enkel versjon av Bergen Bysykkel og hvordan man håndtere databaser.
                    </p>
                    <div className='mb-6 flex items-center '>
                      <div className='space-y-1 px-2 '>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>SQL</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>PHP</span>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className='bg-white py-0 pb-2 px-0 rounded-lg shadow-lg break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {Tetris} alt="Project photo"/>
              
                    <p className='text-sm text-blue-800 dark:text-sky-400 font-medium mb-1 px-2'>Object oriented programming</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>Tetris</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      Prosjektet gikk ut på å lage Tetris. <br/>
                      Jeg brukte Swing rammeverket som er inkludert i Java sitt standard-bibliotek. <br/>
                      Dette var en av de første store prosjektene vi hadde i Java. <br/>
                      Mye fokus på objektorientering.
                    </p>
                    <div className='mb-6 flex items-center'>
                      <div className='space-y-1 px-2'>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Java</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>objektorientert</span>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Polymorfisme</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Arv</span>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Abstrakte klasser</span>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white py-0 pb-2 px-0 rounded-lg shadow-lg break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {StepCounter} alt="Project photo"/>
              
                    <p className='text-sm text-blue-800 dark:text-sky-400 font-medium mb-1 px-2'>Signal processing</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>Step Counter</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      Prosjektet gikk ut på å lage en steg teller. <br/>
                      Ved hjelp av et lav- og høypassfilter fjerner vi støy og feilkilder til telling. <br/>
                      Dette gjøres ved enkel variant av Fourier-analyse.


                    </p>
                    <div className='mb-6 flex items-center'>
                      <div className='space-y-1 px-2'>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Haskell</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Spectrogramfiltrering</span>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Gjennomsnittlig sinuskurve</span>                      </div>
                    </div>
                  </div>

                  <div className='bg-white py-0 pb-2 px-0 rounded-lg shadow-lg break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {BlobWars} alt="Project photo"/>
              
                    <p className='text-sm text-blue-800 dark:text-sky-400 font-medium mb-1 px-2 '>Object oriented programming</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>BlobWars</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      Vi laget en enkel versjon av spillet BlobWars <br/>
                      I dette prosjektet var tankegangen å lage spillet fra allerede eksisterende kode brukt i andre spill.
                      Derfor måtte vi sette oss inn i eksisterende kode og planlegge oppgaven derfra.

                    </p>
                    <div className='mb-6 flex items-center'>
                      <div className='space-y-1 px-2'>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Java</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>objektorientert</span>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Polymorfisme</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Arv</span>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Abstrakte klasser</span>
                      </div>
                    </div>
                  </div>

                  <div ref={Python} className='bg-white py-0 pb-2 px-0 rounded-lg shadow-lg break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {Gui} alt="Project photo"/>
              
                    <p className='text-sm text-blue-800 dark:text-sky-400 font-medium mb-1 px-2'>GUI</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>Multi File opener application</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      Dette er kun et lite sideprosjekt jeg gjorde i python. <br/>
                      python scriptet gjør det mulig å åpne fler apper på en gang gjennom en GUI.
                    </p>
                    <div className='mb-6 flex items-center'>
                      <div className='space-y-1 px-2'>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Python</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>GUI</span>
      
                      </div>
                    </div>
                  </div>


                  <div className='bg-white py-0 pb-2 px-0 rounded-lg shadow-lg break-inside dark:bg-slate-600'>
                    <Image className='mb-5 rounded-tl-lg rounded-tr-lg shadow-sm break-inside' src = {Other} alt="Project photo"/>
              
                    <p className='text-sm text-blue-800 dark:text-sky-400 font-medium mb-1 px-2'>Lab oppgaver</p>
                    <p className='text-lg font-normal text-gray-900 mb-2 px-2 dark:text-white'>Mindre prosjekter som er relevante</p>
                    <p className='mt-2 mb-4 text-base text-gray-700 leading-6 px-2 dark:text-white'>
                      Gjennom semesterene har vi også mindre prosjekter som er problemløsningsoppgaver. <br/>
                      Disse leder opp til de større prosjektene. <br/>
                      Her vil også mine egne prosjekter ligge.

                    </p>
                    <div className='mb-6 flex items-center'>
                      <div className='space-y-1 px-2'>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Java</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Haskell</span>
                        <span className=' text-slate-700 inline-flex ml-2 items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>SQL</span>
                        <span className=' text-slate-700 inline-flex items-center px-3 py-0.5 mt-0 rounded-full text-sm font-medium bg-gray-100 dark:text-white dark:bg-slate-800'>Python</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <p className='text-center font-thin text-thin pt-6 dark:text-white'>
                Større prosjekter er i samarbeid med medstudenter.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
