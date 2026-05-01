import React from "react";

function Card() {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Code"
      />
      <h1 className="text-3xl bg-blue-600 p-3 rounded-2xl">
        A card for photos
      </h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        commodi pariatur provident fugiat ut recusandae iure eos, odit eum
        omnis, laboriosam dolor at tempora corporis exercitationem praesentium
        maiores, consequuntur inventore.
      </p>
    </>
  );
}

export default Card;
