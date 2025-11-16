import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

const Contact = () => {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name, email, subject, message })
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('✅ Message sent');
      setFullName(''); setEmail(''); setSubject(''); setMessage('');
    } catch (err) {
      setStatus('❌ Failed to send message');
    }
  };

  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
        <p className="mt-2 text-gray-300">Have questions or want to collaborate? Reach out.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
          <input className="w-full rounded bg-white/5 p-3 outline-none" placeholder="Full Name" value={full_name} onChange={(e)=>setFullName(e.target.value)} />
          <input className="w-full rounded bg-white/5 p-3 outline-none" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input className="w-full rounded bg-white/5 p-3 outline-none" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} />
          <textarea rows={5} className="w-full rounded bg-white/5 p-3 outline-none" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} />
          <button type="submit" className="mt-2 rounded bg-[#6104EC] px-5 py-3 font-semibold shadow-[0_0_20px_rgba(97,4,236,0.6)]">Send</button>
          {status && <p className="text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
