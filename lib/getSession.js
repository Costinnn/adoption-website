// SERVERSIDE function
// FUNCTION THAT VERIFY NEXT_AUTH USER SESSION

export async function getSession(cookie) {
  const response = await fetch(
    `${process.env.NEXTAUTH_SESSION_URL}/api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );

  const session = await response.json();
  return Object.keys(session).length > 0 ? session : null;
}

// to use
// import { headers } from 'next/headers'
// const session = await getSession(headers().get('cookie') ?? '');
