'use client';

import { useState } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: {
        sitekey: string;
        callback?: (token: string) => void;
        'error-callback'?: () => void;
        theme?: 'light' | 'dark' | 'auto';
      }) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

interface ContactFormProps {
  onClose?: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setErrorMessage('Please complete the security check');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTurnstileToken('');

      // Reset Turnstile widget
      if (window.turnstile && turnstileWidgetId) {
        window.turnstile.reset(turnstileWidgetId);
      }

      // Close form after 2 seconds if onClose is provided
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');

      // Reset Turnstile widget on error
      if (window.turnstile && turnstileWidgetId) {
        window.turnstile.reset(turnstileWidgetId);
      }
      setTurnstileToken('');
    }
  };

  // Load Turnstile script and render widget
  useState(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.turnstile) {
        const widgetId = window.turnstile.render('#turnstile-widget', {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
          callback: (token: string) => {
            setTurnstileToken(token);
          },
          'error-callback': () => {
            setTurnstileToken('');
            setErrorMessage('Security verification failed. Please try again.');
          },
          theme: 'auto',
        });
        setTurnstileWidgetId(widgetId);
      }
    };
    document.head.appendChild(script);

    return () => {
      if (window.turnstile && turnstileWidgetId) {
        window.turnstile.remove(turnstileWidgetId);
      }
      document.head.removeChild(script);
    };
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
            placeholder="What would you like to discuss?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Turnstile Widget */}
        <div id="turnstile-widget" className="flex justify-center"></div>

        {errorMessage && (
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <p className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</p>
          </div>
        )}

        {status === 'success' && (
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <p className="text-green-600 dark:text-green-400 text-sm">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </p>
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={status === 'loading' || !turnstileToken}
            className="flex-1 px-8 py-4 bg-gradient-brand text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
