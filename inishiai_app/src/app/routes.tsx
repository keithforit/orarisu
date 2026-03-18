import { createBrowserRouter } from "react-router";
import { Welcome } from "./screens/Welcome";
import { Onboarding1 } from "./screens/Onboarding1";
import { Onboarding2 } from "./screens/Onboarding2";
import { Onboarding3 } from "./screens/Onboarding3";
import { ChooseMethod } from "./screens/ChooseMethod";
import { UploadResume } from "./screens/UploadResume";
import { EnhanceWithVoice } from "./screens/EnhanceWithVoice";
import { MicrophonePermission } from "./screens/MicrophonePermission";
import { VoiceQuestion } from "./screens/VoiceQuestion";
import { VoiceInteraction } from "./screens/VoiceInteraction";
import { Recording } from "./screens/Recording";
import { Results } from "./screens/Results";
import { CandidateInsights } from "./screens/CandidateInsights";
import { SaveProfile } from "./screens/SaveProfile";
import { JobMatch } from "./screens/JobMatch";
import { CompleteProfile } from "./screens/CompleteProfile";
import { ProfileComplete } from "./screens/ProfileComplete";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/onboarding-1",
    Component: Onboarding1,
  },
  {
    path: "/onboarding-2",
    Component: Onboarding2,
  },
  {
    path: "/onboarding-3",
    Component: Onboarding3,
  },
  {
    path: "/choose-method",
    Component: ChooseMethod,
  },
  {
    path: "/upload-resume",
    Component: UploadResume,
  },
  {
    path: "/enhance-with-voice",
    Component: EnhanceWithVoice,
  },
  {
    path: "/permission",
    Component: MicrophonePermission,
  },
  {
    path: "/question",
    Component: VoiceQuestion,
  },
  {
    path: "/voice",
    Component: VoiceInteraction,
  },
  {
    path: "/recording",
    Component: Recording,
  },
  {
    path: "/results",
    Component: Results,
  },
  {
    path: "/insights",
    Component: CandidateInsights,
  },
  {
    path: "/save-profile",
    Component: SaveProfile,
  },
  {
    path: "/job-match",
    Component: JobMatch,
  },
  {
    path: "/complete-profile",
    Component: CompleteProfile,
  },
  {
    path: "/profile-complete",
    Component: ProfileComplete,
  },
]);