import { redirect } from 'next/navigation';

/** Legacy list URL — primary work index is `/work`. */
export default function ProjectsPage() {
  redirect('/work');
}
