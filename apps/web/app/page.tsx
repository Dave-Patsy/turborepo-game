import { prisma } from "@/lib/prisma";
import { Button } from "@ui/components/button";

export default async function Page() {
  const data = await prisma.user.findMany()
  return (
    <>
      <h1>Web</h1>
      <Button>Click me</Button>
      {data.map((user,idx)=>(
        <div key={idx}>
          <div>{user.name}</div>
        </div>
      ))}
    </>
  );
}
