import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button className="bg-red-600"
         onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="bg-blue-600" 
      onClick={() => signIn()}>Sign in</button>
    </>
  )
}