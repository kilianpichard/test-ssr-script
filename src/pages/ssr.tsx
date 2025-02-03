import React from 'react';

const SSRPage = ({ data }) => {
  return (
    <div>
      <h1>Server-Side Rendering with Next.js</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default SSRPage;