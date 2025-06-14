'use client'

import { useState, useRef, useEffect } from 'react'
import MarkdownRenderer from './MarkdownRenderer'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function ResearchChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hallo! Ik ben je AI-onderzoeksdocent en ik ga je helpen om betere hoofd- en deelvragen te formuleren. 

Ik werk volgens de **Socratische methode** - dat betekent dat ik je niet direct het juiste antwoord geef, maar je door gerichte vragen help om zelf tot de juiste inzichten te komen.

**Deel je hoofd- en deelvragen met mij en ik help je deze te verbeteren!**

Je kunt bijvoorbeeld beginnen met:
- Je onderzoeksonderwerp
- Je voorlopige hoofdvraag
- Je deelvragen (als je die al hebt)

Wat is je onderzoeksonderwerp en waar wil je onderzoek naar doen?`,
      timestamp: new Date()
    }
  ])
  
  const [currentMessage, setCurrentMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamingResponse, setStreamingResponse] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, streamingResponse])

  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading || isStreaming) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: currentMessage.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage('')
    setIsLoading(true)
    setIsStreaming(true)
    setStreamingResponse('')

    try {
      // Create the system prompt for research guidance
      const systemPrompt = `Je bent een ervaren HBO-onderzoeksdocent die studenten helpt bij het formuleren van goede hoofd- en deelvragen. 

BELANGRIJKE INSTRUCTIES:
- Gebruik de Socratische methode: stel vragen die de student helpen zelf tot inzichten te komen
- Geef NOOIT direct het juiste antwoord, maar leid de student erheen
- Focus op de kwaliteitscriteria voor goede deelvragen:
  * Minder complex dan hoofdvraag
  * Niet twee type vragen in één
  * Relevant voor hoofdvraag
  * Niet overlappend
  * Logische volgorde
  * Uitputtend (dekken hoofdvraag volledig)
  * Minimaal 1-2 beschrijvende/vergelijkende vragen

- Stel gerichte vragen zoals:
  * "Wat moet je eerst weten voordat je deze vraag kunt beantwoorden?"
  * "Welke begrippen zijn onduidelijk in je vraag?"
  * "Hoe zou je deze vraag kunnen opsplitsen?"
  * "Wat is het verschil tussen deze twee deelvragen?"

- Wees bemoedigend maar kritisch
- Gebruik concrete voorbeelden uit hun eigen onderzoek
- Help ze stap voor stap hun vragen te verbeteren

Conversatiegeschiedenis:
${messages.map(m => `${m.role}: ${m.content}`).join('\n')}

Nieuwe bericht van student: ${currentMessage}

Geef een Socratische response die de student helpt hun onderzoeksvragen te verbeteren:`;

      const response = await fetch('/api/chat-stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: systemPrompt,
          aiModel: 'smart'
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error('No readable stream available')
      }

      let buffer = ''
      let fullResponse = ''

      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6))
              
              if (data.error) {
                throw new Error(data.message || 'Streaming error')
              }
              
              if (data.done) {
                setIsStreaming(false)
                const assistantMessage: Message = {
                  id: Date.now().toString(),
                  role: 'assistant',
                  content: fullResponse,
                  timestamp: new Date()
                }
                setMessages(prev => [...prev, assistantMessage])
                setStreamingResponse('')
                return
              }
              
              if (data.token) {
                fullResponse += data.token
                setStreamingResponse(fullResponse)
              }
            } catch (parseError) {
              console.error('Error parsing streaming data:', parseError)
            }
          }
        }
      }

    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Sorry, er is een fout opgetreden. Probeer het opnieuw.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setIsStreaming(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const resetConversation = () => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: `Hallo! Ik ben je AI-onderzoeksdocent en ik ga je helpen om betere hoofd- en deelvragen te formuleren. 

Ik werk volgens de **Socratische methode** - dat betekent dat ik je niet direct het juiste antwoord geef, maar je door gerichte vragen help om zelf tot de juiste inzichten te komen.

**Deel je hoofd- en deelvragen met mij en ik help je deze te verbeteren!**

Je kunt bijvoorbeeld beginnen met:
- Je onderzoeksonderwerp
- Je voorlopige hoofdvraag
- Je deelvragen (als je die al hebt)

Wat is je onderzoeksonderwerp en waar wil je onderzoek naar doen?`,
        timestamp: new Date()
      }
    ])
    setCurrentMessage('')
    setStreamingResponse('')
  }

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 h-96 flex flex-col">
      
      {/* Header */}
      <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-sm">🤖</span>
          </div>
          <div>
            <h3 className="font-semibold">AI-Onderzoeksdocent</h3>
            <p className="text-green-100 text-sm">Socratische begeleiding</p>
          </div>
        </div>
        <button
          onClick={resetConversation}
          className="text-green-100 hover:text-white transition-colors"
          title="Nieuw gesprek starten"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-800'
              }`}
            >
              {message.role === 'assistant' ? (
                <MarkdownRenderer content={message.content} className="text-sm" />
              ) : (
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              )}
              <p className={`text-xs mt-1 ${
                message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}

        {/* Streaming response */}
        {isStreaming && streamingResponse && (
          <div className="flex justify-start">
            <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800">
              <MarkdownRenderer content={streamingResponse} className="text-sm" />
              <span className="inline-block w-2 h-4 bg-green-600 animate-pulse ml-1"></span>
            </div>
          </div>
        )}

        {/* Loading indicator */}
        {isLoading && !isStreaming && (
          <div className="flex justify-start">
            <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-white border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span className="text-green-700 text-sm">Docent denkt na...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <textarea
            ref={textareaRef}
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Deel je onderzoeksonderwerp en vragen..."
            className="flex-1 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows={2}
            disabled={isLoading || isStreaming}
          />
          <button
            onClick={sendMessage}
            disabled={!currentMessage.trim() || isLoading || isStreaming}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading || isStreaming ? (
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>
        </div>
        
        <div className="mt-2 text-xs text-gray-500 text-center">
          Druk Enter om te verzenden • Shift+Enter voor nieuwe regel
        </div>
      </div>
    </div>
  )
}