'use client';

import { useState, FormEvent } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [interestedInEarlyAccess, setInterestedInEarlyAccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, interestedInEarlyAccess }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: "Thanks! You're on the list. We'll be in touch soon." });
        setEmail('');
        setInterestedInEarlyAccess(false);
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent transition-all"
          />
        </div>

        {/* Early Access Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="earlyAccess"
            checked={interestedInEarlyAccess}
            onChange={(e) => setInterestedInEarlyAccess(e.target.checked)}
            className="mt-1 w-4 h-4 text-[var(--color-brand-primary)] border-[var(--color-border-default)] rounded focus:ring-[var(--color-brand-primary)]"
          />
          <label htmlFor="earlyAccess" className="text-sm text-[var(--color-text-secondary)]">
            I'm interested in Early Access (limited spots available)
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-[var(--color-brand-primary)] text-white rounded-[var(--radius-md)] font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Joining...' : 'Join the Waitlist'}
        </button>

        {/* Helper Text */}
        <p className="text-xs text-center text-[var(--color-text-tertiary)]">
          Get 3 months Premium at launch
        </p>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`p-4 rounded-[var(--radius-md)] text-sm ${
              message.type === 'success'
                ? 'bg-[var(--color-semantic-success)]/10 text-[var(--color-semantic-success)] border border-[var(--color-semantic-success)]/20'
                : 'bg-[var(--color-semantic-danger)]/10 text-[var(--color-semantic-danger)] border border-[var(--color-semantic-danger)]/20'
            }`}
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
}
