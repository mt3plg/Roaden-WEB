import { redirectToLegal } from '@/lib/legal';

export function GET() {
  return redirectToLegal('/privacy');
}
