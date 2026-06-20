import { ImageResponse } from 'next/og';
import { BRAND } from '../../lib/brandColors';
import { SITE_TITLE_DEFAULT } from '../../lib/siteSeo';

export const alt = 'Arjun Varadiyil — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: BRAND.surface,
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ width: 72, height: 4, backgroundColor: BRAND.accent }} />
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: BRAND.foreground,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {SITE_TITLE_DEFAULT}
          </div>
          <div
            style={{
              fontSize: 28,
              color: BRAND.foregroundMuted,
              lineHeight: 1.45,
              maxWidth: 760,
            }}
          >
            Next.js · Payload CMS · News, editorial & CMS platforms in Kerala.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid ${BRAND.accentMuted}`,
            paddingTop: 28,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: BRAND.accent,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            arjunvaradiyil.in
          </div>
          <div style={{ fontSize: 18, color: BRAND.foregroundMuted }}>Kerala, India</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
