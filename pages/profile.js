import Link from "next/link";

function ProfilePage({ profile }) {
  return (
    <>
      <div>
        <img src={profile.avatar} />
        <h1>{profile.name}</h1>
        <p>{profile.address}</p>
        <p>{profile.email}</p>
        <Link href="/">
          <a>← Back to profiles</a>
        </Link>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, query }) {
  const protocol = req.headers["x-forwarded-proto"];
  const host = req.headers["x-forwarded-host"];

  const res = await fetch(`http://localhost:3000/api/profiles/${query.id}`);
  const data = await res.json();

  return { props: data };
}



export default ProfilePage;
