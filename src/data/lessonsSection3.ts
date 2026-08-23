import { LessonData } from '../types';

export const SECTION_3_LESSONS: LessonData[] = [
  {
    id: 45,
    section: 3,
    title: 'C Formation Bar Chords',
    titleMy: 'အခန်း ၄၅ - C Formation Bar Chords (C ပုံစံ Barre Chords)',
    subtitle: 'Open C Chord ပုံစံကို Fretboard တစ်လျှောက် ရွှေ့တီးနည်း',
    overviewMy: 'Root 6 (E shape) နှင့် Root 5 (A shape) အပြင် Fretboard ပေါ်တွင် အလွန်နားဝင်ချိုသော C Formation Bar Chord (Db, E, G, A) ဖွဲ့စည်းပုံကို သင်ယူမည်။',
    keyPointsMy: [
      'C Formation Bar Chord: Open C chord ပုံစံကို Finger 2, 3, 4 ဖြင့် ဖမ်းပြီး လက်ညှိုး (Finger 1) ဖြင့် Barre ပိတ်ဖိကာ Fretboard ပေါ် ရွှေ့ထားခြင်း ဖြစ်သည်။',
      'Root Note သည် 5th string နှင့် 2nd string ပေါ်တွင် တည်ရှိသည်။',
      'Fret 1 = Db, Fret 4 = E, Fret 7 = G, Fret 9 = A။',
      'Major မှ Relative Minor သို့ ကူးပြောင်းရာတွင် အလွန်လှပသော သံစဉ်တွဲကို ဖန်တီးပေးသည်။'
    ],
    chords: ['Db_c_formation', 'Bbm_barre', 'F_barre'],
    rhythms: [
      {
        id: 'r_c_formation_waltz',
        name: 'C-Formation Triplet Strum (Exercise 103)',
        timeSignature: '4/4',
        descriptionEn: 'VVV VVV (1+a 2+a)',
        descriptionMy: 'C-Formation အတွက် Triplet ခတ်ကွက်',
        spokenCount: '1-and-a, 2-and-a',
        beats: [
          { count: '1', type: 'down', accent: true, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '2', type: 'down', accent: true, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true }
        ],
        defaultBpm: 75
      }
    ],
    exercises: [
      {
        id: 'ex_103',
        title: 'Exercise 103 - C-Formation Bar Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၁၀၃ - C-Formation, A-Formation, E-Formation ပေါင်းစပ်လေ့ကျင့်ခန်း',
        exerciseNumber: 103,
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'Db (C-form - 1st)', bars: 1 },
          { chordName: 'Bbm (A-form - 1st)', bars: 1 },
          { chordName: 'Gb (E-form - 2nd)', bars: 1 },
          { chordName: 'Ab (E-form - 4th)', bars: 1 },
          { chordName: 'E (C-form - 4th)', bars: 1 },
          { chordName: 'C#m (A-form - 4th)', bars: 1 },
          { chordName: 'A (E-form - 5th)', bars: 1 },
          { chordName: 'B (E-form - 7th)', bars: 1 }
        ],
        notesMy: 'The Rolling Stones, Hendrix စတိုင် သံစဉ်ဖွဲ့စည်းမှု ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'C-Shape Barre Hand Arching',
        nameMy: 'C-Shape Barre လက်ဖဝါး ခုံးဖိနည်း',
        explanationMy: 'Finger 4 ကို 5th string၊ Finger 3 ကို 4th string၊ Finger 2 ကို 2nd string တွင် ဖိပြီး Finger 1 ဖြင့် 3rd နှင့် 1st string များကို Barre ဖိရမည်။',
        proTipMy: 'CAGED စနစ်၏ အဓိက အစိတ်အပိုင်းတစ်ခု ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Finger 4 (လက်သန်း) နှင့် Finger 3 ဖိအား မညီခြင်း',
        fixMy: 'လက်ကောက်ဝတ်ကို လည်ပင်းအောက်သို့ အနည်းငယ် ဆွဲထုတ်ပြီး လက်ချောင်းထိပ်များဖြင့် တည့်တည့်ဖိပါ။'
      }
    ]
  },
  {
    id: 46,
    section: 3,
    title: 'Suspended Bar Chords (Fsus, Bbsus, 7sus)',
    titleMy: 'အခန်း ၄၆ - Suspended Bar Chords (Fsus, Bbsus, 7sus)',
    subtitle: 'Root 6 & Root 5 Barre ပေါ်တွင် 1 - 4 - 5 Suspended Chords ဖမ်းနည်း',
    overviewMy: 'Barre Chords ပေါ်တွင် တင်းအားနှင့် ဖြေလျှော့မှု ပြုလုပ်နိုင်သော Fsus (Root 6), Bbsus (Root 5) နှင့် 7sus (1-4-5-b7) Chords များကို သင်ယူမည်။',
    keyPointsMy: [
      'Root 6 Suspended (Fsus): Root 6 Barre တွင် Finger 2 အစား Finger 3 & 4 ဖြင့် ကြိုး ၅ နှင့် ၃ ကို ဖိပြီး ကြိုး ၄ ကို Mute ထားသည်။ Formula: 1 - 4 - 5။',
      'Root 5 Suspended (Bbsus): Root 5 Barre ပေါ်တွင် လက်သန်း (Finger 4) ဖြင့် 2nd string Fret 4 (4th note) ကို ဖိသည်။',
      '7sus Chord Formula: 1 - 4 - 5 - b7 (အလွန် ခေတ်မီပြီး Pop/Rock တွင် အထူးနာမည်ကြီးသည်)။',
      'Continuous Strumming တွင် Chord အပြောင်းသည် Beat 4 ၏ အတက်ခတ်ချက် (+) ၌ ကြိုတင်ဖြစ်ပေါ်သည်။'
    ],
    chords: ['F_barre', 'Bb_barre', 'Asus', 'Dsus'],
    rhythms: [
      {
        id: 'r_sus_barre_rhythm',
        name: 'Suspended Bar Syncopation (Exercise 104)',
        timeSignature: '4/4',
        descriptionEn: 'Continuous down/up with anticipation on 4+',
        descriptionMy: 'Beat 4+ တွင် Chord အပြောင်းစောသော Suspended ခတ်ကွက်',
        spokenCount: '1+ 2+ 3+ 4+(change)',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' },
          { count: '+', type: 'up', accent: true }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_104',
        title: 'Exercise 104 - Suspended Bar Chords Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၁၀၄ - A-Asus, D-Dsus, G-Gsus, C-Csus, F-Fsus, Bb-Bbsus သံစဉ်တွဲ',
        exerciseNumber: 104,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'A (Root 6)', bars: 1, subChords: [{ chordName: 'A', beats: 2 }, { chordName: 'Asus', beats: 2 }] },
          { chordName: 'D (Root 5)', bars: 1, subChords: [{ chordName: 'D', beats: 2 }, { chordName: 'Dsus', beats: 2 }] },
          { chordName: 'G (Root 6)', bars: 1, subChords: [{ chordName: 'G', beats: 2 }, { chordName: 'Gsus', beats: 2 }] },
          { chordName: 'C (Root 5)', bars: 1, subChords: [{ chordName: 'C', beats: 2 }, { chordName: 'Csus', beats: 2 }] },
          { chordName: 'F (Root 6)', bars: 1, subChords: [{ chordName: 'F', beats: 2 }, { chordName: 'Fsus', beats: 2 }] },
          { chordName: 'Bb (Root 5)', bars: 1, subChords: [{ chordName: 'Bb', beats: 2 }, { chordName: 'Bbsus', beats: 2 }] },
          { chordName: 'F (Root 6)', bars: 1 }
        ],
        notesMy: 'Circle of Fourths အစီအစဉ်အတိုင်း Sus မှ Major သို့ ဆက်တိုက် ဖြေလျှော့တီးခတ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Suspended to Major Resolution',
        nameMy: 'Sus မှ Major သို့ ကူးပြောင်း ဖြေလျှော့ခြင်း',
        explanationMy: 'Sus4 ဖြင့် ဆိုင်းငံ့တင်းအား ဖန်တီးပြီး Major သို့ ပြန်ဆင်းချိန်တွင် လက်သန်းကို လွှတ်လိုက်ရုံဖြင့် အလွန်ချောမွေ့သော သံစဉ်အရသာကို ရရှိသည်။',
        proTipMy: 'Acoustic Guitar Strumming တွင် အလှဆင်ရန် အကောင်းဆုံး နည်းစနစ်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Fsus တွင် 4th string အသံ သေနေခြင်း',
        fixMy: '4th string သည် Finger 3 ၏ ကိုယ်ထည်ဖြင့် Mute လုပ်ထားသောကြောင့် အသံမထွက်ခြင်း ဖြစ်သည်။ ကြိုး ၆၊ ၅၊ ၃၊ ၂၊ ၁ အသံများ ကြည်လင်နေလျှင် မှန်ကန်ပါသည်။'
      }
    ]
  },
  {
    id: 47,
    section: 3,
    title: 'Major 7th Bar Chords (Root 6 & 5) & Circle of Fourths',
    titleMy: 'အခန်း ၄၇ - Major 7th Bar Chords နှင့် စတုတ္ထအဆင့် စက်ဝိုင်း (Circle of Fourths)',
    subtitle: 'Fmaj7, Bbmaj7 Barre ပုံစံများနှင့် Cmaj7 -> Fmaj7 -> Bbmaj7 -> Ebmaj7 သံစဉ်တွဲ',
    overviewMy: 'Jazz & Bossa Nova တွင် မရှိမဖြစ် Root 6 Fmaj7 (1-3-5-7), Root 5 Bbmaj7 Bar Chords နှင့် 4 အဆင့်စီ တက်သွားသော Circle of Fourths သံစဉ်တွဲကို သင်ယူမည်။',
    keyPointsMy: [
      'Major 7th Formula: I - III - V - VII (1st, 3rd, 5th, 7th)။ ဥပမာ Fmaj7 = F - A - C - E။',
      'Root 6 Fmaj7: လက်ညှိုး (Finger 1) ကို ကွေးထားပြီး ကြိုး ၆ ကို ဖိကာ ကြိုး ၅ နှင့် ၁ ကို အသံတိတ် (Deadened X) ထားသည်။ ကြိုး ၄ (Finger 3), ကြိုး ၃ (Finger 4), ကြိုး ၂ (Finger 2)။',
      'Root 5 Bbmaj7: Open Amaj7 ပုံစံကို 5th string Root အတိုင်း Barre ဖိရွှေ့ထားခြင်း ဖြစ်သည်။',
      'Circle of Fourths Progression: Cmaj7 -> Fmaj7 -> Bbmaj7 -> Ebmaj7 -> Abmaj7 -> Dbmaj7 -> Gbmaj7 -> Cbmaj7 (Bmaj7)။'
    ],
    chords: ['Cmaj7', 'Fmaj7', 'Amaj7', 'Dmaj7', 'Gmaj7'],
    rhythms: [
      {
        id: 'r_maj7_circle_strum',
        name: 'Circle of Fourths Maj7 Strum (Exercise 106)',
        timeSignature: '4/4',
        descriptionEn: 'V^ (1+) V^ (2+) V (3) XX (4+)',
        descriptionMy: 'Major 7th အဆင့်ဆင့်အတွက် အလွန်လှပသော ရစ်သမ်',
        spokenCount: '1-and, 2-and, 3, CHUK-CHUK',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '4', type: 'percussive-down' },
          { count: '+', type: 'percussive-up' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_106',
        title: 'Exercise 106 - Circle of Fourths Major 7th Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၁၀၆ - စတုတ္ထအဆင့် စက်ဝိုင်း Maj7 သံစဉ်တွဲ',
        exerciseNumber: 106,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'Cmaj7 (Root 6 - 8th)', bars: 1 },
          { chordName: 'Fmaj7 (Root 5 - 8th)', bars: 1 },
          { chordName: 'Bbmaj7 (Root 6 - 6th)', bars: 1 },
          { chordName: 'Ebmaj7 (Root 5 - 6th)', bars: 1 },
          { chordName: 'Abmaj7 (Root 6 - 4th)', bars: 1 },
          { chordName: 'Dbmaj7 (Root 5 - 4th)', bars: 1 },
          { chordName: 'Gbmaj7 (Root 6 - 2nd)', bars: 1 },
          { chordName: 'Cbmaj7 / Bmaj7 (Root 5 - 2nd)', bars: 1 },
          { chordName: 'Gbmaj7 (Root 6 - 2nd)', bars: 1 }
        ],
        notesMy: 'Root 6 မှ Root 5 သို့ Fret တူတူတွင်ပင် 4th အဆင့် တက်သွားပုံကို တွေ့မြင်နိုင်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Curved Finger 1 Deadening for Root 6 Maj7',
        nameMy: 'လက်ညှိုးကွေး၍ 5th & 1st ကြိုး သံဖျောက်နည်း',
        explanationMy: 'Root 6 Maj7 တွင် လက်ညှိုးကို ဖြောင့်တန်းမထားဘဲ အနည်းငယ် ကွေးထားခြင်းဖြင့် ကြိုး ၆ ကို ဖိမိစေပြီး ကြိုး ၅ နှင့် ၁ ကို အသာထိကာ အသံတိတ်စေသည်။',
        proTipMy: 'Jazz ဂစ်တာသမားများ အမြဲတမ်း အသုံးပြုသော Grip နည်းစနစ်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Root 6 Maj7 တွင် 1st string သို့မဟုတ် 5th string မတော်တဆ မြည်နေခြင်း',
        fixMy: 'လက်ညှိုးကွေးထားသော အသားဖြင့် ကြိုး ၅ နှင့် ၁ အား သေချာ ထိထားပေးပါ။'
      }
    ]
  },
  {
    id: 48,
    section: 3,
    title: 'Off-Beat Rhythms & Bossa Nova',
    titleMy: 'အခန်း ၄၈ - Off-Beat Rhythms နှင့် Bossa Nova (လက်တင်စတိုင်)',
    subtitle: 'On-beat တွင် အသံတိတ်ပြီး Off-beat (+) တွင် ခတ်သော Bossa Nova နည်းစနစ်',
    overviewMy: 'Beat အကျ (1, 2, 3, 4) တွင် အသံတိတ်နားပြီး အတက်လိုင်း (+) တွင် ခတ်သော Off-Beat Rhythms နှင့် Latin Bossa Nova စည်းချက်ကို သင်ယူမည်။',
    keyPointsMy: [
      'Off-Beat Rhythms: Beat အကျတွင် Right Hand Deadening ဖြင့် အသံတိတ်ပြီး Beat အတက် (+) တွင်သာ Strum ခတ်သည်။',
      'ရစ်သမ်ပုံစံ (Exercise 107): | V^ .^ .^ .^ | (1+ 2+ 3+ 4+) တွင် 2, 3, 4 အကျတိုင်း နားသည်။',
      'Bossa Nova 2-Bar Rhythm (Exercise 111): Bar 1: | V .^ Rest V | Bar 2: | Rest ^ ^ Rest |။',
      'နူးညံ့ပြီး လှိုင်းစီးသဖွယ် ခံစားရစေသော Latin Jazz သံစဉ် ထွက်ပေါ်သည်။'
    ],
    chords: ['G', 'C', 'D', 'Bm', 'Am', 'Fm_barre'],
    rhythms: [
      {
        id: 'r_offbeat_basic',
        name: 'Pure Off-Beat Rhythm (Exercise 107)',
        timeSignature: '4/4',
        descriptionEn: 'Rest on 2, 3, 4 beats, Strum only on upbeats',
        descriptionMy: 'Beat အကျတွင် နားပြီး အတက်တွင်သာ ခတ်သော Off-Beat Rhythm',
        spokenCount: '1+, Rest-+, Rest-+, Rest-+',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'rest', deadened: true },
          { count: '+', type: 'up', accent: true },
          { count: '3', type: 'rest', deadened: true },
          { count: '+', type: 'up', accent: true },
          { count: '4', type: 'rest', deadened: true },
          { count: '+', type: 'up', accent: true }
        ],
        defaultBpm: 85
      },
      {
        id: 'r_bossa_nova_2bar',
        name: 'Authentic 2-Bar Bossa Nova (Exercise 111)',
        timeSignature: '4/4',
        descriptionEn: 'Bar 1: V .^ Rest V | Bar 2: Rest ^ ^ Rest',
        descriptionMy: 'ကမ္ဘာကျော် ၂ Bar Bossa Nova စည်းချက်',
        spokenCount: '1 . 2+ . 4 | . 2 3 .',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'rest', deadened: true },
          { count: '+', type: 'up', accent: true },
          { count: '3', type: 'rest', deadened: true },
          { count: '4', type: 'down', accent: true }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_108',
        title: 'Exercise 108 - Off-Beat Progression (G - Bm - Am - D)',
        titleMy: 'လေ့ကျင့်ခန်း ၁၀၈ - G -> Bm -> Am -> D Off-Beat သံစဉ်တွဲ',
        exerciseNumber: 108,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Bm', bars: 1 },
          { chordName: 'Am', bars: 1 },
          { chordName: 'D', bars: 1 }
        ],
        notesMy: 'On-beat တိုင်းတွင် လက်ယာလက်ဝါးဖြင့် အသံကို တိကျစွာ ဖြတ်တောက်ပါ။'
      },
      {
        id: 'ex_111',
        title: 'Exercise 111 - Bossa Nova Progression (Gm - Dm7)',
        titleMy: 'လေ့ကျင့်ခန်း ၁၁၁ - Gm -> Dm7 Bossa Nova သံစဉ်တွဲ',
        exerciseNumber: 111,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'Gm (Root 6 - 3rd)', bars: 1 },
          { chordName: 'Dm7 (Root 5 - 5th)', bars: 1 },
          { chordName: 'Gm (Root 6 - 3rd)', bars: 1 },
          { chordName: 'Dm7 (Root 5 - 5th)', bars: 1 }
        ],
        notesMy: 'Girl from Ipanema, Antonio Carlos Jobim စတိုင် Latin Bossa Nova ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Right Hand Off-Beat Chop',
        nameMy: 'Off-beat စည်းချက် ထိန်းချုပ်နည်း',
        explanationMy: 'ခြေထောက် ချချိန်တိုင်းတွင် လက်ဝါးဖြင့် အသံဖြတ်ပြီး ခြေထောက် အပေါ်သို့ ပြန်ကြွချိန်တွင်မှ ပစ်ခ်ဖြင့် အပေါ်သို့ ကလစ်ခတ်ခြင်း ဖြစ်သည်။',
        proTipMy: 'Ska, Reggae နှင့် Latin ဂီတများ၏ အဓိက သော့ချက်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Off-beat ခတ်ရာတွင် စည်းချက် ရှေ့နောက် လွဲချော်ခြင်း',
        fixMy: 'မက်ထရိုနုန်း (Metronome) ဖွင့်ပြီး ကလစ်သံ ကျချိန်တွင် လက်ဝါးဖြင့် ကြိုးကို အုပ်ရန် အရင်လေ့ကျင့်ပါ။'
      }
    ]
  },
  {
    id: 49,
    section: 3,
    title: 'Ninth Chords (F9, B9) & Chord Substitution (Jazz)',
    titleMy: 'အခန်း ၄၉ - Ninth Chords (F9, B9) နှင့် Jazz Chord Substitution',
    subtitle: '1 - 3 - 5 - b7 - 9 Ninth Formula နှင့် အဆင့်မြင့် Jazz အစားထိုးသီအိုရီ',
    overviewMy: 'Funk, Blues နှင့် Jazz တွင် အထူးခေတ်စားသော Ninth Chords (F9, B9) နှင့် Major/Minor/7th များကို အဆင့်မြှင့် အစားထိုးတီးခတ်သော Chord Substitution ကို သင်ယူမည်။',
    keyPointsMy: [
      'Ninth Chord Formula: I - III - V - bVII - IX (1st, 3rd, 5th, Flat 7th, 9th)။ ဥပမာ C9 = C - E - G - Bb - D, F9 = F - A - C - Eb - G။',
      'Root 5 B9: Finger 2 (ကြိုး ၅ Fret 2), Finger 1 (ကြိုး ၄ Fret 1), Finger 3 ဖြင့် ကြိုး ၃၊ ၂၊ ၁ ကို Fret 2 တွင် Half-Barre ဖိသည်။',
      'Jazz Chord Substitution Rules: Major အစား Major 7th သို့မဟုတ် Major 6th, Minor အစား Minor 7th, Dominant 7th အစား Dominant 9th ကို အစားထိုး တီးခတ်နိုင်သည်။',
      'ဥပမာ: C - E7 - Am - C7 Progression အား Cmaj7 - E9 - Am7 - C9 သို့ အဆင့်မြှင့်နိုင်သည်။'
    ],
    chords: ['B9', 'Amaj7', 'Dmaj7', 'Bb7_barre'],
    rhythms: [
      {
        id: 'r_jazz_blues_ninth',
        name: 'Jazz Blues Funk Strum (Exercise 114)',
        timeSignature: '4/4',
        descriptionEn: 'VV (1+) V(staccato 2) XX (3e+a) V^V (4e+a)',
        descriptionMy: 'Ninth chords အတွက် Funk/Jazz ခတ်ကွက်',
        spokenCount: '1+, CHOP(2), CHUK-CHUK, 4-e-+-a',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'staccato-down', accent: true },
          { count: '3', type: 'percussive-down', sixteenth: true },
          { count: 'e', type: 'percussive-up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true },
          { count: '4', type: 'down', sixteenth: true },
          { count: 'e', type: 'up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_113',
        title: 'Exercise 113 - Jazz Turnaround in A with 9th Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၁၁၃ - Amaj7, F#m7, Dmaj7, E9 Jazz Turnaround',
        exerciseNumber: 113,
        timeSignature: '6/8',
        recommendedBpm: 60,
        chords: [
          { chordName: 'Amaj7 (Root 6)', bars: 1 },
          { chordName: 'F#m7 (Root 6)', bars: 1 },
          { chordName: 'Dmaj7 (Root 5)', bars: 1 },
          { chordName: 'E9 (Root 5)', bars: 1 }
        ],
        notesMy: 'မူလ A - F#m - D - E7 အစား အဆင့်မြင့် Jazz Chords များ အစားထိုးထားခြင်း ဖြစ်သည်။'
      },
      {
        id: 'ex_114',
        title: 'Exercise 114 - Jazz Blues in Bb with 9th and 6th Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၁၁၄ - Bb7, Eb9, Bb9, Bb6, F9 Jazz Blues in Bb',
        exerciseNumber: 114,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'Bb7 (Root 6)', bars: 1 },
          { chordName: 'Eb9 (Root 5)', bars: 1 },
          { chordName: 'Bb9 (Root 6)', bars: 1 },
          { chordName: 'Bb6 (Root 6)', bars: 1, subChords: [{ chordName: 'Bb6', beats: 2 }, { chordName: 'E9', beats: 2 }] },
          { chordName: 'Eb9 (Root 5)', bars: 2 },
          { chordName: 'Bb7 (Root 6)', bars: 1 },
          { chordName: 'Bb9 (Root 6)', bars: 1 },
          { chordName: 'F9 (Root 5)', bars: 1, subChords: [{ chordName: 'F9', beats: 2 }, { chordName: 'E9', beats: 1 }, { chordName: 'Eb9', beats: 1 }] },
          { chordName: 'Bb7 (Root 6)', bars: 1 },
          { chordName: 'F9 (Root 5)', bars: 1 }
        ],
        notesMy: 'James Brown, Stevie Wonder, George Benson စတိုင် Jazz Blues ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Omission of 5th Note in 9th Chords',
        nameMy: '5th Note ကို ချန်လှပ်ဖမ်းနည်း',
        explanationMy: 'Note ၅ လုံးပါသော 9th Chord တွင် 5th Note ကို မဖိဘဲ ချန်လှပ်ထားသော်လည်း 9th Chord ၏ သီးသန့် အသံအရောင်သည် ပြည့်စုံစွာ ထွက်ပေါ်သည်။',
        proTipMy: 'Finger 3 ဖြင့် ကြိုး ၁၊ ၂၊ ၃ ကို Half-barre ပြုလုပ်ရာတွင် Finger 2 ထက် အရင် နေရာချပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Finger 3 Half-Barre တွင် 1st string အသံ သေနေခြင်း',
        fixMy: 'Finger 3 အဆစ်ကို ပြားပြားလေး ထားပြီး Fret သံချောင်းနှင့် နီးကပ်စွာ ဖိပါ။'
      }
    ]
  },
  {
    id: 50,
    section: 3,
    title: 'Augmented Chords (+ / Aug)',
    titleMy: 'အခန်း ၅၀ - Augmented Chords (+ / Aug သံစဉ်များ)',
    subtitle: '1 - 3 - #5 Formula နှင့် 4 Frets တစ်ကြိမ် တူညီသော Symmetrical သဘောတရား',
    overviewMy: 'ဆန်းကြယ်ပြီး တက်ကြွသော အသံရှိသည့် Augmented Chords (F+, A+, Db+ / C#+) နှင့် 4 Frets စီ ရွှေ့တိုင်း တူညီသော အသံစု ဖြစ်ပေါ်သည့် သီအိုရီကို သင်ယူမည်။',
    keyPointsMy: [
      'Augmented Chord Formula: I - III - #V (1st, 3rd, Sharpened 5th)။ ဥပမာ C+ = C - E - G#။',
      'F+ = F - A - C#, A+ = A - C# - E# (F), Db+ = Db - F - A။ ဤ Chord ၃ မျိုးစလုံးတွင် ပါဝင်သော Notes များ အတိအကျ တူညီသည်။',
      'Symmetrical Property: Augmented shape တစ်ခုတည်းကို ၄ Frets စီ (Major 3rd) ရွှေ့သွားပါက တူညီသော Chord ၃ မျိုးစလုံးကို ရရှိစေသည်။',
      'အသုံးပြုပုံ: Major Chord မှ နောက် Chord သို့ ကူးပြောင်းရာတွင် ဆိုင်းငံ့အား ဖြည့်ဆည်းပေးရန် အထူးသုံးသည်။'
    ],
    chords: ['F_aug', 'Bbm_barre', 'F7_barre'],
    rhythms: [
      {
        id: 'r_aug_staccato',
        name: 'Augmented Staccato Strum (Exercise 115)',
        timeSignature: '4/4',
        descriptionEn: '4 Staccato down strums per bar',
        descriptionMy: 'Staccato ၄ ချက်ဖြင့် Augmented chord ခတ်ခြင်း',
        spokenCount: '1(chop), 2(chop), 3(chop), 4(chop)',
        beats: [
          { count: '1', type: 'staccato-down', accent: true },
          { count: '2', type: 'staccato-down' },
          { count: '3', type: 'staccato-down' },
          { count: '4', type: 'staccato-down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_115',
        title: 'Exercise 115 - Augmented Chord Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၁၁၅ - Cm -> G+ -> Cm7 -> F7 Augmented သံစဉ်တွဲ',
        exerciseNumber: 115,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'Cm (Root 5 - 3rd)', bars: 1 },
          { chordName: 'G+ (4th Fret)', bars: 1 },
          { chordName: 'Cm7 (Root 5 - 3rd)', bars: 1 },
          { chordName: 'F7 (Root 6 - 1st)', bars: 1 }
        ],
        notesMy: 'G+ ဖမ်းစဉ် လက်ညှိုး Barre ကို မလွှတ်ဘဲ ထားပါက Cm မှ Cm7 သို့ အလွန်လွယ်ကူစွာ ကူးနိုင်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Finding Any Augmented Chord',
        nameMy: 'Augmented Chord ကို လွယ်ကူစွာ ရှာဖွေနည်း',
        explanationMy: 'ရှာဖွေလိုသော Note (ဥပမာ C) ကို ကြိုး ၁၊ ၂၊ ၃၊ ၄ ပေါ်တွင် ရှာပြီး ၎င်း note ကို အခြေခံ၍ Augmented shape ဖမ်းလိုက်ပါက C+ (သို့မဟုတ် E+ သို့မဟုတ် Ab+) ဖြစ်လာသည်။',
        proTipMy: 'Jazz နှင့် Film Score ဂီတများတွင် အထူးနာမည်ကြီးသော အလှဆင်နည်း ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Augmented Chord တီးရာတွင် ကြိုး ၅ နှင့် ၆ အသံ ထွက်နေခြင်း',
        fixMy: 'Augmented Shape သည် ကြိုး ၄၊ ၃၊ ၂၊ ၁ (သို့မဟုတ် ၆၊ ၄၊ ၃၊ ၂) တွင်သာ တီးရသည်။ ကြိုး ၅ နှင့် ၆ ကို တီးခတ်ခြင်း မပြုရပါ။'
      }
    ]
  },
  {
    id: 51,
    section: 3,
    title: 'Diminished Chords (° / Dim)',
    titleMy: 'အခန်း ၅၁ - Diminished Chords (° / Dim လျှို့ဝှက်ဆန်းကြယ်သံစဉ်)',
    subtitle: '1 - b3 - b5 - bb7 Formula နှင့် 3 Frets တစ်ကြိမ် တူညီသော Symmetrical သဘောတရား',
    overviewMy: 'တင်းအားအမြင့်ဆုံးနှင့် လျှို့ဝှက်ဆန်းကြယ်သော Diminished Chords (Eb°, A°, C°, Gb°) နှင့် ၃ Frets စီ ရွှေ့တိုင်း တူညီသော သီအိုရီကို သင်ယူမည်။',
    keyPointsMy: [
      'Diminished Chord Formula: I - bIII - bV - bbVII (1st, Flat 3rd, Flat 5th, Double-flat 7th)။',
      'Eb° = Eb - Gb - A - C, A° = A - C - Eb - Gb, C° = C - Eb - Gb - A, Gb° = Gb - A - C - Eb။ ဤ Chord ၄ မျိုးစလုံးတွင် ပါဝင်သော Notes များ အတိအကျ တူညီသည်။',
      'Symmetrical Property: Diminished Shape တစ်ခုတည်းကို ၃ Frets စီ (Minor 3rd) ရွှေ့သွားပါက တူညီသော Chord ၄ မျိုးစလုံးကို ရရှိစေသည် (Fret 1 = Fret 4 = Fret 7 = Fret 10)။',
      'သီချင်းတစ်ပုဒ်တွင် တင်းအားမြင့်မားသော Suspense / Passing Chord အဖြစ် အသုံးများသည်။'
    ],
    chords: ['Eb_dim', 'G', 'Am', 'D7'],
    rhythms: [
      {
        id: 'r_dim_suspense',
        name: 'Diminished Movement Strum (Exercise 116)',
        timeSignature: '4/4',
        descriptionEn: 'V (1), V^ (2+), V^ (3+), V^ (4+)',
        descriptionMy: '3 Frets စီ ရွှေ့လျားတီးခတ်သော Diminished ရစ်သမ်',
        spokenCount: '1, 2-and, 3-and, 4-and',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_116',
        title: 'Exercise 116 - Diminished Symmetrical Neck Shifting',
        titleMy: 'လေ့ကျင့်ခန်း ၁၁၆ - Eb° (1st Pos -> 4th Pos -> 7th Pos -> 10th Pos)',
        exerciseNumber: 116,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'Eb° (1st Pos)', bars: 1 },
          { chordName: 'Eb° (4th Pos)', bars: 1 },
          { chordName: 'Eb° (7th Pos)', bars: 1 },
          { chordName: 'Eb° (10th Pos)', bars: 1 }
        ],
        notesMy: 'Fret ၁၊ ၄၊ ၇၊ ၁၀ သို့ ပုံစံမပျက် ရွှေ့တီးပါ။ အသံတူညီသော်လည်း Pitch မြင့်တက်သွားသော လှပသည့် သံစဉ်ကို ခံစားပါ။'
      },
      {
        id: 'ex_117',
        title: 'Exercise 117 - G -> Bb° -> Am -> D7 Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၁၁၇ - G -> Bb° -> Am -> D7 Passing Diminished သံစဉ်တွဲ',
        exerciseNumber: 117,
        timeSignature: '3/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Bb° (2nd Pos)', bars: 1 },
          { chordName: 'Am', bars: 1 },
          { chordName: 'D7', bars: 1 }
        ],
        notesMy: 'G မှ Am သို့ ကူးရာတွင် Bb° ကို ကြားခံ Passing chord အဖြစ် အလွန်လှပစွာ သုံးထားသည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Diminished Passing Resolution',
        nameMy: 'Diminished ကြားခံသံဖြင့် ဆွဲဆောင်နည်း',
        explanationMy: 'I Chord (G) နှင့် ii Chord (Am) ကြားတွင် #I° သို့မဟုတ် bIII° (Bb°) ကို ထည့်သွင်းခြင်းဖြင့် ရိုးရိုးသီချင်းတစ်ပုဒ်ကို ချက်ချင်း Jazz/Vintage အရောင် ပြောင်းလဲစေသည်။',
        proTipMy: 'သီချင်းဟောင်းများနှင့် Jazz သံစဉ်တိုင်းတွင် အမြဲတွေ့ရသော လျှို့ဝှက်ချက်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Diminished Shape ဖမ်းရာတွင် လက်ချောင်းများ ထပ်နေခြင်း',
        fixMy: 'Finger 1 (ကြိုး ၄), Finger 3 (ကြိုး ၃), Finger 2 (ကြိုး ၂), Finger 4 (ကြိုး ၁) ကို ဇစ်ဇက် (Zig-zag) ပုံစံဖြင့် သေချာ ထားပါ။'
      }
    ]
  },
  {
    id: 52,
    section: 3,
    title: 'Jazz Alternative Forms (G6, Gm7, Gm6) & Jazz Blues in G',
    titleMy: 'အခန်း ၅၂ - Jazz Alternative Chords (G6, Gm7, Gm6) နှင့် Jazz Blues in G',
    subtitle: 'Thumb & Wrist Mute ဖြင့် ဖမ်းသော Jazz Chords များနှင့် Jazz Blues',
    overviewMy: 'ပရော်ဖက်ရှင်နယ် Jazz ဂစ်တာသမားများ သုံးသော Root 6 Alternative Chords (G6, Gm7, Gm6)၊ လက်ကောက်ဝတ် အနေအထားနှင့် Jazz Blues in G ကို သင်ယူမည်။',
    keyPointsMy: [
      'G6 Alternative Form: ကြိုး ၆ (Finger 2), ကြိုး ၄ (Finger 1), ကြိုး ၃ (Finger 4), ကြိုး ၂ (Finger 3)။ ကြိုး ၅ နှင့် ၁ ကို Mute ထားသည်။',
      'Gm7 Alternative Form: ကြိုး ၆ (Finger 2), Finger 3 ဖြင့် ကြိုး ၄၊ ၃၊ ၂၊ ၁ ကို Barre ဖိသည်။',
      'Gm6 Alternative Form: Formula = 1 - b3 - 5 - 6 (Gm6 = G - Bb - D - E)။',
      'Jazz Blues in G (Exercise 120): Gmaj7, G6, Am7, Am6, Bm7, Bbm7, Ab7 ပေါင်းစပ်ထားသည်။'
    ],
    chords: ['G6_jazz', 'Cmaj7', 'Amaj7'],
    rhythms: [
      {
        id: 'r_jazz_blues_g',
        name: 'Jazz Blues in G Strum (Exercise 120)',
        timeSignature: '4/4',
        descriptionEn: 'V^V^ (1e+a) V (2) V (3) V (4)',
        descriptionMy: 'Beat 1 တွင် 16th note ပါပြီး 2, 3, 4 တွင် Staccato ခတ်သော Jazz Strum',
        spokenCount: '1-e-+-a, 2(chop), 3(chop), 4(chop)',
        beats: [
          { count: '1', type: 'down', sixteenth: true, accent: true },
          { count: 'e', type: 'up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true },
          { count: '2', type: 'staccato-down', accent: true },
          { count: '3', type: 'staccato-down', accent: true },
          { count: '4', type: 'staccato-down', accent: true }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_118',
        title: 'Exercise 118 - G -> Gmaj7 -> G6 Jazz Movement',
        titleMy: 'လေ့ကျင့်ခန်း ၁၁၈ - G -> Gmaj7 -> G6 -> Gmaj7 Jazz သံစဉ်တွဲ',
        exerciseNumber: 118,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Gmaj7', bars: 1 },
          { chordName: 'G6 (Jazz)', bars: 1 },
          { chordName: 'Gmaj7', bars: 1 }
        ],
        notesMy: 'Gmaj7 မှ G6 သို့ ပြောင်းရာတွင် Finger 4 သည် 3rd string ပေါ်တွင် Pivot အဖြစ် မကြွဘဲ နေနိုင်သည်။'
      },
      {
        id: 'ex_120',
        title: 'Exercise 120 - Full Jazz Blues in G',
        titleMy: 'လေ့ကျင့်ခန်း ၁၂၀ - Root 6 Jazz Chords စုံလင်သော Jazz Blues in G',
        exerciseNumber: 120,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'Gmaj7', bars: 1 },
          { chordName: 'G6', bars: 1 },
          { chordName: 'Am7', bars: 1 },
          { chordName: 'Am6', bars: 1 },
          { chordName: 'Gmaj7', bars: 1 },
          { chordName: 'G6', bars: 1 },
          { chordName: 'Bm7', bars: 1, subChords: [{ chordName: 'Bm7', beats: 2 }, { chordName: 'Bbm7', beats: 2 }] },
          { chordName: 'Am7', bars: 1, subChords: [{ chordName: 'Am7', beats: 2 }, { chordName: 'Ab7', beats: 2 }] },
          { chordName: 'Gmaj7', bars: 1 }
        ],
        notesMy: 'R.E.M., Wes Montgomery, Joe Pass စတိုင် Jazz Harmony အပြည့်အဝ ပါဝင်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Jazz Wrist Angle & String Muting',
        nameMy: 'Jazz လက်ကောက်ဝတ် အနေအထား',
        explanationMy: 'Barre Chords ကဲ့သို့ လက်ချောင်းအားလုံးကို ပြားကပ်မထားဘဲ လက်ကောက်ဝတ်ကို အနည်းငယ် ကွေးချကာ Finger 2 ၏ ကိုယ်ထည်ဖြင့် 5th string ကိုလည်းကောင်း၊ Finger 1 ၏ အောက်သားဖြင့် 1st string ကိုလည်းကောင်း Mute လုပ်ပေးရသည်။',
        proTipMy: 'Jazz Chords များသည် Bass နှင့် အလယ်ကြိုးများ၏ သန့်ရှင်းသော အသံကို ဦးစားပေးသည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Mute လုပ်ထားသော ကြိုး ၅ မှ မလိုလားအပ်သော အသံ ထွက်နေခြင်း',
        fixMy: 'Finger 2 ကို 6th string ဖိထားစဉ် အောက်သို့ အနည်းငယ် လှဲချပေးပါ။'
      }
    ]
  },
  {
    id: 53,
    section: 3,
    title: 'Moveable Dominant 7th Chords, Half-Step Slides & Anacrusis',
    titleMy: 'အခန်း ၅၃ - Moveable Dominant 7th၊ Half-Step Slides နှင့် Anacrusis (Lead-In)',
    subtitle: 'C7 ပုံစံ Moveable 7th Chords၊ 1/2 Fret လျှောရွှေ့နည်းနှင့် Beat မတိုင်မီ အစပျိုးခတ်ချက်',
    overviewMy: 'C7 ပုံစံကို 6th string Root ဖြင့် Fretboard အနှံ့ ရွှေ့တီးသော Moveable 7th Chord၊ 1/2 Fret အောက်မှ လျှောတက်သော Half-step slide နှင့် Anacrusis (Lead-in) ကို သင်ယူမည်။',
    keyPointsMy: [
      'Moveable 7th Chord (C7 Form): Open C7 ပုံစံမှ Finger 3 ကို 6th string သို့ ရွှေ့ပြီး ကြိုး ၅ နှင့် ၁ ကို Mute လုပ်ထားခြင်း ဖြစ်သည်။ Fret 1 = C7, Fret 3 = D7, Fret 6 = F7, Fret 8 = G7, Fret 10 = A7။',
      'Anacrusis (Lead-In): Bar 1 မစတင်မီ ရှေ့ Beat 4 ၏ အတက်ခတ်ချက် (+) မှ စတင်တီးခတ်သော အစပျိုးအချက် ဖြစ်သည်။',
      'Half-Step Slide (_S): Fret ၁ ကွက် အောက်မှနေ၍ Strum မခတ်ဘဲ မူလ Fret ပေါ်သို့ လက်ချောင်းကို ဖိထားရင်း လျှောတက်ခြင်း ဖြစ်သည်။'
    ],
    chords: ['C7', 'D7', 'A7', 'G7'],
    rhythms: [
      {
        id: 'r_anacrusis_blues',
        name: 'Anacrusis Slide Blues (Exercise 122 & 124)',
        timeSignature: '4/4',
        descriptionEn: 'Lead-in on 4+, Slide on 1, Percussive on 2+, 3+, 4+',
        descriptionMy: 'Beat 4+ တွင် စတင်ပြီး Beat 1 ၌ Slide ရွှေ့သော Blues Strum',
        spokenCount: 'Lead-in(+), SLIDE(1), CHUK(2+), CHUK(3+), CHUK(4+)',
        beats: [
          { count: '+', type: 'up', accent: true }, // Lead in
          { count: '1', type: 'down', glide: true },
          { count: '2', type: 'percussive-down' },
          { count: '+', type: 'percussive-up' },
          { count: '3', type: 'percussive-down' },
          { count: '+', type: 'percussive-up' },
          { count: '4', type: 'percussive-down' },
          { count: '+', type: 'percussive-up' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_122',
        title: 'Exercise 122 - 12 Bar in D with Moveable 7th Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၁၂၂ - D Key ၁၂ Bar Blues (Moveable 7th Chords & Lead-In)',
        exerciseNumber: 122,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'Db7 -> D7 (Lead-In)', bars: 4 },
          { chordName: 'Gb7 -> G7', bars: 2 },
          { chordName: 'Db7 -> D7', bars: 2 },
          { chordName: 'Ab7 -> A7', bars: 1 },
          { chordName: 'Gb7 -> G7', bars: 1 },
          { chordName: 'Db7 -> D7', bars: 1 },
          { chordName: 'Ab7 -> A7', bars: 1 }
        ],
        notesMy: 'Chord တိုင်းကို ၁ Fret အောက် (Db7 မှ D7, Gb7 မှ G7, Ab7 မှ A7) မှ လျှောတက်ပြီး စတင်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Half-Step Slur / Slide (_S)',
        nameMy: 'Semitone လျှောရွှေ့နည်း (Half-Step Slide)',
        explanationMy: 'Db7 ကို Beat 4+ တွင် ခတ်ပြီး Beat 1 ကျရောက်ချိန်တွင် ထပ်မခတ်ဘဲ လက်ဖိအားကို ထိန်းထားရင်း D7 (Fret 3) သို့ ချောမွေ့စွာ လျှောတက်လိုက်ခြင်း ဖြစ်သည်။',
        proTipMy: 'Stevie Ray Vaughan, Eric Clapton တို့ အမြဲတမ်း သုံးသော ဂန္ထဝင် Blues အဖွင့်နည်းစနစ် ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Slide ရွှေ့ရာတွင် အသံ ပြတ်တောက်သွားခြင်း',
        fixMy: 'Slide ရွှေ့နေစဉ် လက်ချောင်းများ၏ ဖိအားကို လုံးဝ မလွှတ်ပါနှင့်။ ကြိုးနှင့် ကပ်လျက် ရွှေ့ပါ။'
      }
    ]
  },
  {
    id: 54,
    section: 3,
    title: 'Advanced Sixteenth Note Rhythms & Course Completion Summary',
    titleMy: 'အခန်း ၅၄ - အဆင့်မြင့် 16th Note Rhythm စုံလင်ခြင်းနှင့် သင်တန်းပြီးမြောက်ခြင်း',
    subtitle: 'Up-stroke on Beat 1၊ Syncopated 16th Variations နှင့် Section 3 အနှစ်ချုပ်',
    overviewMy: 'Beat 1 တွင် Up-stroke ဖြင့် စတင်သော အဆင့်မြင့် 16th Note Rhythm Variations၊ Jazz/Funk ပေါင်းစပ်မှုများနှင့် Progressive Rhythm Guitar သင်တန်း အနှစ်ချုပ်ကို သင်ယူမည်။',
    keyPointsMy: [
      'Sixteenth Note Rhythm Variations: 1 e + a ၄ ချက်ခတ်ကွက်ကို နေရာစုံတွင် ပေါင်းစပ်၍ အကန့်အသတ်မရှိ ရစ်သမ်များ ဖန်တီးနိုင်သည်။',
      'Up-stroke on Beat 1 (Exercise 125): Bar အစ Beat 1 တွင် Up-stroke (^) ဖြင့် စတင်ခတ်သော ထူးခြားသည့် ရစ်သမ်။',
      'Beat 4 ၏ "and a" (4+a) တွင် Chord ပြောင်းလဲခြင်း။',
      'သင်တန်းပြီးမြောက်မှု: Open Chords, Barre Chords (Root 6, Root 5, C-form), 6th, 7th, maj7, 9th, aug, dim, sus chords အားလုံးနှင့် စည်းဝါးစုံ (4/4, 3/4, 6/8, triplets, 16ths, reggae, bossa, rock) ကို အောင်မြင်စွာ တတ်မြောက်ခဲ့ပြီ ဖြစ်သည်။'
    ],
    chords: ['G', 'Em', 'C', 'D', 'Am7', 'F#m7'],
    rhythms: [
      {
        id: 'r_16th_up_beat1',
        name: 'Up-Stroke on Beat 1 16th Pattern (Exercise 125 & 126)',
        timeSignature: '4/4',
        descriptionEn: 'Bar 1: V V V V^V | Bar 2: ^ V V V^V (16th on 4e+a)',
        descriptionMy: 'Bar 2 မှစ၍ Beat 1 တွင် Up-stroke ဖြင့် စတင်သော အဆင့်မြင့် 16th Pattern',
        spokenCount: '1, 2, 3, 4-e-+-a | ^(1), 2, 3, 4-e-+-a',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down', sixteenth: true },
          { count: 'e', type: 'up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true }
        ],
        defaultBpm: 80
      },
      {
        id: 'r_16th_funk_master',
        name: 'Master 16th Funk Pattern (Exercise 132)',
        timeSignature: '4/4',
        descriptionEn: 'V^ (1+) V ^ (2e+a) V^V^ (3e+a) VV (4+)',
        descriptionMy: 'Funk နှင့် Modern Acoustic အတွက် အပြည့်စုံဆုံး 16th Master Rhythm',
        spokenCount: '1+, 2-e-+-a, 3-e-+-a, 4+',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down', sixteenth: true },
          { count: 'e', type: 'up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true },
          { count: '3', type: 'down', sixteenth: true },
          { count: 'e', type: 'up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true },
          { count: '4', type: 'down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 75
      }
    ],
    exercises: [
      {
        id: 'ex_126',
        title: 'Exercise 126 - Turnaround with Beat 1 Up-Stroke (G - Em - C - D)',
        titleMy: 'လေ့ကျင့်ခန်း ၁၂၆ - Beat 1 Up-Stroke ပါဝင်သော Turnaround (G - Em - C - D)',
        exerciseNumber: 126,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'G', bars: 1 }
        ],
        notesMy: 'Chord ပြောင်းလဲမှုသည် Beat 4 ၏ နောက်ဆုံး "and a" (4+a) တွင် ဖြစ်ပေါ်သည်ကို သတိပြုပါ။'
      },
      {
        id: 'ex_131',
        title: 'Exercise 131 - Master Progression (Em7, Bm7, Cmaj7, Am7)',
        titleMy: 'လေ့ကျင့်ခန်း ၁၃၁ - Master Jazz/Pop Progression',
        exerciseNumber: 131,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'Em7 (Root 5)', bars: 1 },
          { chordName: 'Bm7 (Root 6)', bars: 1 },
          { chordName: 'Em7 (Root 5)', bars: 1 },
          { chordName: 'Bm7 (Root 5)', bars: 1 },
          { chordName: 'Cmaj7 (Root 5)', bars: 1 },
          { chordName: 'Am7 (Root 6)', bars: 1 },
          { chordName: 'Em7 (Root 5)', bars: 1 },
          { chordName: 'Bm7 (Root 6)', bars: 1 },
          { chordName: 'Em7 (Root 5)', bars: 1 }
        ],
        notesMy: 'သင်တန်းတစ်ခုလုံး၏ အနှစ်ချုပ် သံစဉ်တွဲဖြစ်ပြီး အဆင့်မြင့် Rhythm Guitarist တစ်ဦးအဖြစ် တီးခတ်နိုင်ပါပြီ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Complete Rhythm Guitar Mastery',
        nameMy: 'ရစ်သမ်ဂစ်တာ ပြည့်စုံစွာ ကျွမ်းကျင်မှု',
        explanationMy: 'ရစ်သမ်ဂစ်တာသမားကောင်းတစ်ယောက်သည် သီချင်း၏ အသက်ဖြစ်သော စည်းဝါး (Groove) နှင့် အသံဖွဲ့စည်းမှု (Harmony) ကို တည်ငြိမ်ခိုင်မာစွာ ထိန်းကျောင်းပေးနိုင်ရမည်။',
        proTipMy: 'သီချင်းများကို တီးခတ်ရာတွင် မူရင်းအဆိုတော်၊ တီးဝိုင်းတို့နှင့်အတူ တွဲဖက်တီးခတ်ပြီး စည်းဝါးခံစားမှုကို အမြဲမြှင့်တင်ပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: '16th Note အမြန်ခတ်ရာတွင် လက်ကောက်ဝတ် ညောင်းညာခြင်း',
        fixMy: 'Pick ကို လက်ညှိုးနှင့် လက်မကြားတွင် အနည်းငယ်သာ ပေါ်အောင် ထိန်းကိုင်ပြီး ပေါ့ပေါ့ပါးပါး ခတ်ပါ။'
      }
    ]
  }
];
