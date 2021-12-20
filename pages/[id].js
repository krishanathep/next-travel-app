import React from "react";
import CardDetail from "../src/CardDetail";

export default function Detail({data}) {
  console.log(data)
  return (
    <div>
      <CardDetail key={data.attraction.id} data={data} />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://www.mecallapi.com/api/attractions");
  const props = await res.json();

  const paths = props.map((at) => ({
    params: { id: String(at.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params}) {
  const res = await fetch(
    `https://www.mecallapi.com/api/attractions/${params.id}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}