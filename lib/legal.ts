export const LEGAL_ORIGIN = 'https://api.roaden.space';

export const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Use', path: '/terms' },
  { label: 'Help & Support', path: '/support' },
] as const;

// The legal texts live next to the API code so they change together with what
// the app collects. The site keeps short aliases that forward to them.
export function redirectToLegal(path: string): Response {
  return Response.redirect(`${LEGAL_ORIGIN}${path}`, 307);
}
