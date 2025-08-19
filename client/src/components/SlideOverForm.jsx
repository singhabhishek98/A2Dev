import React, { useEffect, useState } from 'react'
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000'
export default function SlideOverForm({ open, onClose }) {
  const [form, setForm] = useState({ name:'', email:'', contactNumber:'', institutionName:'', requirements:'' })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  useEffect(()=>{ if(open) setMsg('') },[open])
  const handleChange = (e)=> setForm(f=>({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = async (e)=>{
    e.preventDefault(); setLoading(true); setMsg('')
    try {
      const res = await fetch(`${API_BASE}/api/demo`, {
        method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data?.message || 'Request failed')
      setMsg('✅ Submitted successfully!')
      setForm({ name:'', email:'', contactNumber:'', institutionName:'', requirements:'' })
    } catch(err){ setMsg('❌ ' + err.message) } finally { setLoading(false) }
  }
  return (
    <div className={`fixed inset-0 z-30 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute top-0 right-0 h-full w-full max-w-md bg-white text-gray-900 shadow-2xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
        </div>
        <div className="h-[calc(100%-80px)] flex flex-col">
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div><label className="text-sm font-medium">Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" /></div>
              <div><label className="text-sm font-medium">Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" /></div>
              <div><label className="text-sm font-medium">Contact Number *</label>
                <input name="contactNumber" value={form.contactNumber} onChange={handleChange} required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 8303837930" /></div>
              <div><label className="text-sm font-medium">Institution Name *</label>
                <input name="institutionName" value={form.institutionName} onChange={handleChange} required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Institution Name" /></div>
              <div><label className="text-sm font-medium">Requirements</label>
                <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={4} className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your requirements..." /></div>
              {msg && <p className="text-sm">{msg}</p>}
            </div>
            <div className="p-6 pt-0">
              <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3">{loading ? 'Submitting...' : 'Submit'}</button>
            </div>
          </form>
        </div>
      </aside>
    </div>
  )
}
