// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    setLoading(true);
    const { data, error } = await supabase.from('users').select('*').limit(50);
    if (error) {
      console.error('Error fetching from Supabase:', error);
      setItems([]);
    } else {
      setItems(data || []);
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <h1>Datos desde Supabase</h1>
      {loading ? <p>Cargando...</p> : (
        <ul>
          {items.map((it) => (
            <li key={it.id ?? it.correo}>{it.correo ?? JSON.stringify(it)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;