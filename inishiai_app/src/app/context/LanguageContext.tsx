import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Welcome Screen
    'app.name': 'Inishi AI',
    'welcome.tagline': 'Express your true potential through your voice',
    'welcome.feature1.title': 'Speak naturally',
    'welcome.feature1.desc': 'No resumes needed',
    'welcome.feature2.title': 'Be yourself',
    'welcome.feature2.desc': 'Reduce hiring bias',
    'welcome.feature3.title': 'Show your strengths',
    'welcome.feature3.desc': 'Let your voice shine',
    'welcome.cta': 'Get Started',

    // Onboarding
    'onboarding.skip': 'Skip',
    'onboarding.next': 'Next',
    'onboarding.ready': "I'm ready",
    
    'onboarding1.title': "You're more than\na resume",
    'onboarding1.desc': 'Your voice reveals your true potential in ways words on paper never could',
    
    'onboarding2.title': "What you'll\ndiscover",
    'onboarding2.desc': 'A complete picture of your potential',
    'onboarding2.benefit1.title': 'Your strengths',
    'onboarding2.benefit1.desc': 'What makes you unique',
    'onboarding2.benefit2.title': 'Communication style',
    'onboarding2.benefit2.desc': 'How you express ideas',
    'onboarding2.benefit3.title': 'Perfect role fit',
    'onboarding2.benefit3.desc': 'Jobs that match you',
    
    'onboarding3.title': "You're in\nsafe hands",
    'onboarding3.desc': 'Just relax and be yourself',
    'onboarding3.reassure1': 'No time pressure - answer at your own pace',
    'onboarding3.reassure2': 'Any accent is welcome - just be yourself',
    'onboarding3.reassure3': 'You control your data - delete anytime',

    // Permission Screen
    'permission.title': "We'd like to hear you",
    'permission.desc': 'To create your voice profile, we need access to your microphone',
    'permission.privacy': 'Your voice is private and secure',
    'permission.time': 'Takes only 5 minutes',
    'permission.allow': 'Allow Microphone Access',
    'permission.notNow': 'Not now',

    // Question Screen
    'question.progress': 'Question {current} of {total}',
    'question.listening': 'Inishi is listening...',
    'question.text': 'Tell me about a time when you solved a challenging problem at work',
    'question.tip': 'Tip:',
    'question.tipText': "Speak naturally, like you're talking to a friend",
    'question.cta': 'Start Recording',

    // Recording Screen
    'recording.status': 'Recording',
    'recording.transcript': 'Live transcript',
    'recording.transcriptText': 'Well, there was this one project where we had a really tight deadline...',
    'recording.pause': 'Pause',
    'recording.resume': 'Resume',
    'recording.finish': 'Finish',

    // Results Screen
    'results.title': 'Your Voice Profile',
    'results.subtitle': "Here's what makes you unique",
    'results.score': 'Overall Match Score',
    'results.scoreDesc': 'Excellent fit for leadership roles',
    'results.strength.title': 'Key Strengths',
    'results.strength.1': 'Problem-solving',
    'results.strength.2': 'Adaptability',
    'results.strength.3': 'Team collaboration',
    'results.personality.title': 'Personality Traits',
    'results.personality.1': 'Analytical thinker',
    'results.personality.2': 'Detail-oriented',
    'results.personality.3': 'Empathetic leader',
    'results.communication.title': 'Communication Style',
    'results.communication.1': 'Clear and concise',
    'results.communication.2': 'Story-driven',
    'results.communication.3': 'Active listener',
    'results.share': 'Share Profile',
    'results.download': 'Download as PDF',
    'results.startOver': 'Start Over',

    // Language
    'language.english': 'English',
    'language.japanese': '日本語',
  },
  ja: {
    // Welcome Screen
    'app.name': 'Inishi AI',
    'welcome.tagline': '声であなたの本当の可能性を表現しよう',
    'welcome.feature1.title': '自然に話す',
    'welcome.feature1.desc': '履歴書は不要',
    'welcome.feature2.title': 'ありのままで',
    'welcome.feature2.desc': '採用バイアスを削減',
    'welcome.feature3.title': '強みを見せる',
    'welcome.feature3.desc': 'あなたの声を輝かせる',
    'welcome.cta': '始める',

    // Onboarding
    'onboarding.skip': 'スキップ',
    'onboarding.next': '次へ',
    'onboarding.ready': '準備完了',
    
    'onboarding1.title': 'あなたは履歴書\n以上の存在です',
    'onboarding1.desc': '紙に書かれた言葉では決して伝えられない、あなたの本当の可能性を声が明らかにします',
    
    'onboarding2.title': 'あなたが\n発見すること',
    'onboarding2.desc': 'あなたの可能性の全体像',
    'onboarding2.benefit1.title': 'あなたの強み',
    'onboarding2.benefit1.desc': 'あなたをユニークにするもの',
    'onboarding2.benefit2.title': 'コミュニケーションスタイル',
    'onboarding2.benefit2.desc': 'アイデアの表現方法',
    'onboarding2.benefit3.title': '完璧な役割の適合',
    'onboarding2.benefit3.desc': 'あなたに合う仕事',
    
    'onboarding3.title': 'あなたは\n安全な手の中に',
    'onboarding3.desc': 'リラックスして、ありのままでいてください',
    'onboarding3.reassure1': '時間の制限なし - 自分のペースで答えてください',
    'onboarding3.reassure2': 'どんなアクセントも歓迎 - ありのままで',
    'onboarding3.reassure3': 'データはあなたが管理 - いつでも削除可能',

    // Permission Screen
    'permission.title': 'あなたの声を聞かせてください',
    'permission.desc': 'ボイスプロフィールを作成するため、マイクへのアクセスが必要です',
    'permission.privacy': 'あなたの声は安全に保護されます',
    'permission.time': 'わずか5分で完了',
    'permission.allow': 'マイクアクセスを許可',
    'permission.notNow': '後で',

    // Question Screen
    'question.progress': '質問 {current} / {total}',
    'question.listening': 'Inishiが聞いています...',
    'question.text': '仕事で困難な問題を解決した時のことを教えてください',
    'question.tip': 'ヒント：',
    'question.tipText': '友達と話すように、自然に話してください',
    'question.cta': '録音を開始',

    // Recording Screen
    'recording.status': '録音中',
    'recording.transcript': 'リアルタイム文字起こし',
    'recording.transcriptText': 'えっと、締め切りがとても厳しいプロジェクトがありまして...',
    'recording.pause': '一時停止',
    'recording.resume': '再開',
    'recording.finish': '完了',

    // Results Screen
    'results.title': 'あなたのボイスプロフィール',
    'results.subtitle': 'あなたをユニークにするもの',
    'results.score': '総合マッチスコア',
    'results.scoreDesc': 'リーダーシップの役割に最適',
    'results.strength.title': '主な強み',
    'results.strength.1': '問題解決能力',
    'results.strength.2': '適応力',
    'results.strength.3': 'チーム協力',
    'results.personality.title': '性格特性',
    'results.personality.1': '分析的思考',
    'results.personality.2': '細部へのこだわり',
    'results.personality.3': '共感的リーダー',
    'results.communication.title': 'コミュニケーションスタイル',
    'results.communication.1': '明確で簡潔',
    'results.communication.2': 'ストーリー重視',
    'results.communication.3': '傾聴力',
    'results.share': 'プロフィールを共有',
    'results.download': 'PDFをダウンロード',
    'results.startOver': '最初から始める',

    // Language
    'language.english': 'English',
    'language.japanese': '日本語',
  },
};