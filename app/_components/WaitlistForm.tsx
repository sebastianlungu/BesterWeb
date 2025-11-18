'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

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
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-semibold">
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="h-12 text-base rounded-xl border-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:border-[var(--color-brand-primary)]"
          />
        </div>

        {/* Early Access Checkbox */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="earlyAccess"
            checked={interestedInEarlyAccess}
            onCheckedChange={(checked) => setInterestedInEarlyAccess(checked === true)}
            className="mt-1"
          />
          <Label
            htmlFor="earlyAccess"
            className="text-sm text-[var(--color-text-secondary)] font-normal cursor-pointer"
          >
            I'm interested in Early Access (limited spots available)
          </Label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="w-full h-12 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/90"
        >
          {loading ? 'Joining...' : 'Join the Waitlist'}
        </Button>

        {/* Helper Text */}
        <p className="text-sm text-center text-[var(--color-text-tertiary)] font-medium">
          ✨ Get 3 months Premium at launch
        </p>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`p-4 rounded-xl text-sm font-medium ${
              message.type === 'success'
                ? 'bg-[var(--color-semantic-success)]/10 text-[var(--color-semantic-success)] border-2 border-[var(--color-semantic-success)]/20'
                : 'bg-[var(--color-semantic-danger)]/10 text-[var(--color-semantic-danger)] border-2 border-[var(--color-semantic-danger)]/20'
            }`}
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
}
