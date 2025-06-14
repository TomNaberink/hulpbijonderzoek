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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🎓 HBO Onderzoek Leeromgeving
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontwikkel je onderzoeksvaardigheden stap voor stap met interactieve lessen en AI-begeleiding
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <span className="text-3xl text-white">🔍</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Leer Onderzoek Doen op HBO-niveau
          </h2>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Deze leeromgeving is speciaal ontwikkeld voor HBO-studenten die hun onderzoeksvaardigheden willen verbeteren. 
            Elke module bevat theorie, praktische oefeningen en persoonlijke feedback van een AI-onderzoeksdocent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">📖</div>
              <h3 className="font-semibold text-gray-900 mb-2">Theorie</h3>
              <p className="text-sm text-gray-600">Leer de fundamenten van wetenschappelijk onderzoek</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-begeleiding</h3>
              <p className="text-sm text-gray-600">Krijg persoonlijke feedback op je werk</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Praktijk</h3>
              <p className="text-sm text-gray-600">Oefen met echte onderzoekssituaties</p>
            </div>
          </div>
        </div>

        {/* Themes Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Kies een Onderzoeksthema
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`relative bg-white rounded-xl shadow-sm border transition-all duration-200 ${
                  theme.available 
                    ? 'border-gray-200 hover:border-blue-300 hover:shadow-md cursor-pointer' 
                    : 'border-gray-100 opacity-60'
                }`}
              >
                {theme.available ? (
                  <Link href={`/themes/${theme.id}`} className="block p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{theme.icon}</div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        theme.difficulty === 'Basis' ? 'bg-green-100 text-green-800' :
                        theme.difficulty === 'Gevorderd' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {theme.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {theme.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {theme.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      <span>Start leren</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ) : (
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl grayscale">{theme.icon}</div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                        Binnenkort
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-500 mb-2">
                      {theme.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {theme.description}
                    </p>
                    
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>Nog niet beschikbaar</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="text-center bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start met de basis van onderzoek: het formuleren van goede hoofd- en deelvragen. 
            Dit is de fundamentele vaardigheid waar alle andere onderzoeksvaardigheden op voortbouwen.
          </p>
          <Link 
            href="/themes/hoofd-deelvragen"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Begin met Hoofd- en Deelvragen</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 HBO Onderzoek Leeromgeving - Ontwikkeld voor onderzoeksonderwijs</p>
          </div>
        </div>
      </footer>
    </div>
  )
}