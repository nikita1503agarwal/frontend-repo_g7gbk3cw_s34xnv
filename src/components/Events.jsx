import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

const EventCard = ({ event, onRegister }) => {
  const start = new Date(event.start_time);
  const end = new Date(event.end_time);
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="mt-2 text-gray-300">{event.description}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
        <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" />{start.toLocaleDateString()}</span>
        <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" />{start.toLocaleTimeString()} - {end.toLocaleTimeString()}</span>
        <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{event.location}</span>
      </div>
      <button
        onClick={() => onRegister(event)}
        className="mt-5 rounded-lg bg-[#6104EC] hover:bg-[#5a03d9] px-4 py-2 font-semibold shadow-[0_0_20px_rgba(97,4,236,0.6)]"
      >
        Register
      </button>
    </div>
  );
};

const RegisterModal = ({ open, onClose, event }) => {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [student_id, setStudentId] = useState('');
  const [comments, setComments] = useState('');
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!event) return;
    setStatus('');
    try {
      const res = await fetch(`${API_BASE}/api/events/${event.id}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_id: event.id, full_name, email, student_id, comments })
      });
      if (!res.ok) throw new Error('Failed to register');
      setStatus('✅ Registered successfully');
    } catch (err) {
      setStatus('❌ Registration failed');
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-black p-6 text-white">
        <h4 className="text-xl font-semibold">Register for {event?.title}</h4>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <input className="w-full rounded bg-white/5 p-2 outline-none" placeholder="Full Name" value={full_name} onChange={e=>setFullName(e.target.value)} />
          <input className="w-full rounded bg-white/5 p-2 outline-none" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="w-full rounded bg-white/5 p-2 outline-none" placeholder="Student ID" value={student_id} onChange={e=>setStudentId(e.target.value)} />
          <textarea className="w-full rounded bg-white/5 p-2 outline-none" placeholder="Comments" value={comments} onChange={e=>setComments(e.target.value)} />
          <div className="flex gap-2">
            <button type="submit" className="rounded bg-[#6104EC] px-4 py-2 font-semibold">Submit</button>
            <button type="button" className="rounded bg-white/10 px-4 py-2" onClick={onClose}>Close</button>
          </div>
          {status && <p className="text-sm text-gray-300">{status}</p>}
        </form>
      </div>
    </div>
  );
};

const Events = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const u = await fetch(`${API_BASE}/api/events?status=upcoming`).then(r=>r.json());
        const p = await fetch(`${API_BASE}/api/events?status=past`).then(r=>r.json());
        setUpcoming(Array.isArray(u) ? u : []);
        setPast(Array.isArray(p) ? p : []);
      } catch (e) {
        setUpcoming([]);
        setPast([]);
      }
    };
    load();
  }, []);

  const openRegister = (event) => {
    setActiveEvent(event);
    setModalOpen(true);
  };

  return (
    <section id="events" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
        <p className="mt-2 text-gray-300">Register and join our next sessions.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcoming.length === 0 && (
            <p className="text-gray-400">No upcoming events yet. Stay tuned!</p>
          )}
          {upcoming.map((e) => (
            <EventCard key={e.id} event={e} onRegister={openRegister} />
          ))}
        </div>

        <h3 className="mt-16 text-2xl font-semibold">Finished Events</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {past.length === 0 && (
            <p className="text-gray-400">No finished events to show yet.</p>
          )}
          {past.map((e) => (
            <div key={e.id} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h4 className="text-lg font-semibold">{e.title}</h4>
              <p className="mt-2 text-gray-300">{e.description}</p>
            </div>
          ))}
        </div>
      </div>

      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} event={activeEvent} />
    </section>
  );
};

export default Events;
