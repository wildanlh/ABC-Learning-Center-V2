import CardContact from "@/components/contacts/card-contact";
import FollowContact from "@/components/contacts/follow-contact";
import ListContact from "@/components/contacts/list-contact";
import Header from "@/components/header";
import Layout from "@/components/layout";
import React from "react";
import listContact from "../data/data.json";
import listSocialMedia from "../data/data.json";
import listLocation from "../data/data.json";

interface ListContact {
  id: number;
  title: string;
  detail: string;
  image: string;
}

interface ListSocialMedia {
  id: number;
  title: string;
  detail: string;
  image: string;
}

interface ListLocation {
  id: number;
  title: string;
  detail: string;
  image: string;
}

const contact: ListContact[] = listContact.contact;
const socialMedia: ListSocialMedia[] = listSocialMedia.socialMedia;
const location: ListLocation[] = listLocation.location;

export default function Contact() {
  return (
    <>
      <Header pageTitle="Contact Us | ABC Learning Center" />
      <Layout>
        <div className="container mx-auto px-3 pt-28 lg:px-28">
          <h1 className="text-4xl font-bold text-black text-center mb-10">
            Contact Us
          </h1>
          <div className="flex justify-center">
            <FollowContact />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <CardContact title="Contact">
              {contact.map((list) => (
                <div key={list.id}>
                  <ListContact iconUrl={list.image} icon={list.title}>
                    {list.detail}
                  </ListContact>
                </div>
              ))}
            </CardContact>

            <CardContact title="Social Media">
              {socialMedia.map((list) => (
                <div key={list.id}>
                  <ListContact iconUrl={list.image} icon={list.title}>
                    {list.detail}
                  </ListContact>
                </div>
              ))}
            </CardContact>

            <CardContact title="Location">
              {location.map((list) => (
                <div key={list.id}>
                  <ListContact iconUrl={list.image} icon={list.title}>
                    {list.detail}
                  </ListContact>
                </div>
              ))}
            </CardContact>

            <CardContact title="Need Help?">
              <ListContact
                iconUrl="/assets/icons/support.svg"
                icon="bubbletext"
              >
                Chat with Costumer Service
              </ListContact>
            </CardContact>
          </div>
        </div>
      </Layout>
    </>
  );
}
