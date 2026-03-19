import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-0.02em',
          fontWeight: 900,
          background: '#09090B',
        }}
      >
        <div
          style={{
            left: '40',
            top: '40',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              width: '40',
              height: '40',
              background: '#0ea5e9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              color: 'white',
              fontSize: '24px',
              fontWeight: 900,
              fontStyle: 'italic',
              marginRight: '12px',
            }}
          >
            GP
          </span>
          <span
            style={{
              fontSize: '32px',
              color: 'white',
              fontWeight: 900,
              textTransform: 'uppercase',
            }}
          >
            GrowthPulse <span style={{ color: '#0ea5e9', marginLeft: '8px' }}>AI</span>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Your marketing stack, <span style={{ color: '#0ea5e9' }}>diagnosed</span> in minutes.
          </h1>
          <p
             style={{
               fontSize: '28px',
               color: '#94a3b8',
               fontWeight: 500,
               maxWidth: '800px',
             }}
          >
            Automated performance scoring across 7 growth dimensions. Board-ready roadmaps. Zero guesswork.
          </p>
        </div>
        
        {/* Decorative Grid Mesh */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            zIndex: -1,
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
