export type ProfileProps = {
  name: string
}

export const Profile = ({ name }: ProfileProps) => {
  return <h2>Private Profile Component. Name is {name}.</h2>
}
