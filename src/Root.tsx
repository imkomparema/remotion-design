import {Composition} from 'remotion';
import {MatchAnnouncement} from './MatchAnnouncement';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MatchAnnouncement"
        component={MatchAnnouncement}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
