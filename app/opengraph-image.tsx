import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Bester – Self-Development Made Social';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// OG Image component
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #2F00FF 0%, #8B5CF6 50%, #F51AA4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: 96, marginBottom: 20 }}>Bester</div>
        <div style={{ fontSize: 48, fontWeight: 'normal', opacity: 0.9 }}>
          Self-Development Made Social
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
