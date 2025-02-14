'use client';

import Link from "next/link";



export default function WidgetPage() {
  return (
    <div>
      <h1>Widget Page</h1>
      <Link href="/">Aller a la home !</Link>
      <div
        className="publidata-widget-container widget-id-a8VOMtXxY5"
        data-containerid="1737984352883"
        data-initialized="true"
        style={{ height: '1000px' }}
      >
        <iframe
          scrolling="no"
          allowFullScreen
          allow="geolocation *;camera;microphone"
          src="https://widget.publidata.ca/a8VOMtXxY5/?containerId=1737984352883&isInserted=true"
          name="1737984352883"
          title="Widget déchets"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}
