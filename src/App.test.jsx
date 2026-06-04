﻿﻿﻿/* @vitest-environment jsdom */

import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import App from './App'

beforeAll(() => {
  class IntersectionObserverMock {
    observe() { }
    unobserve() { }
    disconnect() { }
  }

  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
})

describe('Sync landing page', () => {
  it('renders the main conversion sections', () => {
    render(<App />)

    expect(screen.getByText(/videos que fazem a sua marca parecer grande/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /solicitar orcamento/i }).length).toBeGreaterThan(0)
    expect(screen.getByText(/portfolio com estetica de campanha/i)).toBeInTheDocument()
    expect(screen.getByText(/do frame inicial ao clique no anuncio/i)).toBeInTheDocument()
    expect(screen.getByText(/quando a imagem sobe de nivel/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /falar no whatsapp/i })).toBeInTheDocument()
  })
})
