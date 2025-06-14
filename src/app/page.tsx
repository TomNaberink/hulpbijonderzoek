import Link from 'next/link'

export default function Home() {
  const themes = [
    {
      id: 'hoofd-deelvragen',
      title: 'Hoofd- en Deelvragen Formuleren',
      description: 'Leer hoe je effectieve hoofd- en deelvragen opstelt voor je onderzoek',
      icon: '❓',
      available: true,
      difficulty: 'Basis'
    },
    {
      id: 'literatuuronderzoek',
      title: 'Literatuuronderzoek',
      description: 'Ontdek hoe je relevante bronnen vindt en evalueert',
      icon: '📚',
      available: false,
      difficulty: 'Gevorderd'
    },
    {
      id: 'onderzoeksmethoden',
      title: 'Onderzoeksmethoden',
      description: 'Kies de juiste onderzoeksmethode voor jouw vraagstelling',
      icon: '🔬',
      available: false,
      difficulty: 'Gevorderd'
    },
    {
      id: 'data-analyse',
      title: 'Data-analyse',
      description: 'Leer hoe je data verzamelt, analyseert en interpreteert',
      icon: '📊',
      available: false,
      difficulty: 'Expert'
    },
    {
      id: 'academisch-schrijven',
      title: 'Academisch Schrijven',
      description: 'Ontwikkel je vaardigheden in wetenschappelijk schrijven',
      icon: '✍️',
      available: false,
      difficulty: 'Basis'
    },
    {
      id: 'ethiek-validiteit',
      title: 'Ethiek & Validiteit',
      description: 'Begrijp de ethische aspecten en validiteit van onderzoek',
      icon: '⚖️',
      available: false,
      difficulty: 'Gevorderd'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HAN Header */}
      <header className="han-header han-springplank">
        <div className="han-container py-8">
          <div className="text-center">
            {/* HAN Logo Placeholder */}
            <div className="inline-flex items-center mb-6">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">HAN</span>
              </div>
              <div className="text-left">
                <h1 className="han-heading text-3xl text-black mb-1">
                  Onderzoek Leeromgeving
                </h1>
                <p className="text-gray-600 font-medium">University of Applied Sciences</p>
              </div>
            </div>
            
            <p className="han-body text-xl text-gray-700 max-w-4xl mx-auto">
              Ontwikkel je onderzoeksvaardigheden stap voor stap met interactieve lessen en AI-begeleiding
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="han-container py-12">
        
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8" 
               style={{background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)'}}>
            <span className="text-3xl text-white">🔍</span>
          </div>
          
          <h2 className="han-heading text-4xl text-black mb-6">
            Leer Onderzoek Doen op HBO-niveau
          </h2>
          
          <p className="han-body text-lg text-gray-700 max-w-4xl mx-auto mb-12">
            Deze leeromgeving is speciaal ontwikkeld voor HBO-studenten die hun onderzoeksvaardigheden willen verbeteren. 
            Elke module bevat theorie, praktische oefeningen en persoonlijke feedback van een AI-onderzoeksdocent.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="han-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)'}}>
                <span className="text-2xl text-white">📖</span>
              </div>
              <h3 className="han-heading text-xl text-black mb-3">Theorie</h3>
              <p className="han-body text-gray-600">Leer de fundamenten van wetenschappelijk onderzoek met praktische voorbeelden</p>
            </div>
            
            <div className="han-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)'}}>
                <span className="text-2xl text-white">💬</span>
              </div>
              <h3 className="han-heading text-xl text-black mb-3">AI-begeleiding</h3>
              <p className="han-body text-gray-600">Krijg persoonlijke feedback volgens de Socratische methode</p>
            </div>
            
            <div className="han-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)'}}>
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="han-heading text-xl text-black mb-3">Praktijk</h3>
              <p className="han-body text-gray-600">Oefen met echte onderzoekssituaties en cases</p>
            </div>
          </div>
        </div>

        {/* Themes Section */}
        <div className="mb-16">
          <h2 className="han-heading text-3xl text-black mb-12 text-center">
            Kies een Onderzoeksthema
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`han-card relative transition-all duration-300 ${
                  theme.available 
                    ? 'cursor-pointer hover:han-card-active' 
                    : 'opacity-60'
                }`}
              >
                {theme.available ? (
                  <Link href={`/themes/${theme.id}`} className="block p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-4xl">{theme.icon}</div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        theme.difficulty === 'Basis' ? 'bg-green-100 text-green-800' :
                        theme.difficulty === 'Gevorderd' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {theme.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="han-heading text-xl text-black mb-4">
                      {theme.title}
                    </h3>
                    
                    <p className="han-body text-gray-600 mb-6">
                      {theme.description}
                    </p>
                    
                    <div className="flex items-center font-semibold" style={{color: '#E91E63'}}>
                      <span>Start leren</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ) : (
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-4xl grayscale">{theme.icon}</div>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600">
                        Binnenkort
                      </span>
                    </div>
                    
                    <h3 className="han-heading text-xl text-gray-500 mb-4">
                      {theme.title}
                    </h3>
                    
                    <p className="han-body text-gray-400 mb-6">
                      {theme.description}
                    </p>
                    
                    <div className="flex items-center text-gray-400 font-medium">
                      <span>Nog niet beschikbaar</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="han-card p-12 text-center han-springplank">
          <h2 className="han-heading text-3xl text-black mb-6">
            Klaar om te beginnen?
          </h2>
          <p className="han-body text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Start met de basis van onderzoek: het formuleren van goede hoofd- en deelvragen. 
            Dit is de fundamentele vaardigheid waar alle andere onderzoeksvaardigheden op voortbouwen.
          </p>
          <Link 
            href="/themes/hoofd-deelvragen"
            className="han-button-primary inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            <span>Begin met Hoofd- en Deelvragen</span>
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>

      {/* HAN Footer */}
      <footer className="bg-black text-white mt-20">
        <div className="han-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-lg">HAN</span>
                </div>
                <div>
                  <h3 className="han-heading text-lg text-white">HAN</h3>
                  <p className="text-gray-400 text-sm">University of Applied Sciences</p>
                </div>
              </div>
              <p className="han-body text-gray-400">
                Ontwikkeld voor onderzoeksonderwijs aan de HAN
              </p>
            </div>
            
            <div>
              <h4 className="han-heading text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 han-body">
                <p>📧 onderzoek@han.nl</p>
                <p>📞 026 369 58 00</p>
                <p>🌐 han.nl</p>
              </div>
            </div>
            
            <div>
              <h4 className="han-heading text-white mb-4">Meer Informatie</h4>
              <div className="space-y-2">
                <a href="#" className="han-nav-link text-gray-400 block hover:text-white">Onderzoeksbeleid</a>
                <a href="#" className="han-nav-link text-gray-400 block hover:text-white">Scriptierichtlijnen</a>
                <a href="#" className="han-nav-link text-gray-400 block hover:text-white">Hulp & Support</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="han-body text-gray-400">
              © 2024 HAN University of Applied Sciences - Alle rechten voorbehouden
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}