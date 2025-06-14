'use client'

import { useState } from 'react'
import Link from 'next/link'
import ResearchChatBot from '@/components/ResearchChatBot'

export default function HoofdDeelvragenPage() {
  const [showChatBot, setShowChatBot] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Terug naar overzicht
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              ❓ Hoofd- en Deelvragen Formuleren
            </h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <span className="text-2xl text-white">❓</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Leer Effectieve Onderzoeksvragen Stellen
            </h2>
            <p className="text-lg text-gray-600">
              De basis van elk goed onderzoek begint met de juiste vragen
            </p>
          </div>
        </div>

        {/* Theory Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              📖
            </span>
            Theorie: Goede Hoofd- en Deelvragen
          </h2>

          <div className="prose prose-lg max-w-none">
            
            {/* Wat zijn deelvragen */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wat zijn deelvragen?</h3>
              <p className="text-gray-700 mb-4">
                Je <strong>deelvragen</strong> zijn subvragen van je hoofdvraag die helpen om je hoofdvraag stapsgewijs te beantwoorden. 
                Meestal is een hoofdvraag te complex om in één keer te beantwoorden en daarom gebruik je deelvragen om stap voor stap 
                tot het antwoord op de hoofdvraag te komen.
              </p>
              <p className="text-gray-700 mb-4">
                Het formuleren van de deelvragen geeft je ook een idee hoe je het onderzoek uiteindelijk moet aanpakken en bepaalt 
                welke onderzoeksmethoden je gaat toepassen.
              </p>
            </div>

            {/* Kenmerken van goede deelvragen */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kenmerken van goede deelvragen</h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-blue-900 mb-3">Basiskenmerken:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Minder complex</strong> dan de hoofdvraag (direct te begrijpen)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Niet twee type onderzoeksvragen in één</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Relevant</strong> voor de beantwoording van je hoofdvraag</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-green-900 mb-3">Aanvullende eisen:</h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Niet overlappen</strong> met elkaar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Logische volgorde</strong> in presentatie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Uitputtend</strong> (dekken het antwoord op de hoofdvraag volledig)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Minimaal één of twee beschrijvende of vergelijkende deelvragen</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hulpvragen bij formuleren */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hulpvragen bij het formuleren</h3>
              <p className="text-gray-700 mb-4">
                Bij de formulering van je deelvragen is het goed om jezelf de volgende vragen te stellen:
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">🤔</span>
                    <span>Welke begrippen moet ik eerst definiëren voordat ik een antwoord kan geven op de hoofdvraag?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">🤔</span>
                    <span>Welke theorieën, gebeurtenissen, situaties, personen of bedrijven/organisaties moeten eerst worden uitgelegd?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">🤔</span>
                    <span>Welke informatie heb ik nog meer nodig voordat ik de hoofdvraag kan beantwoorden?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">🤔</span>
                    <span>Zijn de deelvragen op zichzelf te begrijpen?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">🤔</span>
                    <span>Volgen de deelvragen logisch op elkaar en leiden ze tot de hoofdvraag?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">🤔</span>
                    <span>Dekken de deelvragen het antwoord op de hoofdvraag volledig?</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Aantal deelvragen */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hoeveel deelvragen?</h3>
              <p className="text-gray-700 mb-4">
                Er is geen vast aantal deelvragen dat je moet opstellen. Wel is het zo dat hoe complexer je onderwerp is, 
                hoe meer deelvragen je nodig zult hebben. <strong>Probeer je te beperken tot 4 à 5 deelvragen.</strong>
              </p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800">
                  <strong>💡 Tip:</strong> Als je het gevoel hebt meer deelvragen nodig te hebben, dan kan dit betekenen dat je hoofdvraag 
                  niet concreet genoeg is. Het is dan beter om opnieuw naar de probleemstelling en doelstelling te kijken en 
                  eerst de hoofdvraag aan te scherpen.
                </p>
              </div>
            </div>

            {/* Voorbeeld */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Voorbeeld</h3>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Hoofdvraag:</h4>
                <p className="text-gray-700 mb-4 italic">
                  "Wat zijn de argumenten vóór de invoering van de Europese Bankbelasting en hoe zou deze eruit moeten zien?"
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Deelvragen:</h4>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-semibold">1.</span>
                    <span><strong>Beschrijvende vraag:</strong> Welke argumenten gebruikt de Europese Unie vóór de invoering van een Europese bankbelasting?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-semibold">2.</span>
                    <span><strong>Beschrijvende vraag:</strong> Welke landen stellen een bankbelasting/heffing op financiële transacties?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-semibold">3.</span>
                    <span><strong>Ontwerpende vraag:</strong> Hoe moet een bankbelasting/heffing op financiële transacties eruit zien op Europees niveau?</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Hypothesen alternatief */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hypothesen in plaats van deelvragen</h3>
              <p className="text-gray-700 mb-4">
                In plaats van deelvragen kun je ook werken met <strong>hypothesen</strong>. Hypothesen zijn voorlopige stellingen 
                die je in je scriptie gaat toetsen. Je stelt hypothesen op in plaats van deelvragen als je een toetsend onderzoek 
                uitvoert waarin je een bepaald effect wilt toetsen.
              </p>
            </div>

          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              💬
            </span>
            Oefen met de AI-Onderzoeksdocent
          </h2>

          {!showChatBot ? (
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4">
                  <span className="text-3xl text-white">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Klaar om je vragen te testen?
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  Deel je hoofd- en deelvragen met onze AI-onderzoeksdocent. Je krijgt constructieve feedback 
                  volgens de Socratische methode - we geven niet direct het antwoord, maar helpen je zelf tot 
                  de juiste inzichten te komen.
                </p>
              </div>
              
              <button
                onClick={() => setShowChatBot(true)}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>Start gesprek met AI-docent</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.697-.413l-3.178 1.589a1 1 0 01-1.414-1.414l1.589-3.178A8.955 8.955 0 013 12a8 8 0 018-8 8 8 0 018 8z" />
                </svg>
              </button>
            </div>
          ) : (
            <ResearchChatBot />
          )}
        </div>

      </main>
    </div>
  )
}