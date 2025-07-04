import {AbsoluteFill, Img, Video} from 'remotion';
import {matchData} from './config';

export const MatchAnnouncement: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <Video
        src="/provadesigna.mp4"
        startFrom={0}
        endAt={150}
        volume={1}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          zIndex: 0,
        }}
      />

      {/* 🔛 Sovrapposizione loghi e testo */}
      <div style={{
        zIndex: 1,
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px #000',
      }}>
  
      <div style={{ display: 'flex', gap: 80, marginBottom: 50 }}>
          <Img src={matchData.teamA.logo} style={{ height: 150 }} />
          <h1 style={{ fontSize: 80 }}>{matchData.teamA.name}</h1>
          <h1 style={{ fontSize: 80 }}>vs</h1>
          <h1 style={{ fontSize: 80 }}>{matchData.teamB.name}</h1>
          <Img src={matchData.teamB.logo} style={{ height: 150 }} />
        </div>
        <h2 style={{ fontSize: 50, marginBottom: 10 }}>{matchData.stadium}</h2>
        <h3 style={{ fontSize: 40 }}>{matchData.dateTime}</h3>
      </div>
    </AbsoluteFill>
  );
};