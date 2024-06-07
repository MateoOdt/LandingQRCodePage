import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div
        color="primary"
        style={{
          width: "100%",
          height: "40vh",
          borderRadius: "1rem",
          backgroundImage:
            "linear-gradient(180deg, rgb(23,19,111), rgb(52,51,196))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.2rem",
        }}
      >
        <Avatar
          style={{
            width: "100px",
            height: "100px",
          }}
        >
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
          style={{
            color: "white",
          }}
        >
          Mateo Oudart
        </h2>
      </div>
    </main>
  );
}
