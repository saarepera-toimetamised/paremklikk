'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      setQuery('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#000000',
      borderTop: '2px solid #00ff00',
      boxShadow: '0 -4px 20px rgba(0, 255, 0, 0.3)',
      padding: '12px 10px',
      zIndex: 50,
      fontFamily: 'monospace'
    }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ color: '#00ff00', fontSize: '18px', fontWeight: 'bold' }}>{'>'}</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search_query..."
            style={{
              flex: 1,
              minWidth: 0,
              padding: '8px 20px',
              color: '#00ff00',
              backgroundColor: '#0a0a0a',
              border: '1px solid #00ff00',
              borderRadius: '0',
              fontSize: '16px',
              fontFamily: 'monospace',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '8px 20px',
              backgroundColor: '#000000',
              color: '#00ff00',
              border: '1px solid #00ff00',
              borderRadius: '0',
              fontWeight: 'thin',
              cursor: 'pointer',
              fontFamily: 'monospace',
              fontSize: '16px',
              transition: 'all 0.2s',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00ff00';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#00ff00';
            }}
          >
            [MAAILM]
          </button>
        </form>
      </div>
    </div>
  );
}