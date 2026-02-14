import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Prince Boateng Asare';
    const mode = searchParams.get('mode') || 'EXECUTIVE'; // EXECUTIVE | TECHNICAL

    const isTechnical = mode === 'TECHNICAL';
    const bg = isTechnical ? '#0a0a0a' : '#ffffff';
    const fg = isTechnical ? '#ffffff' : '#171717';
    const accent = isTechnical ? '#22c55e' : '#DC2626';

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: bg,
                    color: fg,
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Abstract Background Element */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-20%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle at center, ${accent}20 0%, transparent 70%)`,
                        opacity: 0.5,
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 24,
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            color: accent,
                            marginBottom: 20,
                            fontWeight: 600,
                        }}
                    >
                        Creative Directing Reformer
                    </div>

                    {/* Title */}
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            textAlign: 'center',
                            lineHeight: 1.1,
                            maxWidth: '80%',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {title}
                    </div>

                    {/* Decoration */}
                    <div style={{ display: 'flex', marginTop: 40, gap: 10 }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: accent }} />
                        <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: accent, opacity: 0.5 }} />
                        <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: accent, opacity: 0.2 }} />
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
