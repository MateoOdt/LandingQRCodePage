"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mateo Oudart</title>
      </Head>
      <main
        className="flex min-h-screen flex-col items-center p-4"
        style={{
          gap: "2rem",
        }}
      >
        <div
          className="Header"
          color="primary"
          style={{
            width: "100%",
            height: "fit-content",
            borderRadius: "1rem",
            backgroundImage:
              "linear-gradient(180deg, rgb(23,19,111), rgb(52,51,196))",
          }}
        >
          <div
            style={{
              margin: "2rem",
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
            <p
              className="text-xl text-muted-foreground"
              style={{
                color: "white",
              }}
            >
              Developpeur web & mobile
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <Button
                onClick={() => {
                  window.location.href = "tel:0652034291";
                }}
                style={{
                  gap: "12px",
                  width: "7rem",
                }}
              >
                <Phone />
                <p>Appeler</p>
              </Button>
              <Button
                onClick={() => {
                  window.location.href = "mailto:mateooudart@gmail.com";
                }}
                style={{
                  gap: "12px",
                  width: "7rem",
                }}
              >
                <Mail
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
                <p>Mail</p>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "100%",
          }}
        >
          <Card
            onClick={() => {
              window.location.href = "tel:0652034291";
            }}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              paddingLeft: "24px",
            }}
          >
            <Phone
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <CardHeader>
              <CardTitle>06 52 03 42 91</CardTitle>
              <CardDescription>Mobile</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div
          className="content"
          style={{
            width: "100%",
          }}
        >
          <Card
            onClick={() => {
              window.location.href = "mailto:mateooudart@gmail.com";
            }}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              paddingLeft: "24px",
            }}
          >
            <Mail />
            <CardHeader>
              <CardTitle>mateooudart@gmail.com</CardTitle>
              <CardDescription>Mail</CardDescription>
            </CardHeader>
          </Card>
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
            Médias Sociaux
          </h2>
          <Button
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/mateo-oudart/";
            }}
            className="mt-5"
            style={{
              gap: "12px",
              borderRadius: "100%",
              height: "50px",
              width: "50px",
            }}
          >
            <Linkedin />
          </Button>

          {/**
     * <div
      className="sticky-btn"
      style={{
        display: "flex",
        gap: "0.5rem",
        flexDirection: "column",
        position: "fixed",
        bottom: 40,
        right: 40,
      }}
    >
      <Button
        style={{
          borderRadius: "100%",
          height: "50px",
          width: "50px",
        }}
      >
        <Share2 />
      </Button>
      <Button
        onClick={handleDownloadVCard}
        style={{
          borderRadius: "100%",
          height: "50px",
          width: "50px",
        }}
      >
        <Contact />
      </Button>
    </div>
     */}
        </div>
      </main>
      <SpeedInsights />
    </>
  );
}
