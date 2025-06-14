'use client'

import { useState } from 'react'
import Link from 'next/link'
import ResearchChatBot from '@/components/ResearchChatBot'

export default function HoofdDeelvragenPage() {
  const [showChatBot, setShowChatBot] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HAN Header */}
      <header className="han-header han-springplank">
        <div className="han-container py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="han-nav-link flex items-center hover:text-pink-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Terug naar overzicht
            </Link>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">HAN</span>
              </div>
              <h1 className="han-heading text-2xl text-black">
                Hoofd- en Deelvragen Formuleren
              </h1>
            </div>
            
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="han-container py-8">
        
        {/* Introduction */}
        <div className="han-card p-8 mb-8 han-springplank">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                 style={{background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)'}}>
              <span className="text-3xl text-white">❓</span>
            </div>
            <h2 className="han-heading text-4xl text-black mb-4">
              Leer Effectieve Onderzoeksvragen Stellen
            </h2>
            <p className="han-body text-xl text-gray-700 max-w-3xl mx-auto">
              De basis van elk goed onderzoek begint met de juiste vragen. Leer hoe je stapsgewijs 
              tot scherpe hoofd- en deelvragen komt die je onderzoek richting geven.
            </p>
          </div>
        </div>

        {/* Theory Section */}
        <div className="han-card p-8 mb-8">
          <h2 className="han-heading text-3xl text-black mb-8 flex items-center">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                 style={{background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)'}}>
              <span className="text-2xl text-white">📖</span>
            </div>
            Theorie: Goede Hoofd- en Deelvragen
          </h2>

          <div className="prose prose-lg max-w-none han-body">
            
            {/* Wat zijn deelvragen */}
            <div className="mb-10">
              <h3 className="han-heading text-2xl text-black mb-6">Wat zijn deelvragen?</h3>
              <div className="bg-gray-50 border-l-4 border-pink-600 p-6 mb-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  Je <strong>deelvragen</strong> zijn subvragen van je hoofdvraag die helpen om je hoofdvraag stapsgewijs te beantwoorden. 
                  Meestal is een hoofdvraag te complex om in één keer te beantwoorden en daarom gebruik je deelvragen om stap voor stap 
                  tot het antwoord op de hoofdvraag te komen.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Het formuleren van de deelvragen geeft je ook een idee hoe je het onderzoek uiteindelijk moet aanpakken en bepaalt 
                welke onderzoeksmethoden je gaat toepassen.
              </p>
            </div>

            {/* Kenmerken van goede deelvragen */}
            <div className="mb-10">
              <h3 className="han-heading text-2xl text-black mb-6">Kenmerken van goede deelvragen</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="han-card p-6" style={{borderColor: '#E91E63', backgroundColor: '#FDF2F8'}}>
                  <h4 className="han-heading text-lg mb-4" style={{color: '#E91E63'}}>
                    🎯 Basiskenmerken
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-800"><strong>Minder complex</strong> dan de hoofdvraag (direct te begrijpen)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-800"><strong>Niet twee type onderzoeksvragen in één</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-800"><strong>Relevant</strong> voor de beantwoording van je hoofdvraag</span>
                    </li>
                  </ul>
                </div>

                <div className="han-card p-6" style={{borderColor: '#10B981', backgroundColor: '#F0FDF4'}}>
                  <h4 className="han-heading text-lg text-green-700 mb-4">
                    📋 Aanvullende eisen
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-800"><strong>Niet overlappen</strong> met elkaar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-800"><strong>Logische volgorde</strong> in presentatie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-800"><strong>Uitputtend</strong> (dekken hoofdvraag volledig)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-800"><strong>Minimaal 1-2 beschrijvende/vergelijkende vragen</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hulpvragen bij formuleren */}
            <div className="mb-10">
              <h3 className="han-heading text-2xl text-black mb-6">Hulpvragen bij het formuleren</h3>
              <p className="text-gray-700 text-lg mb-6">
                Bij de formulering van je deelvragen is het goed om jezelf de volgende vragen te stellen:
              </p>
              
              <div className="han-card p-6" style={{backgroundColor: '#FFFBEB', borderColor: '#F59E0B'}}>
                <div className="grid gap-4">
                  {[
                    "Welke begrippen moet ik eerst definiëren voordat ik een antwoord kan geven op de hoofdvraag?",
                    "Welke theorieën, gebeurtenissen, situaties, personen of bedrijven/organisaties moeten eerst worden uitgelegd?",
                    "Welke informatie heb ik nog meer nodig voordat ik de hoofdvraag kan beantwoorden?",
                    "Zijn de deelvragen op zichzelf te begrijpen?",
                    "Volgen de deelvragen logisch op elkaar en leiden ze tot de hoofdvraag?",
                    "Dekken de deelvragen het antwoord op de hoofdvraag volledig?"
                  ].map((question, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-yellow-600 mr-3 mt-1 text-lg">🤔</span>
                      <span className="text-gray-800">{question}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Aantal deelvragen */}
            <div className="mb-10">
              <h3 className="han-heading text-2xl text-black mb-6">Hoeveel deelvragen?</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  Er is geen vast aantal deelvragen dat je moet opstellen. Wel is het zo dat hoe complexer je onderwerp is, 
                  hoe meer deelvragen je nodig zult hebben.
                </p>
                <p className="text-xl font-semibold" style={{color: '#E91E63'}}>
                  💡 Probeer je te beperken tot 4 à 5 deelvragen
                </p>
              </div>
              
              <div className="han-card p-4" style={{backgroundColor: '#FEF3C7', borderColor: '#F59E0B'}}>
                <p className="text-orange-800">
                  <strong>💡 Tip:</strong> Als je het gevoel hebt meer deelvragen nodig te hebben, dan kan dit betekenen dat je hoofdvraag 
                  niet concreet genoeg is. Het is dan beter om opnieuw naar de probleemstelling en doelstelling te kijken en 
                  eerst de hoofdvraag aan te scherpen.
                </p>
              </div>
            </div>

            {/* Voorbeeld */}
            <div className="mb-10">
              <h3 className="han-heading text-2xl text-black mb-6">Praktijkvoorbeeld</h3>
              
              <div className="han-card p-8" style={{backgroundColor: '#F8FAFC', borderColor: '#64748B'}}>
                <div className="mb-6">
                  <h4 className="han-heading text-lg text-gray-900 mb-3">📝 Hoofdvraag:</h4>
                  <div className="bg-white p-4 rounded-lg border-l-4" style={{borderColor: '#E91E63'}}>
                    <p className="text-gray-800 text-lg italic font-medium">
                      "Wat zijn de argumenten vóór de invoering van de Europese Bankbelasting en hoe zou deze eruit moeten zien?"
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="han-heading text-lg text-gray-900 mb-4">📋 Deelvragen:</h4>
                  <div className="space-y-4">
                    {[
                      {
                        type: "Beschrijvende vraag",
                        question: "Welke argumenten gebruikt de Europese Unie vóór de invoering van een Europese bankbelasting?"
                      },
                      {
                        type: "Beschrijvende vraag", 
                        question: "Welke landen stellen een bankbelasting/heffing op financiële transacties?"
                      },
                      {
                        type: "Ontwerpende vraag",
                        question: "Hoe moet een bankbelasting/heffing op financiële transacties eruit zien op Europees niveau?"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg">
                        <div className="flex items-start">
                          <span className="font-bold mr-3 mt-1" style={{color: '#E91E63'}}>{index + 1}.</span>
                          <div>
                            <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mb-2">
                              {item.type}
                            </span>
                            <p className="text-gray-800">{item.question}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hypothesen alternatief */}
            <div className="mb-8">
              <h3 className="han-heading text-2xl text-black mb-6">Hypothesen in plaats van deelvragen</h3>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  In plaats van deelvragen kun je ook werken met <strong>hypothesen</strong>. Hypothesen zijn voorlopige stellingen 
                  die je in je scriptie gaat toetsen. Je stelt hypothesen op in plaats van deelvragen als je een toetsend onderzoek 
                  uitvoert waarin je een bepaald effect wilt toetsen.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Practice Section - Full Width */}
        <div className="han-card p-8">
          <h2 className="han-heading text-3xl text-black mb-8 flex items-center">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                 style={{background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)'}}>
              <span className="text-2xl text-white">💬</span>
            </div>
            Oefen met de AI-Onderzoeksdocent
          </h2>

          {!showChatBot ? (
            <div className="text-center py-12">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                     style={{background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)'}}>
                  <span className="text-4xl text-white">🤖</span>
                </div>
                <h3 className="han-heading text-2xl text-black mb-4">
                  Klaar om je vragen te testen?
                </h3>
                <p className="han-body text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                  Deel je hoofd- en deelvragen met onze AI-onderzoeksdocent. Je krijgt constructieve feedback 
                  volgens de Socratische methode - we geven niet direct het antwoord, maar helpen je zelf tot 
                  de juiste inzichten te komen.
                </p>
              </div>
              
              <button
                onClick={() => setShowChatBot(true)}
                className="han-button-primary inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                <span>Start gesprek met AI-docent</span>
                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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