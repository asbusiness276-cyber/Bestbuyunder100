import { Linkedin, Instagram, Mail } from 'lucide-react';
import { siteAuthor } from '../data/author';

interface AuthorBioProps {
  variant?: 'card' | 'compact';
}

export default function AuthorBio({ variant = 'card' }: AuthorBioProps) {
  const initials = siteAuthor.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <div
          className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0"
          aria-hidden
        >
          {initials}
        </div>
        <div>
          <span className="text-gray-500">Written by </span>
          <span className="font-semibold text-gray-900">{siteAuthor.name}</span>
        </div>
      </div>
    );
  }

  return (
    <section
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8"
      aria-labelledby="author-bio-heading"
    >
      <h2 id="author-bio-heading" className="text-lg font-bold text-gray-900 mb-4">
        About the author
      </h2>
      <div className="flex flex-col sm:flex-row gap-5">
        <div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-xl font-bold flex items-center justify-center shrink-0"
          aria-hidden
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-gray-900 text-lg">{siteAuthor.name}</p>
          <p className="text-sm text-emerald-700 font-medium mb-2">{siteAuthor.role}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{siteAuthor.bio}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteAuthor.linkedin}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" aria-hidden />
              LinkedIn
            </a>
            <a
              href={siteAuthor.instagram}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors"
            >
              <Instagram className="w-4 h-4" aria-hidden />
              Instagram
            </a>
            <a
              href={`mailto:${siteAuthor.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
