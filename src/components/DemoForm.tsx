'use client';

import { useState } from 'react';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    employee_count: '',
    trade_type: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://n8n-server.coreaspectai.com/webhook/demo-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'website',
          submitted_at: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Track conversion in Umami
        if (typeof window !== 'undefined' && (window as any).umami) {
          (window as any).umami.track('demo_booking', { trade_type: formData.trade_type });
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-green-400 text-xl mb-4">Thanks for your interest!</div>
        <p className="text-slate-300">We'll be in touch within 24 hours to schedule your demo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-slate-300 mb-1">Business Name</label>
        <input
          type="text"
          required
          className="w-full bg-slate-700 text-white rounded px-4 py-2"
          value={formData.company_name}
          onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-slate-300 mb-1">Your Name</label>
        <input
          type="text"
          required
          className="w-full bg-slate-700 text-white rounded px-4 py-2"
          value={formData.contact_name}
          onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-slate-300 mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full bg-slate-700 text-white rounded px-4 py-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-slate-300 mb-1">Phone</label>
        <input
          type="tel"
          required
          className="w-full bg-slate-700 text-white rounded px-4 py-2"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-slate-300 mb-1">Trade Type</label>
        <select
          required
          className="w-full bg-slate-700 text-white rounded px-4 py-2"
          value={formData.trade_type}
          onChange={(e) => setFormData({ ...formData, trade_type: e.target.value })}
        >
          <option value="">Select your trade</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="hvac">HVAC / Air Conditioning</option>
          <option value="builder">Builder</option>
          <option value="landscaper">Landscaper</option>
          <option value="other">Other Trade</option>
        </select>
      </div>
      <div>
        <label className="block text-slate-300 mb-1">Team Size</label>
        <select
          required
          className="w-full bg-slate-700 text-white rounded px-4 py-2"
          value={formData.employee_count}
          onChange={(e) => setFormData({ ...formData, employee_count: e.target.value })}
        >
          <option value="">Select team size</option>
          <option value="1">Just me</option>
          <option value="2-5">2-5 people</option>
          <option value="6-10">6-10 people</option>
          <option value="11-20">11-20 people</option>
          <option value="20+">20+ people</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white py-3 rounded-lg font-semibold"
      >
        {status === 'loading' ? 'Submitting...' : 'Book My Demo'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
