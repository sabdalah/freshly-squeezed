'use client'
import { useEffect, useState } from 'react'
import { supabase, type Drink } from '../lib/supabase'
export default function Menu() {
 const [drinks,setDrinks]=useState<Drink[]>([]), [loading,setLoading]=useState(true), [error,setError]=useState('')
 useEffect(()=>{const client=supabase(); const load=async()=>{const {data,error}=await client.from('drinks').select('*').order('sort_order').order('id');if(error)setError('Menu is temporarily unavailable. Please try again shortly.');else setDrinks(data||[]);setLoading(false)};load();const channel=client.channel('menu-updates').on('postgres_changes',{event:'*',schema:'public',table:'drinks'},()=>{load()}).subscribe();return()=>{client.removeChannel(channel)}},[])
 return <main className="menu-shell"><header className="hero"><div className="fruit">✳</div><p className="eyebrow">FRESHLY MADE • EVERY DAY</p><h1>Freshly<br/><em>Squeezed.</em></h1><p className="subtitle">Good fruit. Great juice. Made fresh for you.</p></header><section className="menu-panel"><div className="section-title"><h2>Our Juices</h2><span>100% fresh vibes</span></div>{loading?<p>Loading menu…</p>:error?<p role="alert">{error}</p>:drinks.length===0?<p>Our menu is being updated. Check back soon!</p>:drinks.map(d=><article className={'drink '+(!d.available?'sold-out':'')} key={d.id}><div><h3>{d.name}</h3><p>{d.description}</p>{!d.available&&<small>Sold out</small>}</div><strong>${Number(d.price).toFixed(2)}</strong></article>)}</section><footer>Fresh fruit, fresh start. 🍊</footer></main>
}
