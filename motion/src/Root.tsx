import React from "react";
import { Composition, Folder } from "remotion";
import { Munt, MUNT_DURATION, MUNT_MARK_DURATION } from "./scenes/Munt";
import { Bloei, BLOEI_DURATION, BLOEI_LOOP_FRAMES, BLOEI_MARK_DURATION } from "./scenes/Bloei";
import { Lijn, LIJN_DURATION } from "./scenes/Lijn";
import { Kruising, KRUISING_DURATION } from "./scenes/Kruising";
import { Signatuur, SIGNATUUR_DURATION } from "./scenes/Signatuur";
import { P1_Muntslag, P1_DURATION } from "./scenes/P1_Muntslag";
import { P2_Kinetisch, P2_DURATION } from "./scenes/P2_Kinetisch";
import { P3_Goudfolie, P3_DURATION } from "./scenes/P3_Goudfolie";
import { P4_TweeWerelden, P4_DURATION } from "./scenes/P4_TweeWerelden";
import { P5_Zegel, P5_DURATION } from "./scenes/P5_Zegel";

const FPS = 30;
const W = 1920;
const H = 1080;
const PW = 1080;
const PH = 1920;

export const Root: React.FC = () => (
  <>
    <Folder name="DUKAAT-16x9">
      <Composition id="01-Munt" component={Munt} durationInFrames={MUNT_DURATION} fps={FPS} width={W} height={H} defaultProps={{}} />
      <Composition id="02-Bloei" component={Bloei} durationInFrames={BLOEI_DURATION} fps={FPS} width={W} height={H} defaultProps={{ loopOnly: false }} />
      <Composition id="02-Bloei-Loop" component={Bloei} durationInFrames={BLOEI_LOOP_FRAMES} fps={FPS} width={W} height={H} defaultProps={{ loopOnly: true }} />
      <Composition id="03-Lijn" component={Lijn} durationInFrames={LIJN_DURATION} fps={FPS} width={W} height={H} defaultProps={{}} />
      <Composition id="04-Kruising" component={Kruising} durationInFrames={KRUISING_DURATION} fps={FPS} width={W} height={H} defaultProps={{}} />
      <Composition id="05-Signatuur" component={Signatuur} durationInFrames={SIGNATUUR_DURATION} fps={FPS} width={W} height={H} defaultProps={{}} />
    </Folder>
    <Folder name="DUKAAT-9x16-V1">
      {/* alleen de tulp */}
      <Composition
        id="V1-01-Tulp-Munt"
        component={Munt}
        durationInFrames={MUNT_MARK_DURATION}
        fps={FPS}
        width={PW}
        height={PH}
        defaultProps={{ layout: "portrait-mark", markOnly: true }}
      />
      <Composition
        id="V1-02-Tulp-Bloei"
        component={Bloei}
        durationInFrames={BLOEI_MARK_DURATION}
        fps={FPS}
        width={PW}
        height={PH}
        defaultProps={{ layout: "portrait-mark", markOnly: true }}
      />
      {/* compleet logo */}
      <Composition
        id="V1-03-Lijn"
        component={Lijn}
        durationInFrames={LIJN_DURATION}
        fps={FPS}
        width={PW}
        height={PH}
        defaultProps={{ layout: "portrait", light: true }}
      />
      <Composition
        id="V1-04-Kruising"
        component={Kruising}
        durationInFrames={KRUISING_DURATION}
        fps={FPS}
        width={PW}
        height={PH}
        defaultProps={{ layout: "portrait" }}
      />
      <Composition
        id="V1-05-Signatuur"
        component={Signatuur}
        durationInFrames={SIGNATUUR_DURATION}
        fps={FPS}
        width={PW}
        height={PH}
        defaultProps={{ layout: "portrait", light: true }}
      />
    </Folder>
    <Folder name="DUKAAT-9x16-V2">
      <Composition id="V2-01-Muntslag" component={P1_Muntslag} durationInFrames={P1_DURATION} fps={FPS} width={PW} height={PH} />
      <Composition id="V2-02-Kinetisch" component={P2_Kinetisch} durationInFrames={P2_DURATION} fps={FPS} width={PW} height={PH} />
      <Composition id="V2-03-Goudfolie" component={P3_Goudfolie} durationInFrames={P3_DURATION} fps={FPS} width={PW} height={PH} />
      <Composition id="V2-04-TweeWerelden" component={P4_TweeWerelden} durationInFrames={P4_DURATION} fps={FPS} width={PW} height={PH} />
      <Composition id="V2-05-Zegel" component={P5_Zegel} durationInFrames={P5_DURATION} fps={FPS} width={PW} height={PH} />
    </Folder>
  </>
);
