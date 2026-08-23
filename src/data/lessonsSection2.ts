import { LessonData } from '../types';

export const SECTION_2_LESSONS: LessonData[] = [
  {
    id: 22,
    section: 2,
    title: 'Root 6 Bar Chord (E Formation)',
    titleMy: 'အခန်း ၂၂ - Root 6 Bar Chord (E ပုံစံ Barre Chords)',
    subtitle: 'ကြိုး ၆ ချောင်းစလုံးကို လက်ညှိုးဖြင့် ပိတ်ဖိသော Bar Chords စတင်ခြင်း',
    overviewMy: 'Fretboard တစ်လျှောက် ရွှေ့လျားတီးခတ်နိုင်သော Root 6 (E Formation) Bar Chord သဘောတရားနှင့် အားထုတ်ဖမ်းနည်းကို သင်ယူမည်။',
    keyPointsMy: [
      'Open Chords များတွင် Open ကြိုးပါဝင်ပြီး၊ Bar Chord တွင်မူ လက်ညှိုးသည် Nut နေရာကို အစားထိုးကာ ကြိုး ၆ ချောင်းလုံးကို ပိတ်ဖိထားသည် (Barre)။',
      'Root 6 Bar Chord သည် Open E chord ပုံစံကို လက်ညှိုး Barre ဖြင့် ရွှေ့ထားခြင်းဖြစ်သည်။',
      'Fret 1 = F, Fret 3 = G, Fret 5 = A, Fret 7 = B, Fret 8 = C (Root Note သည် 6th string ပေါ်တွင် ရှိသည်)။',
      'Slide Technique: Bar chord တစ်ခုမှ တစ်ခုသို့ ကူးရာတွင် ဖိအားကို အနည်းငယ် လျှော့ပြီး ပုံစံမပျက်ဘဲ လျှော၍ ရွှေ့ပါ။'
    ],
    chords: ['F_barre'],
    rhythms: [
      {
        id: 'r_barre_down4',
        name: 'Root 6 Slide Down Strum (Exercise 47)',
        timeSignature: '4/4',
        descriptionEn: '4 steady downs while sliding barre positions',
        descriptionMy: 'Barre ပုံစံ မပျက်စေဘဲ ၄ ချက် ညီညာစွာ ခတ်ခြင်း',
        spokenCount: '1 - 2 - 3 - 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 75
      }
    ],
    exercises: [
      {
        id: 'ex_47',
        title: 'Exercise 47 - Root 6 Bar Chord Sliding Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၄၇ - Root 6 Bar Chord လျှောရွှေ့လေ့ကျင့်ခန်း (A -> G -> F -> E)',
        exerciseNumber: 47,
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'A (5th Fret)', bars: 1 },
          { chordName: 'G (3rd Fret)', bars: 1 },
          { chordName: 'F (1st Fret)', bars: 1 },
          { chordName: 'E (Open)', bars: 1 }
        ],
        notesMy: 'A (Fret 5) မှ G (Fret 3) သို့လည်းကောင်း၊ F (Fret 1) သို့လည်းကောင်း လက်ချောင်းပုံစံ မပျက်စေဘဲ Slide ရွှေ့ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Barre Finger Flatness & Elbow Angle',
        nameMy: 'လက်ညှိုး Barre ဖိအား ညီညာစေနည်း',
        explanationMy: 'လက်ညှိုးကို တောင့်တင်းမနေစေဘဲ အနည်းငယ် ဘယ်ဘက်သို့ စောင်း၍ လက်မကို လည်ပင်းနောက် အလယ်ဗဟိုတွင် ထောက်ထားပါ။ တံတောင်ဆစ်ကို ကိုယ်လုံးနှင့် နီးကပ်စွာ ထားပါ။',
        proTipMy: 'ဂစ်တာ Fretboard ပေါ်ရှိ Position Marker Dots (3, 5, 7, 9) များကို ကြည့်၍ Root Note တည်နေရာကို ချက်ချင်း ရှာဖွေပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Barre ဖိရာတွင် လက်အရမ်းညောင်းပြီး ကြိုး ၂ နှင့် ၃ အသံသေနေခြင်း',
        fixMy: 'လက်ခွန်အားတစ်ခုတည်းဖြင့် ညှစ်မဖိပါနှင့်။ လက်မောင်း၏ အလေးချိန်ကို နောက်သို့ အနည်းငယ် ဆွဲချပေးခြင်းဖြင့် အားစိုက်စရာမလိုဘဲ အသံကြည်လင်လာမည်။'
      }
    ]
  },
  {
    id: 23,
    section: 2,
    title: 'Progression in F & Percussive Strumming (X Mark)',
    titleMy: 'အခန်း ၂၃ - Progression in F နှင့် Percussive Strumming (ရစ်သမ်ရိုက်ချက်)',
    subtitle: 'လက်ဝဲလက်အား ဖြေလျှော့၍ စည်းချက်သံ (Chuk/X) ထွက်ပေါ်စေသော နည်းစနစ်',
    overviewMy: 'F Bar Chord ဖြင့် သံစဉ်တီးခတ်ခြင်းနှင့် ရစ်သမ်ဂစ်တာတွင် အသက်တမျှ အရေးကြီးသော Percussive Strum (X Mark - အသံတိတ် စည်းချက်ရိုက်ခတ်မှု) ကို သင်ယူမည်။',
    keyPointsMy: [
      'Percussive Strum (X): Bar Chord ဖိထားစဉ် လက်ဝဲလက် ဖိအားကို လျှော့ကာ ကြိုးများကို ထိရုံသာ ထိထားပြီး ခတ်လိုက်ပါက "Chuk / Click" ဟူသော စည်းချက်ရိုက်သံ ထွက်ပေါ်သည်။',
      'Wedge Mark အပေါ်တွင် "X" ပါပါက ထိုအချက်သည် Percussive Strum ဖြစ်သည်။',
      'Open Chords များတွင်မူ လက်ဖိအားကို လျှော့ပြီး လက်ဝါးစောင်းနှင့် လက်မဖြင့် Open ကြိုးများကို အသာဖုံးအုပ်၍ Mute လုပ်ရသည်။',
      'ရစ်သမ်ဥပမာ: Beat 2 နှင့် 4 တွင် Percussive Strum ခတ်ခြင်းသည် Drum ၏ Snare ရိုက်ချက်နှင့် တူညီသည်။'
    ],
    chords: ['F_barre', 'Bb_barre', 'C', 'Cmaj7', 'C7'],
    rhythms: [
      {
        id: 'r_percussive_2_4',
        name: 'Percussive Strum on 2 & 4 (Exercise 49)',
        timeSignature: '4/4',
        descriptionEn: 'V^ (1+) X (2) V^ (3+) X (4)',
        descriptionMy: 'Beat 2 နှင့် 4 တွင် Percussive (X) ခတ်သော Funky / Rock Pattern',
        spokenCount: '1-and, CHUK(2), 3-and, CHUK(4)',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'percussive-down', accent: true },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'percussive-down', accent: true }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_48',
        title: 'Exercise 48 - Progression in F (F - Bb - C - Bb)',
        titleMy: 'လေ့ကျင့်ခန်း ၄၈ - F Key Bar Chord Progression',
        exerciseNumber: 48,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'F', bars: 1 },
          { chordName: 'Bb', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'Bb', bars: 1 }
        ],
        notesMy: 'F (Fret 1) မှ Bb (Fret 6) သို့ အကွာအဝေးများသဖြင့် စည်းဝါးမပြတ်စေရန် နှေးနှေးမှ စတင်ပါ။'
      },
      {
        id: 'ex_50',
        title: 'Exercise 50 - Percussive Strum Applied to F Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၅၀ - Percussive Strum ထည့်သွင်းထားသော Progression in F',
        exerciseNumber: 50,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'F', bars: 1 },
          { chordName: 'Bb', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'Bb', bars: 1 }
        ],
        notesMy: 'Beat 2 နှင့် 4 တွင် ထွက်ပေါ်သော Percussive (Chuk) အသံသည် ဒရမ်ရိုက်ချက်သဖွယ် ခံစားရစေသည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Left Hand Fret-Hand Muting (Percussive)',
        nameMy: 'လက်ဝဲလက် ဖိအားလျှော့ Muting နည်းစနစ်',
        explanationMy: 'လက်ချောင်းများကို ကြိုးပေါ်မှ မခွာဘဲ ဖိအား (Pressure) ကိုသာ ချက်ချင်း လွှတ်ပေးလိုက်ခြင်းဖြင့် ကြိုးတုန်ခါမှု ရပ်တန့်ကာ Chuk အသံ ထွက်လာသည်။',
        proTipMy: 'Bob Dylan, Funk နှင့် Reggae ဂီတများတွင် အခြေခံအကျဆုံး နည်းစနစ်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Percussive ခတ်ရာတွင် ကြိုးသံ ထွက်နေသေးခြင်း',
        fixMy: 'Open string များ အသံမမြည်စေရန် လက်ညှိုး Barre ကို ကြိုး ၆ ချောင်းစလုံး အပေါ်တွင် အပြားလိုက် အသာ ထိထားပေးပါ။'
      }
    ]
  },
  {
    id: 24,
    section: 2,
    title: 'Bar Chord Progression & Key Signatures',
    titleMy: 'အခန်း ၂၄ - Bar Chord Progression နှင့် Key Signatures (သော့သင်္ကေတများ)',
    subtitle: 'F, G, Bb, C Bar Chords နှင့် သီချင်း၏ Key ကို ဖတ်ရှုနည်း',
    overviewMy: 'Root 6 Bar Chords များကို ပေါင်းစပ်တီးခတ်ခြင်းနှင့် Sheet Music အစတွင်ပါသော Key Signatures (Sharps / Flats) များ၏ သဘောတရားကို သင်ယူမည်။',
    keyPointsMy: [
      'Key Signature: သီချင်းတစ်ပုဒ်တွင် မည်သည့် Scale Note များ ပါဝင်သည်ကို ပြသသော စာရွက်အစမှ သင်္ကေတဖြစ်သည်။',
      'Key of C Major: Sharps/Flats မရှိပါ (All Natural Notes)။',
      'Key of G Major: F# (1 Sharp) ပါဝင်သည်။',
      'Key of D Major: F#, C# (2 Sharps) ပါဝင်သည်။ Key of A: 3 Sharps (F#, C#, G#)။',
      'Key of F Major: Bb (1 Flat) ပါဝင်သည်။ Key of Bb: Bb, Eb (2 Flats)။'
    ],
    chords: ['F_barre'],
    rhythms: [
      {
        id: 'r_bar_double_percussive',
        name: 'Double Percussive Strum (Exercise 52)',
        timeSignature: '4/4',
        descriptionEn: 'V^ (1+) XX (2+) V^ (3+) XX (4+)',
        descriptionMy: 'Beat 2+ နှင့် 4+ တွင် Percussive ၂ ချက်စီ ခတ်သော ပုံစံ',
        spokenCount: '1-and, CHUK-CHUK, 3-and, CHUK-CHUK',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'percussive-down' },
          { count: '+', type: 'percussive-up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'percussive-down' },
          { count: '+', type: 'percussive-up' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_52',
        title: 'Exercise 52 - F, G, Bb, C Bar Chord Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၅၂ - F, G, Bb, C Bar Chords တွဲ',
        exerciseNumber: 52,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'F', bars: 1 },
          { chordName: 'G', bars: 1 },
          { chordName: 'Bb', bars: 1 },
          { chordName: 'C', bars: 1 }
        ],
        notesMy: 'ခတ်ကွက် (Rhythm) ကို အရင် Chord တစ်ခုတည်းဖြင့် ကျင့်ပြီးမှ Chord Progression သို့ ပေါင်းစပ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Separate Rhythm & Chord Practice',
        nameMy: 'ရစ်သမ်နှင့် Chord ကို ခွဲခြားလေ့ကျင့်နည်း',
        explanationMy: 'ခတ်ကွက်အသစ် ခက်ခဲပါက Chord မပြောင်းဘဲ သက်ဆိုင်ရာ ခတ်ကွက်ကို လက်ယာလက် ယဉ်ပါးအောင် အရင်ကျင့်ပြီးမှ Chord များနှင့် ပေါင်းစပ်တီးပါ။',
        proTipMy: 'ဒီနည်းလမ်းသည် ခက်ခဲသော သီချင်းများကို အချိန်တိုအတွင်း ကျွမ်းကျင်စေရန် အကောင်းဆုံး နည်းလမ်းဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Key Signature တွင် Sharp မည်မျှပါသည်ကို မမှတ်မိခြင်း',
        fixMy: 'Father Charles Goes Down And Ends Battle (F C G D A E B) ဟူသော စာသားဖြင့် အစီအစဉ်အတိုင်း လွယ်ကူစွာ မှတ်သားပါ။'
      }
    ]
  },
  {
    id: 25,
    section: 2,
    title: 'Root 6 Minor Bar Chord & Triplet Barre Progressions',
    titleMy: 'အခန်း ၂၅ - Root 6 Minor Bar Chord (Fm, Gm, Am, Bm, C#m)',
    subtitle: 'Finger 2 ကို ကြွလိုက်ရုံဖြင့် ရရှိသော Minor Bar Chord နှင့် Triplet Strum',
    overviewMy: 'Root 6 Major Bar Chord မှ Finger 2 (လက်ခလယ်) ကို ကြွလိုက်ရုံဖြင့် ရရှိသော Root 6 Minor Bar Chord (Fm, F#m, Gm, Am, Bm) ဖွဲ့စည်းပုံကို သင်ယူမည်။',
    keyPointsMy: [
      'Root 6 Minor Bar Chord ဖွဲ့စည်းပုံ: Root 6 Major မှ လက်ခလယ် (Finger 2) ကို ကြွလိုက်ခြင်း ဖြစ်သည်။',
      'Fret 1 = Fm, Fret 2 = F#m, Fret 3 = Gm, Fret 5 = Am, Fret 7 = Bm, Fret 9 = C#m။',
      'Minor Chord သည် 1 - b3 - 5 ဖွဲ့စည်းပုံ ဖြစ်ပြီး 3rd note သည် Semitone လျော့ကျသွားသည်။',
      'Exercise 53 တွင် Beat 2 ၌ Triplet Down Strum ပါဝင်သည်။'
    ],
    chords: ['Fm_barre'],
    rhythms: [
      {
        id: 'r_minor_triplet',
        name: 'Triplet Strum on Beat 2 (Exercise 53)',
        timeSignature: '4/4',
        descriptionEn: 'V (1), VVV (2+a), V (3), V (4)',
        descriptionMy: 'Beat 2 တွင် Triplet ခတ်သော ရစ်သမ်',
        spokenCount: '1, 2-and-a, 3, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down', triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_53',
        title: 'Exercise 53 - Minor Bar Progression (A, F#m, Bm, E)',
        titleMy: 'လေ့ကျင့်ခန်း ၅၃ - A -> F#m -> Bm -> E Minor Bar သံစဉ်တွဲ',
        exerciseNumber: 53,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'A (5th Fret)', bars: 1 },
          { chordName: 'F#m (2nd Fret)', bars: 1 },
          { chordName: 'Bm (7th Fret)', bars: 1 },
          { chordName: 'E (Open)', bars: 1 }
        ],
        notesMy: 'F#m (Fret 2) မှ Bm (Fret 7) သို့ Minor shape အတိုင်း ၅ Fret အကွာ လျှောရွှေ့ပါ။'
      },
      {
        id: 'ex_54',
        title: 'Exercise 54 - E, G#m, F#m, B Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၅၄ - E, G#m, F#m, B Progression',
        exerciseNumber: 54,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'E (Open)', bars: 1 },
          { chordName: 'G#m (4th Fret)', bars: 1 },
          { chordName: 'F#m (2nd Fret)', bars: 1 },
          { chordName: 'B (7th Fret)', bars: 1 }
        ],
        notesMy: 'Classic Pop/Ballad သီချင်းများစွာတွင် သုံးသော I - iii - ii - V သံစဉ် ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Lifting Finger 2 for Minor Tone',
        nameMy: 'Finger 2 ကို ကြွ၍ Minor အသံ ပြောင်းလဲနည်း',
        explanationMy: 'Major မှ Minor သို့ ပြောင်းရာတွင် Finger 2 ကိုသာ လွှတ်ပေးရပြီး လက်ညှိုး Barre က ကြိုး ၃ ပေါ်ရှိ Flat 3rd note ကို အစားထိုး အသံထွက်စေသည်။',
        proTipMy: 'လက်ညှိုး Barre ၏ 3rd string ပေါ်တွင် အသံသေမနေစေရန် သေချာစစ်ဆေးပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Minor Barre တွင် 3rd string အသံ သေနေခြင်း',
        fixMy: 'Finger 2 ကို ကြွလိုက်ချိန်တွင် လက်ညှိုး Barre ပြေလျော့မသွားစေရန် လက်မ၏ အလယ်ဗဟို ထောက်ပံ့မှုကို ထိန်းထားပါ။'
      }
    ]
  },
  {
    id: 26,
    section: 2,
    title: 'Two Bar Percussive Rhythm & Rock Syncopations',
    titleMy: 'အခန်း ၂၆ - Two-Bar Percussive Rhythm နှင့် Rock Syncopations',
    subtitle: 'Beat 4 ၏ အတက် (+) တွင် Chord အပြောင်းစောသော Rock နည်းစနစ်',
    overviewMy: 'Rock ဂစ်တာသမားများ အမြဲသုံးသော Two-Bar Percussive Pattern နှင့် Beat 4 ၏ အတက် (+) တွင် Chord ကို ကြိုတင်ပြောင်းလဲသော Syncopation နည်းစနစ်ကို သင်ယူမည်။',
    keyPointsMy: [
      'Two-Bar Percussive Rhythm (Exercise 55): Bar တိုင်းတွင် Percussive Strum (X) များ ထည့်သွင်းထားသည်။',
      'Anticipation / Syncopation: Chord အပြောင်းသည် Bar အသစ်၏ Beat 1 တွင် မဟုတ်ဘဲ ရှေ့ Bar ၏ "4+" တွင် ကြိုတင်ပြောင်းလဲတီးခတ်သည်။',
      'ဤနည်းစနစ်သည် Rock သီချင်းများကို စည်းချက်မြူးကြွစေပြီး ရှေ့သို့ တွန်းအား (Forward momentum) ဖြစ်ပေါ်စေသည်။'
    ],
    chords: ['Am', 'F_barre', 'C'],
    rhythms: [
      {
        id: 'r_two_bar_rock_percussive',
        name: 'Rock 2-Bar Percussive Pattern (Exercise 55)',
        timeSignature: '4/4',
        descriptionEn: 'V^ X^ V^ X^ | V^ X^ V^ X^ V',
        descriptionMy: 'Up & Down တိုင်းတွင် Percussive ပေါင်းစပ်ထားသော စံပြ Rock ခတ်ကွက်',
        spokenCount: '1+ X+ 3+ X+ | 1+ X+ 3+ X+ 1',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'percussive-down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'percussive-down' },
          { count: '+', type: 'up', accent: true } // Chord change on 4+
        ],
        defaultBpm: 90
      }
    ],
    exercises: [
      {
        id: 'ex_56',
        title: 'Exercise 56 - Am, F, C Rock Bar Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၅၆ - Am, F, C Rock Bar Progression',
        exerciseNumber: 56,
        timeSignature: '4/4',
        recommendedBpm: 90,
        chords: [
          { chordName: 'Am', bars: 2 },
          { chordName: 'F', bars: 2 },
          { chordName: 'Am', bars: 2 },
          { chordName: 'F', bars: 1 },
          { chordName: 'C', bars: 1 }
        ],
        notesMy: 'Beat 4 ၏ "and (+)" အချက်တွင် Chord ကို လက်ဖမ်းပြောင်းလဲပြီး ခတ်ရမည်ကို အထူးသတိပြုပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Anticipated Chord Changes (On the "And" of 4)',
        nameMy: 'Beat 4+ တွင် ကြိုတင် Chord ပြောင်းနည်း',
        explanationMy: 'Bar အစ Beat 1 ကျမှ ပြောင်းမည့်အစား Beat 4 ၏ အတက်ခတ်ချက်တွင် နောက် Chord ကို ကြိုဖမ်းပြီး Up Strum ဖြင့် ခတ်လိုက်ခြင်း ဖြစ်သည်။',
        proTipMy: 'Rock, Funk နှင့် Pop တွင် အလွန်ခေတ်စားသော Groove နည်းစနစ်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: '4+ တွင် ပြောင်းရာတွင် စည်းချက် လွဲချော်သွားခြင်း',
        fixMy: 'Tempo ကို လျှော့ချပြီး 1+ 2+ 3+ (Change!) ဟု အသံထွက် ရေတွက်၍ လက်ချောင်းများ လျင်မြန်စွာ ကူးနိုင်အောင် လေ့ကျင့်ပါ။'
      }
    ]
  },
  {
    id: 27,
    section: 2,
    title: 'Dominant 7th Bar Chord (Root 6), Passing Chords & Rests',
    titleMy: 'အခန်း ၂၇ - Dominant 7th Bar Chord (Root 6)၊ Passing Chords နှင့် Rests',
    subtitle: 'F7 Bar Chord၊ ကြားခံဖြတ်ကူး Chord (Passing Chords) နှင့် ဂီတနားချိန် (Rests)',
    overviewMy: 'Root 6 Dominant 7th (F7, Bb7, C7) Bar Chords၊ တစ်သံကွာ Chord များကို Semitone ဖြင့် ဆက်သွယ်သော Passing Chords နှင့် Rests (တိတ်ဆိတ်ချိန်) များကို သင်ယူမည်။',
    keyPointsMy: [
      'Root 6 Dominant 7th (F7): Root 6 Major မှ လက်သန်း (Finger 4) ကို ကြွ၍ 2nd string Fret 4 သို့ ရွှေ့ခြင်း သို့မဟုတ် Open E7 ပုံစံဖြင့် Barre ပြုလုပ်ခြင်း ဖြစ်သည်။',
      'Passing Chord Principle: တစ်သံ (Tone) ကွာဝေးသော မည်သည့် Chord ၂ ခုမဆို (ဥပမာ C မှ Bb သို့မဟုတ် Am မှ Gm) ကြားတွင် Semitone (၁ Fret) ခြားသော Passing Chord (B သို့မဟုတ် G#m) ကို ၁ ချက် စည်းချက်ဖြင့် ဖြတ်ကူး သုံးစွဲနိုင်သည်။',
      'Rests in Music: Whole Rest (4 beats), Half Rest (2 beats), Quarter Rest (1 beat), Eighth Rest (1/2 beat), 16th Rest (1/4 beat)။ Rests ရှိစဉ်တွင်လည်း စည်းဝါး မရပ်တန့်ရပါ။'
    ],
    chords: ['F7_barre'],
    rhythms: [
      {
        id: 'r_blues_in_f_passing',
        name: 'Blues in F Passing Pattern (Exercise 57)',
        timeSignature: '4/4',
        descriptionEn: 'V^ (1+) X^ (2+) V (3) V (4)',
        descriptionMy: 'Blues in F အတွက် Passing chord ပါဝင်သော ရစ်သမ်',
        spokenCount: '1-and, 2-and, 3, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'percussive-down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_57_blues_f',
        title: 'Exercise 57 - 12 Bar Blues in F with Passing Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၅၇ - Passing Chords ပါဝင်သော ၁၂ Bar Blues in F',
        exerciseNumber: 57,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'F', bars: 1 },
          { chordName: 'Bb', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'F7', bars: 1 },
          { chordName: 'Bb', bars: 1 },
          { chordName: 'Bb7', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'F7', bars: 1 },
          { chordName: 'C', bars: 1, subChords: [{ chordName: 'C', beats: 3 }, { chordName: 'B', beats: 1 }] }, // Passing chord B on beat 4
          { chordName: 'Bb', bars: 1, subChords: [{ chordName: 'Bb', beats: 2 }, { chordName: 'Bb7', beats: 2 }] },
          { chordName: 'F', bars: 1, subChords: [{ chordName: 'F', beats: 2 }, { chordName: 'F7', beats: 2 }] },
          { chordName: 'C', bars: 1, subChords: [{ chordName: 'C', beats: 2 }, { chordName: 'C7', beats: 2 }] }
        ],
        notesMy: 'Bar 9 တွင် C chord တီးပြီး Beat 4 ၌ B chord (1 fret အောက်) သို့ ဆင်းကာ Bar 10 ရှိ Bb သို့ ချောမွေ့စွာ ဖြတ်ကူးပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Chromatic Passing Chord Principle',
        nameMy: 'Chromatic ကြားခံဖြတ်ကူး Chord နည်းစနစ်',
        explanationMy: 'တစ်သံ (2 frets) ကွာသော Chord နှစ်ခုအကြား 1 fret အကွာအဝေးရှိသော Chord ဖြင့် တစ်ချက် ဖြတ်ကူးတီးခတ်ခြင်းဖြင့် Jazz & Blues ဆန်သော ချိတ်ဆက်မှု ဖြစ်ပေါ်စေသည်။',
        proTipMy: 'Passing chord ကို Beat 4 တွင်သာ တိုတိုတုတ်တုတ် ၁ ချက် ခတ်ရပါမည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Passing Chord တီးရာတွင် စည်းချက် နောက်ကျသွားခြင်း',
        fixMy: 'လက်ကွက်ပုံစံ မပြောင်းဘဲ Fret ၁ ကွက်သာ အလျင်အမြန် လျှောရွှေ့ပြီး မူလ Bar သို့ အချိန်မီ ပြန်ရောက်အောင် လေ့ကျင့်ပါ။'
      }
    ]
  },
  {
    id: 28,
    section: 2,
    title: 'Right Hand Deadening Technique & Eighth Note Rests',
    titleMy: 'အခန်း ၂၈ - လက်ယာလက် Palm Deadening နည်းစနစ်နှင့် Eighth Note Rests',
    subtitle: 'လက်ဝါးစောင်းဖြင့် အသံရပ်တန့်စေခြင်း (Palm Mute / Choke) နှင့် စည်းဝါးနားချိန်',
    overviewMy: 'လက်ဝဲလက်ဖိအား မလွှတ်ဘဲ လက်ယာဘက် လက်ဝါးစောင်းဖြင့် ကြိုးများကို အုပ်၍ အသံဖျောက်သော Right Hand Deadening နည်းစနစ်နှင့် Eighth Note Rests ကို သင်ယူမည်။',
    keyPointsMy: [
      'Right Hand Deadening: Strum ခတ်ပြီးနောက် ချက်ချင်း လက်ယာလက်ဝါး၏ ဘေးသားဖြင့် ကြိုးများကို အုပ်ကာ အသံကို ရုတ်တရက် တိတ်ဆိတ်သွားစေခြင်း ဖြစ်သည်။',
      'Open Chords နှင့် Bar Chords နှစ်မျိုးစလုံးတွင် အလွန်အသုံးဝင်သည်။',
      'Eighth Note Rest (7 သင်္ကေတ): Beat ၏ ထက်ဝက် (Half a count) တိတ်ဆိတ်ရမည်။',
      'ဥပမာ | V^ V^ .^ V^ | တွင် Beat 3 ၌ Right Hand Deadening ဖြင့် အသံတိတ် နားချိန် ဖန်တီးသည်။'
    ],
    chords: ['A', 'D', 'A7', 'D7', 'E7', 'C', 'Em', 'Dm', 'G7'],
    rhythms: [
      {
        id: 'r_rh_deadening_basic',
        name: 'Right Hand Deadening on 2 & 3 (Exercise 58)',
        timeSignature: '4/4',
        descriptionEn: 'V (1), Rest (2, 3 deadened by RH palm), V (4)',
        descriptionMy: 'Beat 1 တွင် Strum, Beat 2-3 တွင် လက်ယာလက်ဝါးဖြင့် အသံတိတ်, Beat 4 တွင် Strum',
        spokenCount: '1, MUTE(2), MUTE(3), 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'rest', deadened: true },
          { count: '3', type: 'rest', deadened: true },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      },
      {
        id: 'r_eighth_rest_rh',
        name: 'Eighth Note Rest Strum (Exercise 63)',
        timeSignature: '4/4',
        descriptionEn: 'V^ (1+) V^ (2+) Rest^ (3+) V^ (4+)',
        descriptionMy: 'Beat 3 တွင် Eighth Rest ထည့်သွင်းထားသော ရစ်သမ်',
        spokenCount: '1+ 2+ Rest+ 4+',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'rest', deadened: true },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_59',
        title: 'Exercise 59 - Open Chords with Right Hand Deadening',
        titleMy: 'လေ့ကျင့်ခန်း ၅၉ - Open Chords တွင် လက်ယာလက် Deadening ကျင့်ခြင်း',
        exerciseNumber: 59,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'A', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'A7', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'D7', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'A7', bars: 1 }
        ],
        notesMy: 'Beat 1 ခတ်ပြီးနောက် Beat 2 တွင် လက်ယာလက်ဝါးဖြင့် ကြိုးများကို ချက်ချင်း အုပ်လိုက်ပါ။'
      },
      {
        id: 'ex_64',
        title: 'Exercise 64 - Turnaround in C with Eighth Note Rests',
        titleMy: 'လေ့ကျင့်ခန်း ၆၄ - Eighth Note Rest ပါဝင်သော Turnaround in C',
        exerciseNumber: 64,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'Dm', bars: 1 },
          { chordName: 'G7', bars: 1 }
        ],
        notesMy: 'Beat 3 ၏ စတင်ချိန်တွင် လက်ဝါးဖြင့် တိကျစွာ အသံတိတ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Right Hand Palm Cut / Deadening',
        nameMy: 'လက်ယာလက်ဝါးဖြင့် အသံဖြတ်နည်း (Palm Cut)',
        explanationMy: 'Strum ခတ်ပြီးသည်နှင့် လက်ယာလက်ဝါး၏ ဘေးသား (Pinky side fleshy part) ကို ကြိုးများပေါ်သို့ ချက်ချင်း ဖိချလိုက်ခြင်းဖြင့် အသံကို ဖြတ်တောက်သည်။',
        proTipMy: 'ဂစ်တာတီးခတ်ရာတွင် တိတ်ဆိတ်ခြင်း (Silence/Rests) သည်လည်း အသံသဖွယ် အလွန်အရေးပါသော အစိတ်အပိုင်းဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'လက်ဝါးဖြင့် အုပ်သော်လည်း အသံ ဆက်မြည်နေခြင်း',
        fixMy: 'ကြိုး ၆ ချောင်းစလုံးကို လက်ဝါးစောင်း အသားအပြည့်ဖြင့် ထိမိအောင် ဖုံးအုပ်ပေးပါ။'
      }
    ]
  },
  {
    id: 29,
    section: 2,
    title: 'Staccato Strumming (V with Dot)',
    titleMy: 'အခန်း ၂၉ - Staccato Strumming (ပြတ်တောင်းပြတ်တောင်း ခတ်နည်း)',
    subtitle: 'အသံကို တိုတိုနှင့် ပြတ်ပြတ်သားသား ဖြတ်တောက်သော Staccato နည်းစနစ်',
    overviewMy: 'Wedge Mark အပေါ်တွင် အစက် (.) ပြထားသော Staccato Strumming (ခတ်ပြီးသည်နှင့် ချက်ချင်း အသံဖြတ်နည်း) နှင့် Wrist Flick နည်းစနစ်ကို သင်ယူမည်။',
    keyPointsMy: [
      'Staccato ဆိုသည်မှာ အသံကို ရှည်ရှည်မဆွဲဘဲ တိုတိုနှင့် ပြတ်ပြတ်သားသား ဖြတ်တောက်ပစ်ခြင်း ဖြစ်သည်။',
      'Staccato Strum သင်္ကေတ: Wedge Mark အပေါ်တွင် အစက်ပါရှိသည် (V with dot)။',
      'ခတ်လိုက်သည်နှင့် နောက် Beat မစမီ စက္ကန့်ပိုင်းအတွင်း လက်ယာလက်ဝါးဖြင့် ချက်ချင်း ပြန်အုပ်ရသည်။',
      'လက်ကောက်ဝတ်ကို လျင်မြန်စွာ ခတ်ခါ (Rapid wrist flick) ပြုလုပ်ရသည်။'
    ],
    chords: ['Gmaj7', 'Cmaj7', 'F_barre', 'Bb_barre'],
    rhythms: [
      {
        id: 'r_staccato_4',
        name: '4 Staccato Down Strums (Exercise 65)',
        timeSignature: '4/4',
        descriptionEn: 'Short detached strums with immediate palm mute',
        descriptionMy: 'ခတ်ပြီးသည်နှင့် ချက်ချင်း လက်ဝါးဖြင့် အုပ်သော Staccato ၄ ချက်',
        spokenCount: '1(chop), 2(chop), 3(chop), 4(chop)',
        beats: [
          { count: '1', type: 'staccato-down', accent: true },
          { count: '2', type: 'staccato-down' },
          { count: '3', type: 'staccato-down' },
          { count: '4', type: 'staccato-down' }
        ],
        defaultBpm: 85
      },
      {
        id: 'r_staccato_16th_combo',
        name: 'Staccato & 16th Combo (Exercise 66)',
        timeSignature: '4/4',
        descriptionEn: 'Staccato on 1, 3, 4 with 16th burst on 2',
        descriptionMy: 'Beat 1, 3, 4 တွင် Staccato ခတ်ပြီး Beat 2 တွင် 16th note ခတ်သော Funk စတိုင်',
        spokenCount: '1(staccato), 2-e-+-a, 3(staccato), 4(staccato)',
        beats: [
          { count: '1', type: 'staccato-down', accent: true },
          { count: '2', type: 'down', sixteenth: true },
          { count: 'e', type: 'up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true },
          { count: '3', type: 'staccato-down', accent: true },
          { count: '4', type: 'staccato-down', accent: true }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_67',
        title: 'Exercise 67 - Staccato Progression (Gmaj7 - Cmaj7)',
        titleMy: 'လေ့ကျင့်ခန်း ၆၇ - Staccato Gmaj7 - Cmaj7 သံစဉ်တွဲ',
        exerciseNumber: 67,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'Gmaj7', bars: 1 },
          { chordName: 'Cmaj7', bars: 1 },
          { chordName: 'Gmaj7', bars: 1 },
          { chordName: 'Cmaj7', bars: 1 }
        ],
        notesMy: 'ခတ်ပြီးသည်နှင့် တစ်ပြိုင်နက် လက်ယာလက်ဝါးဖြင့် အသံကို ဖြတ်တောက်ပါ။'
      },
      {
        id: 'ex_68',
        title: 'Exercise 68 - Staccato Bar Progression (F - Ab - Bb - Db)',
        titleMy: 'လေ့ကျင့်ခန်း ၆၈ - Bar Chords ဖြင့် Staccato လေ့ကျင့်ခန်း',
        exerciseNumber: 68,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'F', bars: 1 },
          { chordName: 'Ab (4th Fret)', bars: 1 },
          { chordName: 'Bb (6th Fret)', bars: 1 },
          { chordName: 'Db (9th Fret)', bars: 1 }
        ],
        notesMy: 'Bar Chords တွင် လက်ဝဲလက် ဖိအားလျှော့ခြင်းနှင့် လက်ယာလက်ဝါးအုပ်ခြင်း နှစ်မျိုးစလုံး တွဲဖက်သုံးနိုင်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Rapid Wrist Flick Staccato',
        nameMy: 'လက်ကောက်ဝတ် အမြန်ခတ်ခါ Staccato နည်းစနစ်',
        explanationMy: 'ပစ်ခ်ဖြင့် ခတ်လိုက်သည်နှင့် လက်ကောက်ဝတ်ကို လျင်မြန်စွာ ပြန်သိမ်း၍ လက်ဝါးစောင်းဖြင့် ကြိုးများကို ချက်ချင်း ဖိပိတ်လိုက်ခြင်း ဖြစ်သည်။',
        proTipMy: 'Funk, Disco နှင့် Modern Pop တွင် အလွန်ခေတ်စားသော တီးခတ်ဟန်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Staccato ခတ်ရာတွင် အသံ မပြတ်ဘဲ ဆက်မြည်နေခြင်း',
        fixMy: 'Strum ခတ်ပြီးပြီးချင်း မဆိုင်းမတွ လက်ဝါးစောင်းကို ကြိုးပေါ် ချပေးပါ။'
      }
    ]
  },
  {
    id: 30,
    section: 2,
    title: 'Root 5 Bar Chord (A Formation)',
    titleMy: 'အခန်း ၃၀ - Root 5 Bar Chord (A ပုံစံ Barre Chords)',
    subtitle: '5th String ပေါ်တွင် Root Note ရှိသော Bb, C, D, E Bar Chords',
    overviewMy: 'ဂစ်တာလည်ပင်း အလယ်ပိုင်းတွင် အဆင်ပြေစွာ တီးခတ်နိုင်သော Root 5 (A Formation) Bar Chord ဖွဲ့စည်းပုံနှင့် Finger 3 Mini-Barre ဖမ်းနည်းကို သင်ယူမည်။',
    keyPointsMy: [
      'Root 5 Bar Chord သည် Open A Major chord ပုံစံကို 5th string Root အတိုင်း ရွှေ့ထားခြင်းဖြစ်သည်။',
      'လက်ညှိုး (Finger 1) သည် 5th string မှ 1st string အထိ Barre ဖိပြီး၊ လက်သူကြွယ် (Finger 3) သည် ကြိုး ၄၊ ၃၊ ၂ ကို Mini-barre ပြုလုပ်သည်။',
      'Fret 1 = Bb, Fret 3 = C, Fret 5 = D, Fret 7 = E, Fret 8 = F (Root Note သည် 5th string ပေါ်တွင် ရှိသည်)။',
      '12 Bar in G with Root 6 & 5: G (Root 6 Fret 3) -> C (Root 5 Fret 3) -> D (Root 5 Fret 5)။'
    ],
    chords: ['Bb_barre'],
    rhythms: [
      {
        id: 'r_root5_blues_strum',
        name: 'Root 5 & 6 Blues Strum (Exercise 71)',
        timeSignature: '4/4',
        descriptionEn: '4 solid down strums with Root 6 and Root 5',
        descriptionMy: 'Root 6 နှင့် Root 5 ကို အတူတကွ တွဲဖက်တီးခတ်သော ရစ်သမ်',
        spokenCount: '1 - 2 - 3 - 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_70_blues_g',
        title: 'Exercise 70 - 12 Bar Blues in G (Root 6 & 5 Combined)',
        titleMy: 'လေ့ကျင့်ခန်း ၇၀ - Root 6 & 5 ပေါင်းစပ်ထားသော ၁၂ Bar Blues in G',
        exerciseNumber: 70,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'G (Root 6 - 3rd Fret)', bars: 4 },
          { chordName: 'C (Root 5 - 3rd Fret)', bars: 2 },
          { chordName: 'G (Root 6 - 3rd Fret)', bars: 2 },
          { chordName: 'D (Root 5 - 5th Fret)', bars: 1 },
          { chordName: 'C (Root 5 - 3rd Fret)', bars: 1 },
          { chordName: 'G (Root 6 - 3rd Fret)', bars: 1 },
          { chordName: 'D (Root 5 - 5th Fret)', bars: 1 }
        ],
        notesMy: 'G (Fret 3) မှ C သို့ ပြောင်းရာတွင် Fretboard တစ်လျှောက် ဝေးဝေး မသွားရဘဲ Fret 3 တူတူတွင်ပင် 5th string သို့ အလွယ်တကူ ကူးနိုင်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Ring Finger Joint Flexibility (Root 5 Barre)',
        nameMy: 'Finger 3 အဆစ်ခေါက် Mini-Barre ဖိနည်း',
        explanationMy: 'Finger 3 ဖြင့် ကြိုး ၄၊ ၃၊ ၂ ကို ဖိရာတွင် ၎င်း၏ နောက်ဆုံးအဆစ်ကို အနည်းငယ် ကော့ပေးထားပါက 1st string ကို မဖိမိဘဲ ရှင်းလင်းစွာ အသံထွက်စေသည်။',
        proTipMy: '1st string မမြည်သော်လည်း ကျန်ကြိုး ၅ ချောင်း အသံကြည်လင်နေပါက အဆင်ပြေပါသည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Finger 3 ဖြင့် ကြိုး ၃ ချောင်းလုံး ဖိရခက်ခဲခြင်း',
        fixMy: 'စတင်လေ့ကျင့်စဉ်တွင် လက်ချောင်း ၃ ချောင်း (Finger 2, 3, 4) ဖြင့်လည်း ဖိနိုင်သော်လည်း နောင်တွင် လျင်မြန်စေရန် Finger 3 တစ်ချောင်းတည်းဖြင့် Barre ကျင့်ထားပါ။'
      }
    ]
  },
  {
    id: 31,
    section: 2,
    title: '12 Bar Blues Patterns (Pattern 1 & Pattern 2) & Transposition',
    titleMy: 'အခန်း ၃၁ - ၁၂ Bar Blues ပုံသေ Pattern များ (Pattern 1 & 2) နှင့် Key ပြောင်းခြင်း',
    subtitle: 'Fretboard တစ်လျှောက် မည်သည့် Key မဆို ၁၂ Bar Blues တီးနိုင်သော ပုံသေကားချပ်များ',
    overviewMy: 'ဂစ်တာလည်ပင်းပေါ်တွင် မည်သည့် Key မဆို (Transposition) အလွယ်တကူ တီးနိုင်စေမည့် ၁၂ Bar Blues Pattern 1 (All Root 6) နှင့် Pattern 2 (Root 6 + Root 5) ကို သင်ယူမည်။',
    keyPointsMy: [
      '၁၂ Bar Blues တွင် အမြဲတမ်း I, IV, V (Root, 4th, 5th) Chords သုံးမျိုးကို သုံးသည်။',
      'Blues Pattern 1 (All Root 6): I = မူလ Fret, IV = ၅ Frets အပေါ်သို့, V = ၇ Frets အပေါ်သို့ (E, F, Gb, G, Ab, A Key များအတွက် အဆင်ပြေသည်)။',
      'Blues Pattern 2 (Root 6 + Root 5): I = Root 6 မူလ Fret, IV = Root 5 Fret တူတူ, V = Root 5 ၂ Frets အပေါ် (F မှ C Key များအတွက် အထူးအဆင်ပြေသည်)။',
      'Transposition (Key ပြောင်းခြင်း): ဤ Pattern များကို သုံးခြင်းဖြင့် Chord နာမည် အသစ်ကျက်စရာမလိုဘဲ မည်သည့် Key မဆို ချက်ချင်း တီးခတ်နိုင်သည်။'
    ],
    chords: ['F_barre', 'Bb_barre'],
    rhythms: [
      {
        id: 'r_transposition_rock',
        name: 'Transposition Blues Pattern Strum',
        timeSignature: '4/4',
        descriptionEn: 'Rock blues shuffle on movable shapes',
        descriptionMy: 'ရွှေ့လျား Bar Chords များအတွက် Rock Blues ရစ်သမ်',
        spokenCount: '1 - 2 - 3 - 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_pattern_1_demo',
        title: 'Blues Pattern 1 - All Root 6 (Key of A: A, D, E)',
        titleMy: 'Pattern 1 လက်တွေ့ - All Root 6 Bar Chords (Key of A: A-5th, D-10th, E-12th)',
        exerciseNumber: 52,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'A (5th Fret)', bars: 4 },
          { chordName: 'D (10th Fret)', bars: 2 },
          { chordName: 'A (5th Fret)', bars: 2 },
          { chordName: 'E (12th Fret)', bars: 1 },
          { chordName: 'D (10th Fret)', bars: 1 },
          { chordName: 'A (5th Fret)', bars: 1 },
          { chordName: 'E (12th Fret)', bars: 1 }
        ],
        notesMy: 'Rolling Stones, Led Zeppelin တို့၏ ဂန္ထဝင် Rock Blues နည်းစနစ်ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Geometric Fretboard Navigation',
        nameMy: 'Fretboard ပုံသေတည်နေရာ ချိတ်ဆက်နည်း',
        explanationMy: 'Root 6 နေရာတွင် I Chord ရှိပါက ၎င်း၏ မျဉ်းတည့်တည့် အောက်ရှိ Root 5 ကြိုးသည် IV Chord ဖြစ်ပြီး၊ ၂ Fret တက်ပါက V Chord ဖြစ်သည်။',
        proTipMy: 'ဤ Geometric ပုံစံကို မှတ်သားထားပါက မည်သည့် သီချင်းကိုမဆို ချက်ချင်း Key ပြောင်း တီးနိုင်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'High Frets (10th, 12th) တွင် Bar ဖမ်းရ ခက်ခဲခြင်း',
        fixMy: 'ထိုအခါ Pattern 2 (Root 5 သုံးခြင်း) သို့ ပြောင်းလဲတီးခတ်ပါက လက်ချောင်း လှုပ်ရှားမှု သက်သာစေမည်။'
      }
    ]
  },
  {
    id: 32,
    section: 2,
    title: 'Dampening Technique (Palm Muting / "D" Symbol)',
    titleMy: 'အခန်း ၃၂ - Dampening Technique (Palm Mute / "D" သင်္ကေတ)',
    subtitle: 'Bridge အနားတွင် လက်ယာလက်ဝါးဖြင့် ကပ်၍ Heavy Rock "Chug" အသံ ထုတ်လုပ်နည်း',
    overviewMy: 'Rock, Metal နှင့် Pop တွင် အသုံးအများဆုံးဖြစ်သော Dampening Technique (Bridge အနီး လက်ဝါးစောင်း ကပ်၍ အသံဖိတီးနည်း - "D" Mark) ကို သင်ယူမည်။',
    keyPointsMy: [
      'Dampening Technique: လက်ယာလက်ဝါးစောင်းကို Bridge သံတံတား၏ အစွန်းနားတွင် အသာတင်ထားပြီး ခတ်ပါက "Chug-chug" ဟူသော လေးနက်ခိုင်မာသည့် Rock အသံ ထွက်ပေါ်သည်။',
      'Notation တွင် Wedge Mark အပေါ်၌ "D" သင်္ကေတဖြင့် ပြသသည်။',
      'Root 6 Bar Chords တွင် ကြိုး ၆ နှင့် ၅၊ Root 5 Bar Chords တွင် ကြိုး ၅ နှင့် ၄ (Bass ကြိုး ၂ ချောင်း) ကိုသာ ဦးစားပေး ခတ်လေ့ရှိသည်။'
    ],
    chords: ['F_barre', 'G', 'E'],
    rhythms: [
      {
        id: 'r_dampening_chug',
        name: 'Dampened Rock Chug (Exercise 69)',
        timeSignature: '4/4',
        descriptionEn: 'DD DD DD DD | VV VV VV VV (8 dampened strums)',
        descriptionMy: 'တစ် Bar လျှင် ၈ ချက် Palm Dampened Chug ဖြင့် ခတ်ခြင်း',
        spokenCount: '1& 2& 3& 4& (Chug-chug-chug-chug)',
        beats: [
          { count: '1', type: 'dampened-down', accent: true },
          { count: '&', type: 'dampened-down' },
          { count: '2', type: 'dampened-down' },
          { count: '&', type: 'dampened-down' },
          { count: '3', type: 'dampened-down' },
          { count: '&', type: 'dampened-down' },
          { count: '4', type: 'dampened-down' },
          { count: '&', type: 'dampened-down' }
        ],
        defaultBpm: 95
      }
    ],
    exercises: [
      {
        id: 'ex_69',
        title: 'Exercise 69 - G Bar Chord Dampening Practice',
        titleMy: 'လေ့ကျင့်ခန်း ၆၉ - G Bar Chord ပေါ်တွင် Dampening ကျင့်ခြင်း',
        exerciseNumber: 69,
        timeSignature: '4/4',
        recommendedBpm: 95,
        chords: [
          { chordName: 'G (3rd Fret)', bars: 4 }
        ],
        notesMy: 'ကြိုး ၆ နှင့် ၅ ပေါ်တွင်သာ ပစ်ခ်ဖြင့် ခတ်ပြီး အသံ အလွန်အမင်း မသေစေဘဲ Chug သံ ထွက်အောင် ချိန်ညှိပါ။'
      },
      {
        id: 'ex_70_dampened_prog',
        title: 'Exercise 70 - Heavy Rock Dampened Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၇၀ - E -> F# -> G -> B -> C Dampened သံစဉ်တွဲ',
        exerciseNumber: 70,
        timeSignature: '4/4',
        recommendedBpm: 95,
        chords: [
          { chordName: 'E (Open)', bars: 1 },
          { chordName: 'G (3rd Fret)', bars: 1 },
          { chordName: 'C (3rd Fret)', bars: 2 }
        ],
        notesMy: 'Beat 4 ၏ "&" တွင် F# နှင့် B ကို Passing chords အဖြစ် ၁ ချက်စီ အမြန် ထည့်ခတ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Palm Placement for Dampening',
        nameMy: 'Dampening အတွက် လက်ဝါး တင်ထားရမည့်နေရာ',
        explanationMy: 'လက်ဝါးကို Bridge သံတံတားနှင့် ကပ်လွန်းပါက အသံမငြိမ်ဘဲ၊ လည်ပင်းဘက် ရောက်လွန်းပါက အသံ လုံးဝ သေသွားမည်။ Bridge အစွန်းနှင့် ၁ မီလီမီတာ ကပ်လျက်တွင် နေရာချပါ။',
        proTipMy: 'Green Day, Metallica, AC/DC တို့၏ အဓိက သံစဉ်အရသာ ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Chug သံ မထွက်ဘဲ အသံလုံးဝ ပိတ်နေခြင်း သို့မဟုတ် ပုံမှန်အတိုင်း မြည်နေခြင်း',
        fixMy: 'လက်ဝါးကို ရှေ့တိုး/နောက်ဆုတ် အနည်းငယ် ရွှေ့ကြည့်ပြီး အကောင်းဆုံး Chug သံထွက်သည့် နေရာ (Sweet spot) ကို ရှာဖွေပါ။'
      }
    ]
  }
];
