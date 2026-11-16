import Script from 'next/script';

export default function WebyzAnalytics() {
  return (
    <Script
      src="https://api.webyz.io/js/script.js"
      data-site-id="8c6f0da1-7f14-4425-a841-379e066c9067"
      data-endpoint="https://api.webyz.io/api/v1/track"
      data-outbound-links="true"
      strategy="afterInteractive"
    />
  );
}
