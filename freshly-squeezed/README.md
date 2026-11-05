# Freshly Squeezed

A mobile-friendly public juice menu and private admin dashboard.

## Setup

1. Install Node.js 20+ and run `npm install`.
2. Create a Supabase project at https://supabase.com/dashboard.
3. Open Supabase **SQL Editor**, paste `supabase/setup.sql`, and run it once.
4. Under **Authentication > Users**, create an admin user with an email and password. Copy that user's UUID. In SQL Editor, run:
   ```sql
   insert into public.admin_users(user_id) values ('PASTE-ADMIN-USER-UUID-HERE');
   ```
5. In **Project Settings > API** (or **Connect**), copy the project URL and publishable/anon key. Copy `.env.example` to `.env.local` and replace the placeholders. **Never put a service-role/secret key in NEXT_PUBLIC_ variables.**
6. Run `npm run dev`, then open http://localhost:3000 for the public menu and http://localhost:3000/login for the private login.
7. Push the project to GitHub and import it into https://vercel.com/new. Set the same two environment variables in Vercel project settings, then deploy.
8. Open your permanent production menu URL (for example, `https://freshly-squeezed.example.com/`). Generate a QR code pointing to **that exact URL** using a QR generator. Print the QR only after verifying it on a phone. Keep the same URL when updating the menu.

## Notes

- Public visitors can read menu items, but row-level security restricts edits to UUIDs listed in `admin_users`.
- Do not add arbitrary users to `admin_users`.
- Menu data lives in Supabase, not the source code. Admin edits save to the database and are visible on reload; realtime subscriptions can update open menus if Supabase Realtime is enabled for the `drinks` table.
- The sample menu is seeded with Banana Berry and Red Mix, each priced at $8.
- The project does not include ordering or payment processing.
- Use a stable domain for the printed QR code; changing the domain requires a new QR code.
