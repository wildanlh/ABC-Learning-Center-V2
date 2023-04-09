import Card from "@/components/card";
import Header from "@/components/header";
import Layout from "@/components/layout";
import React from "react";
import teamData from "../data/data.json";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  detailPosition: string;
  image: string;
}

const team: TeamMember[] = teamData.team;

export default function About() {
  return (
    <>
      <Header pageTitle="About Us | ABC Learning Center" />
      <Layout>
        <div className="bg-blue-600 w-full">
          <div className="container mx-auto px-28 py-28">
            <div className="text-white text-center">
              <h1 className="text-4xl font-bold text-white mb-10">About Us</h1>
              <p className="text-lg">
                ABC Learning Center is a Professional Educational Platform. Here
                we will provide you only interesting content, which you will
                like very much. We&apos;re dedicated to providing you the best
                of Educational, with a focus on dependability and Website
                Development, Software Development. We&apos;re working to turn
                our passion for Educational into a booming online website. We
                hope you enjoy our Educational as much as we enjoy offering them
                to you.
                <br />
                <br />I will keep posting more important posts on my Website for
                all of you. Please give your support and love.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-28 pt-28">
          <div className="grid grid-cols-4 gap-10 border p-10 rounded-lg">
            <div className="col-span-full">
              <h1 className="text-4xl font-bold text-black text-center">
                Our Team
              </h1>
            </div>
            {team.map((member) => (
              <div key={member.id}>
                <Card
                  imageUrl={member.image}
                  alt={member.name}
                  name={member.name}
                  position={member.position}
                  detailPosition={member.detailPosition}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
